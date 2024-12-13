import React from 'react'
import styles from './Task.module.css';
function Task({data}) {
  return (
    <div className={styles.container}>
      <h1>{data.Heading}</h1>
      <p>{data.content}</p>
      <span>{data.timestamp}</span>
      <button>Delete</button>
    </div>
  )
}

export default Task
