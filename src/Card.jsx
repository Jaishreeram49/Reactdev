import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">To view my {props.para} click on the button below.</p>

    <a href={props.link} className="btn btn-primary">Click here </a>
    
  </div>
</div>
      
    </>
  )
}

export default Card
