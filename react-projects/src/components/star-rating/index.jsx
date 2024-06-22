import { useState } from 'react';
// import {FaStar} from 'react-icons/fa';
import "./style.css"

export default function StarsRating({noOfStars=5}){

    const [rating, setRating] = useState();
    const [hover, setHover] = useState();

    function handleClicks(getid){
        console.log(getid);
        setRating(getid);
    }

    function handleMouseEnter(getid){
        console.log(getid);
        setHover(getid);
    }

    function handleMouseLeave(){
        
    }


    return(
        <div className="stars-rating">

            {
                [...Array(noOfStars)].map((_,index)=>{

                    index +=1;

                    return <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    stroke-width="0" 
                    viewBox="0 0 1024 1024"
                    height="5em" 
                    width="5em" 
                    xmlns="http://www.w3.org/2000/svg"
                    key={index}
                    className={index <= (rating || hover)? "active" : "inactive"}
                    onClick={()=>{handleClicks(index)}}
                    onMouseMove = {()=>{handleMouseEnter(index)}}
                    onMouseLeave = {()=>{handleMouseLeave()}}
                    >
                    <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    
                })
            }


        </div>
    )
}