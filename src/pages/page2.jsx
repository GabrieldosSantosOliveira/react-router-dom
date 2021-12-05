import { Outlet, Link } from "react-router-dom";

import React from 'react';


export default function Page2()  {
  return (
<h1>
<Link to="/">App</Link>
<Link to="/page1">Page1</Link>

    <Link to="/page3">Page3</Link>
    <Link to="/page4">Page4</Link>
    <Link to="/page5">Page5</Link>
   <Outlet/>
Você acessou a pagina 2
</h1>
    
  );
}
