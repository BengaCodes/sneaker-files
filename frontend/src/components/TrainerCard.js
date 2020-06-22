import React from 'react'

// * Give each trainer a link to show page
import {Link} from 'react-router-dom'

const TrainerCard = ({name, image, description, brand, color, size, price, _id}) => {
  return(
    <div className="tile column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to ={`/trainers/${_id}`}>
    <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={image} alt={name}/>
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="card-name title is-5">{name}</p>
          <p className="subtitle is-5"><strong>{brand}</strong></p>
        </div>
      </div>
    </div>
  </div>
    </Link>
    </div>

  )
}

export default TrainerCard