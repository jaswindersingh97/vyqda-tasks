import React from 'react'
import styles from './Task.module.css';
function Task({data}) {
    // const data = {
    //     heading :"heading",
    //     paragraph:"loremIpsum text",
    //     timestamp:"223.2342342",
    // }
  return (
    <div className={styles.container}>
      <h1>{data.heading}</h1>
      <p>{data.paragraph}</p>
      <span>{data.timestamp}</span>
      <button>Delete</button>
    </div>
  )
}

export default Task
