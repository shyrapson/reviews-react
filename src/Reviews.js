import React, { useState } from 'react'
import people from './data.js';

function Reviews() {
    const [index, setIndex] = useState(0)
    const {job,name,image,text} = people[index]

const checkPerson = (index) => {
    if(index > people.length-1){
        return 0
    }
    if(index < 0){
        return people.length-1
    }
    return index
};
const prevBtn = (index) =>{
 
    setIndex((index)=>{
        let newIndex = index -1;
        return checkPerson(newIndex)
    })
    
    };

const nextBtn = () =>{
 
setIndex((index)=>{
    let newIndex = index +1;
    return checkPerson(newIndex)
})

};
const randomBtn = ()=>{
  
        let newIndex = Math.floor(Math.random() * people.length)
        if(newIndex === index) {
            newIndex = index + 1
        }
       setIndex( checkPerson(newIndex))
    
}

    return (
        <article className='review'>
            <div  className='img-container'>
            <img src={image} alt={image} className='person-img' />
            </div>
           
            <h1 className='author'>{name}</h1>
            <h2 className='job'>{job}</h2>
            <p className='info'>{text}</p>
            <div className='button-container'> <button className='prev-btn' onClick={prevBtn}>prev</button>
            <button className='next-btn' onClick={nextBtn}>next</button></div>
           
            <button  className='random-btn' onClick={randomBtn}>suprise me</button>
            
        </article>
    )
}

export default Reviews
