import { Outlet, Link } from "react-router-dom";

import React from 'react';


export default function Page4()  {
  return (
<h1>
<Link to="/">App</Link>
<Link to="/page1">Page2</Link>

    <Link to="/page2">Page3</Link>
    <Link to="/page3">Page4</Link>
    <Link to="/page5">Page5</Link>
   <Outlet/>
Você acessou a pagina 4
</h1>
    
  );
}
