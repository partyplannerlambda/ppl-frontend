import React from 'react';

export default function(props){
    console.log(props)
    let imgUrl = "/imgs/moodModal.jpg"
    return <img src={`${imgUrl}`} />
}