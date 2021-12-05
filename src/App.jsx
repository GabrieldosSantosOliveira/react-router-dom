import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './App.css';

function App() {
  return (
 <div>
 <h1>
    <Link to="/page1">Page1</Link> {" "}
    <Link to="/page2">Page2</Link>
    <Link to="/page3">Page3</Link>
    <Link to="/page4">Page4</Link>
    <Link to="/page5">Page5</Link>
     </h1>
      <Outlet />
    <main>
      React⚛️ + Vite⚡ + Replit🌀
    </main>
   
    

</div>
  );
}

export default App;