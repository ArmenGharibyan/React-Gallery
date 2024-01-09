import React, { useState } from 'react'

import styles from '../global.module.css'


const SearchImage = ({searchText}) => {
   const [text, setText] = useState('')
   const search = ()=>{
    //    e.preventDefault()
       searchText(text)
   }

  return (
    <div className={styles[`search_part`]}>
      <input placeholder='Search' className={styles[`search`]} type='text' onChange={(e)=>{
        setText(e.target.value)
        search()
        }} />
      <button className={styles[`search_button`]} onClick={search}>search</button>
    </div>
  )
}

export default SearchImage
