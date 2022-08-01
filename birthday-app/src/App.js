import React, { useState } from 'react';
import data from './Components/data';
import List from './Components/List';
import Button from '@mui/material/Button';

function App() {
  const [people, setpeople] = useState(data)
  return (
  <main>
    <section className='container'>
      <h3> {people.length} Birthdays Today</h3>
      <List people={people} />
      {/* <Button variant='contained' onClick={()=> console.log('You clicked me')}>Clear All</Button> */}
      <Button variant='contained' onClick={()=> setpeople([])('You clicked me')}>Clear All</Button>

    </section>
    </main>
 );
}

export default App;
