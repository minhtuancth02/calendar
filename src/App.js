import React from 'react'
import './App.css';
import Calendar from './calendar/calendar';
// import Rating from './rate/Rating';
import { StarRate } from './rate/starRate';


function App() {
  return (
    <div className="App">
      <Calendar />
      {/* <Rating value={3} /> */}
      <StarRate />
    </div>
  );
}

export default App;
