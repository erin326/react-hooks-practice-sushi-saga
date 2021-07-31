import React, {useEffect, useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer() {
  const [sushiList, setSushiList] = useState([]);

  const [allSushi, setAllSushi] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/sushis/`)
    .then(r => r.json())
    .then(data => {
  
      let shortArrays = [];
      for(let i = 0; i < data.length; i += 4) {
        shortArrays.push(data.slice(i, i + 4)
        )
      }
   
      let randomSushi = shortArrays[Math.floor(Math.random() * shortArrays.length)]
      console.log(randomSushi);
      setSushiList(randomSushi)
      setAllSushi(data)
     
    })
    .catch(error => console.log(error))

  },[])

  function nextSushi() {
    console.log(allSushi)
    }
  


  const sushis = sushiList.map(sushi => {
    return <Sushi key={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} created_at={sushi.created_at} /> 
  })

  

  return (
    <div className="belt">
      {sushis}
      <MoreButton 
      onMoreClick={nextSushi}
      />
    </div>
  );
}

export default SushiContainer;
