import { useEffect, useState } from "react";
import { createContext } from "react";
import { dummyCourses } from "../assets/assets";
import { Form, useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import {useAuth, useUser} from "@clerk/clerk-react";



export const AppContext = createContext()

export const AppContextProvider = (props) => {

  const currency = import.meta.env.VITE_CURRENCY

  const navigate = useNavigate()

  const {getToken} = useAuth()
  const {user} = useUser()

  const [allCourses,setAllCourses] = useState([])

  const [isEducator,setIsEducator] = useState(true)

  const [enrolledCourses, setEnrolledCourses] = useState([])

  //Fetch
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses)
  }

  //rating
  const calculateRating = (course) => {
    if(course.courseRatings.length === 0){
      return 0;
    }
    let totalRating = 0
    course.courseRatings.forEach(rating => {
      totalRating += rating.rating
    })
    return totalRating / course.courseRatings.length
  }

  //course chapter
  const calculateChapterTime = (chapter) => {
    let time = 0
    chapter.chapterContent.map((lecture) =>time += lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units:["h","m"]})
  }

  //course duration of each chapter
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>chapter.chapterContent.map(
      (lecture) => time += lecture.lectureDuration
    )) 
    return humanizeDuration(time * 60 * 1000, {units:["h","m"]})
  }

  //No.of Lectures in the course
  const calculateNoOfLectures = (course) =>{
   let totalLectures = 0;
   course.courseContent.forEach(chapter => {
    if(Array.isArray(chapter.courseContent)){
      totalLectures += chapter.courseContent.length
    }
   });
   return totalLectures;
  }

  //fetch user 
  const fetchUserEnrolledCourses = async ()=>{
    setEnrolledCourses(dummyCourses)
  }

  useEffect(() => {
    fetchAllCourses()
    fetchUserEnrolledCourses()
  },[])

  const logToken = async () => {
    console.log(await getToken());
  }
  

  useEffect(() => {


    if(user){
      logToken()
    };
  },[user])
  
  const value ={
    currency , allCourses , navigate , calculateRating , isEducator , setIsEducator , 
    calculateChapterTime , calculateCourseDuration , calculateNoOfLectures, 
    enrolledCourses, fetchUserEnrolledCourses
  }


  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}