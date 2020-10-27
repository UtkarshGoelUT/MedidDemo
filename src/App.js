import React from 'react';
import Allergies from './components/Allergies';
import './styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>MedId Demo</h1>
        <form className='form'>
          <div className='formelement'>
            <label>Name: </label>
            <input type='text'></input>
          </div>
          <div className='formelement'>
            <label>DoB: </label>
            <input type='date'></input>
          </div>

          <div className='formelement'>
            <label>Gender: </label>
            <select>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div className='formelement'>
            <Allergies></Allergies>
          </div>
          <input type='submit'></input>
        </form>
      </div >
    );
  }
}

export default App;
