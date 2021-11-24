import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// the data API 
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading,setLoading] = useState(true);
  const [tours,setTours] = useState([]);
  
  // the tour fetching from API Function ,
  //  then passing the data into tours
  const gettours = async ()=>{
    setLoading(true);
    try {
      const res = await fetch(url),
          tours = await res.json();
      setTours(tours);
      setLoading(false);
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }
  // removing the tour function
  const Removebtn = (id)=>{
    const newTours = tours.filter((tour)=>tour.id !== id);
    setTours(newTours);
  };

  // trigger the fetching function by using use effect
  useEffect(()=>{
    gettours();
  },[])

  // trigger the loading page
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(tours.length === 0){
    return <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={()=>gettours()}> Refresh </button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={tours} Removebtn={Removebtn}/>
    <footer>
      <h4 className="name">this app was made by: Ahmed Barakat</h4>
    </footer>
  </main>
}

export default App
