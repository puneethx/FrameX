import React from 'react'
import "./Application.scss"
const Application = () => {

  return (
    <>
    <div className='application'>
    <div className='main-head'>
      Your Application
    </div>
      <form className='forml'>
        <label>
          Full name<br></br>
          <input type='text' name='name' />
        </label><br></br>
        <label>
          Prederred name<br></br>
          <input type='text' name='pname' />
        </label><br></br>
        <label>
          Phone no<br></br>
          <input type='number' name='phone' />
        </label><br></br>
        <label>
          Gender<br></br>
          <select>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="not">Rather not</option>
          </select>
        </label><br></br>
        <label>
          Bio<br></br>
          <textarea /> {/* value={this.state.value} onChange={this.handleChange} */}
        </label><br></br>
        <label>
          Resume<br></br>
          <input type='file'/>
        </label><br></br>
        
      </form>
    </div>
    </>
  )
}

export default Application