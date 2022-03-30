import React, { Suspense } from 'react';
import './App.css';

const Main = React.lazy(() => import('./sections/Main/Main'));
const Body = React.lazy(() => import('./sections/Body/Body'));
const Last = React.lazy(() => import('./sections/Last/Last'));
const Posts = React.lazy(() => import('./sections/Posts/Posts'));
const Skill = React.lazy(() => import('./sections/Skill/Skill'));
const Works = React.lazy(() => import('./sections/Works/Works'));

function App() {
  return (
    <div className="App">
     
     <Suspense fallback={<div>Loading...</div>}>
        <Main />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
        <Works/>
        </Suspense>
          
        <Suspense fallback={<div>Loading...</div>}>
        <Skill />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
        <Body/>
        </Suspense>
     
     
      
    
      
        <Suspense fallback={<div>Loading...</div>}>
        <Posts />
        </Suspense>
      
        <Suspense fallback={<div>Loading...</div>}>
        <Last/>
        </Suspense>
    </div>
  );
}

export default App;
