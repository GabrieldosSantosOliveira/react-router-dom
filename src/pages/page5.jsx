import { Outlet, Link } from "react-router-dom";

import React from 'react';


export default function Page5()  {
  return (
<h1>
<Link to="/">App</Link>
<Link to="/page1">Page2</Link>

    <Link to="/page2">Page3</Link>
    <Link to="/Page3">Page4</Link>
    <Link to="/page4">Page5</Link>
   <Outlet/>
Você acessou a pagina 5
</h1>
    
  );
}
