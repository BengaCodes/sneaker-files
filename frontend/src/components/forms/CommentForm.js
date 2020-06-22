import React from 'react'

const CommentForm = ({onChange, comments, onSubmit}) => {
  return(
    <section className="section">
        <form onSubmit={onSubmit}>
           <div className="field">
             <label className="label">Add a comment:</label>
             <textarea value={comments} onChange={onChange} name="text" className="textarea" placeholder="Add your comments..."></textarea>
             <br />
             <button className="button is-primary">Submit</button>
          </div>
        </form>
    </section>
    
  )
}

export default CommentForm