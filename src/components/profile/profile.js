import React from 'react';
import { useState } from 'react';
import './profile.css';

export function Profile() {
  let [image, setImage] = useState("https://w0.peakpx.com/wallpaper/104/666/HD-wallpaper-rohit-sharma-the-hitman-rohit-sharma-the-hitman.jpg" )
  let [name , setName]=useState("Rohit Sharma")
  let [age , setage]=useState("36")
  let [gender , setgender]=useState("Male")
  let[description,setdesp]=useState("Rohit Sharma, born on April 30, 1987, in Bansod, Nagpur, India, is a prominent Indian cricketer known for his elegant batting style and remarkable ability to score big runs. He is widely regarded as one of the most talented batsmen in contemporary cricket.")
  let [email , setemail]=useState("rohitshana45@gmail.com")
  let [dark, setdark] = useState({bgColor:"white",textColor:"black"});

  const todark=(event)=>
  {
      if(event.target.checked)
      {
        setdark({bgColor:"gray",textColor:"white"})
      }
      else{
        setdark({bgColor:"white",textColor:"black"})
      }
  }

  const changeContent = () => {
    setImage("https://w0.peakpx.com/wallpaper/104/666/HD-wallpaper-rohit-sharma-the-hitman-rohit-sharma-the-hitman.jpg");
    setName("Rohit Sharma");
    setage("36");
    setgender("Male");
    setemail("rohitshana45@gmail.com");
    setdesp("Rohit Sharma, born on April 30, 1987, in Bansod, Nagpur, India, is a prominent Indian cricketer known for his elegant batting style and remarkable ability to score big runs. He is widely regarded as one of the most talented batsmen in contemporary cricket.");
  };

  const changeContent1 = () => {
    setImage("https://i.pinimg.com/236x/e6/5c/e6/e65ce6bde90ab8093b03a74df6e96982.jpg");
    setName("Virat Kohli");
    setage("35");
    setgender("Male");
    setemail("virat18k@gmail.com");
    setdesp("Virat Kohli, born on November 5, 1988, in Delhi, India, is one of the most renowned cricketers globally. He made his international debut for India in 2008 and quickly rose to prominence with his exceptional batting skills and aggressive playing style. Kohli is often regarded as one of the greatest batsmen of all time");
  }; 

  

  return (
    <div>
      <div className="cont" style={{backgroundColor:dark.bgColor,color:dark.textColor}}>
        <div className="pic">
          <img src={image} width="100%" height="100%" alt="Virat Kohli" />
        </div>
        <div className="body">
          <dl>
            <dt>Name:</dt>
            <dd>{name}</dd>
          </dl>
          <dl>
            <dt>Age:</dt>
            <dd>{age}</dd>
          </dl>
          <dl>
            <dt>Gender:</dt>
            <dd>{gender}</dd>
          </dl>
          <dl>
            <dt>Email:</dt>
            <dd>{email}</dd>
          </dl>
          <dl>
            <dt>Description:</dt>
            <dd>{description}</dd>
          </dl>

          <button className="btn btn-outline-danger mx-3" onClick={changeContent1}>Virat </button>
          <button className="btn btn-outline-primary mx-3" onClick={changeContent}>Rohit</button>

          <br /><br />

          <label>
            <input type="checkbox" onChange={todark} />
            Dark Theme
          </label>
        </div>
      </div>
    </div>
  );
}

