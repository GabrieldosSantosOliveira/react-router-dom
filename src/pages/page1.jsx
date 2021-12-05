import { Outlet, Link } from "react-router-dom";

import React from 'react';


export default function Page1()  {
  return (
<h1>
<Link to="/">App</Link>

<Link to="/page2">Page2</Link>
    <Link to="/page3">Page3</Link>
    <Link to="/page4">Page4</Link>
    <Link to="/page5">Page5</Link>
  
   
Você acessou a pagina 1


    
</h1>
    
  );
}
