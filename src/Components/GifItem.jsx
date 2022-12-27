// Se encarga de renderizar cada card con un gif

import React from 'react'

const GifItem = ({title, url}) => {
    console.log({title, url})
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifItem