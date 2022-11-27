import React, { Suspense } from 'react';
import Image from './components/Image';
import fetchData from './utils/fetchData';

function App() {
  return (
    <div className='App'>
      <h1>Cat Image</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Image resource={fetchData()} />
      </Suspense>
    </div>
  );
}

export default App;
