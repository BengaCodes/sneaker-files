import React from 'react'

const NewTrainerForm = ({name, brand, color, price, size, image, description, onSubmit, onChange}) => {
  return(
    <section className="new-trainer section is-medium">
    <div className="new-form container">  
  <form onSubmit={onSubmit}>
    <div className="field">
      <label className="label">Name</label>
        <div className="control">
          <input onChange={onChange} value={name} name="name" className="input" type="text" placeholder="Enter Trainers Name"/>
     </div>
      </div>
      <div className="field">
      <label className="label">Brand</label>
        <div className="control">
          <input onChange={onChange} value={brand} name="brand" className="input" type="text" placeholder="Enter Brand Name"/>
     </div>
      </div>
      <div className="field">
      <label className="label">Color</label>
        <div className="control">
          <input onChange={onChange} value={color} name="color" className="input" type="text" placeholder="Enter Color"/>
     </div>
      </div>
      <div className="field">
      <label className="label">Price</label>
        <div className="control">
          <input onChange={onChange} value={price} name="price" className="input" type="number" placeholder="Enter price"/>
     </div>
      </div>
      <div className="field">
      <label className="label">Size</label>
      <div className="select is-rounded">
      <select onChange={onChange} value={size} name="size">
      <option>1</option>
      <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
       <option>6</option>
       <option>6.5</option>
       <option>7</option>
       <option>7.5</option>
       <option>8</option>
       <option>8.5</option>
       <option>9</option>
       <option>9.5</option>
       <option>10</option>
       <option>10.5</option>
       <option>11</option>
       <option>11.5</option>
       <option>12</option>
        </select>
          </div>
      </div>
      <div className="field">
      <label className="label">Image</label>
        <div className="control">
          <input onChange={onChange} value={image} name="image" className="input" type="text" placeholder="Add image link"/>
     </div>
      </div>
      <div className="field">
      <label className="label">Description</label>
        <div className="control">
          <textarea onChange={onChange} value={description} name="description" className="textarea is-medium" placeholder="Brief description.."></textarea>
        </div>
        </div>
        <button className="button is-primary">Add New Kicks</button>
  </form>
  </div>
</section>
  )
}

export default NewTrainerForm