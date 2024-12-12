import React from 'react'

function Task({data}) {
    // const data = {
    //     heading :"heading",
    //     paragraph:"loremIpsum text",
    //     timestamp:"223.2342342",
    // }
  return (
    <div>
      <h1>{data.heading}</h1>
      <p>{data.paragraph}</p>
      <span>{data.timestamp}</span>
      <button>Delete</button>
    </div>
  )
}

export default Task
