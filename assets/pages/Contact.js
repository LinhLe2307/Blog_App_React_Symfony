import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2>Let me know what's on your mind</h2>
      <form>
        <div>
          <label>First Name</label>
          <input text="text" />
        </div>
        <div>
          <label>Last Name</label>
          <input text="text" />
        </div>
        <div>
          <label>Email Name</label>
          <input text="text" />
        </div>
        <div>
          <label>Leave us a message</label>
          <input text="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact