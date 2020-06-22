import React from 'react'
import {Link} from 'react-router-dom'


// ? Component to show a single trainer on TrainerShow page.

const ShowATrainer = ({name, brand, onClick, color, size, price, image, description, _id}) => {
  return(
    <section className="single section">
    <div className="single-2 container">
      <div className="single-title">
      <h2 className="title has-text-left">{name}</h2>
      </div>
      <hr />
      <div className="single-col columns">
        <div className="show-img column is-half">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="column is-half">
          <h4 className="title is-4"><span role="img" aria-label="plate">👟</span> Description</h4>
          <p>{description}</p>
          <hr />
          <p><strong>Brand: </strong> {brand}</p>
          <hr />
          <p><strong>Size: </strong>{size}</p>
          <hr />
          <p><strong>Colour: </strong> {color}</p>
          <hr />
          <p><strong>Price: </strong> £{price}</p>
          <hr />
          <Link to={`/trainers/${_id}/edit`} className="button is-primary">Edit</Link>
          <hr />
          <button onClick={() => {if (window.confirm("Are you sure?")) onClick()}} className="button is-danger">Delete</button>
          <Link to={`/trainers/${_id}/comments`} className=" comment-button button is-dark">Add Comment</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ShowATrainer

