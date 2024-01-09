import React, {useEffect, useState} from "react"

import FullImage from "./components/FullImage"
import SearchImage from "./components/SearchImage"

import styles from './global.module.css'


const App = ()=>{

  const [images,setImages] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [term,setTerm] = useState(``)

  useEffect( ()=>{
    fetch(`https://pixabay.com/api/?key=40210893-62438275fb1fcdfdd24468156&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(result => {
      setImages(result.hits)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  },[term])
  console.log(images);


  return(
    <div>
      <SearchImage searchText={(text)=>setTerm(text)} />
    <div className={styles[`big`]}>

{!isLoading && images.length === 0 && <h2>no images found</h2>}

    {isLoading ? <h1>is loading...</h1>:
      images.map((image) => (
        
       <FullImage key={image.id} images={image} />
      ))
    }
    </div>
    </div>
  )
}

export default App