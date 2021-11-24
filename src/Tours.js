import React from 'react';
import Tour from './Tour';
const Tours = ({tours,Removebtn}) => {
  return <section>
    <div className="title">
      <h2>Our Tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour)=>{
        const {id,info,name,image,price} = tour;
        return <Tour key={tour.id} {...tour} Removebtn={Removebtn}/>
      })}
    </div>
  </section>
};

export default Tours;
