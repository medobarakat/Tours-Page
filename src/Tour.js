import React, { useState } from 'react';

const Tour = ({id,info,name,image,price,Removebtn}) => {
const [read, setRead] = useState(false);
  return <article className="single-tour">
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price"> ${price}</h4>
      </div>
      <p>{read?info:`${info.substring(0,250)}`}
      <button onClick={()=>setRead(!read)}>{read?'Read less ...':'Read More ...'}</button></p>
      <button className="delete-btn" onClick={()=>Removebtn(id)}>Not Interested</button>
    </footer>
  </article>
};

export default Tour;
