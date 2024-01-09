import React from 'react'

import styles from '../global.module.css'

const FullImage = ({images}) => {
const tags = images.tags.split(',')
console.log(tags);

  return (
    <div className={styles[`part`]}>
      <img width={400} height={400} src={images.webformatURL} alt='my'  />
      <div className={styles[`box`]}>
      <h2 className={styles[`user`]}>Photo by {images.user}</h2>
       
     
      <span className={styles[`info`]}>views: {images.views}</span>
      <span className={styles[`info`]}>likes: {images.likes}</span>
      <span className={styles[`info`]}>likes: {images.downloads}</span>
        <div className={styles[`tag_box`]}>
       {tags.map((tag,index)=>(
        <span className={styles[`tag`]} key={index}>#{tag}</span>
       ))}  
       </div>
      </div>

    </div>
  )
}

export default FullImage
