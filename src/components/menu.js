import React from 'react';
import { Link } from 'gatsby';

function Menu(){
  return(
    <ul style={{
      listStyle:'none',
      backgroundColor:'#f6f5f5', 
      display:'flex',
      justifyContent:"flex-end", 
      fontSize:"1rem",
      textTransform: 'uppercase',
      margin:0
    }}>
    <li style={{margin:`0 1rem`}}><Link to="/products">Produkty</Link></li>
    <li style={{margin:`0 1rem`}}><Link to="/about">Kontakt</Link></li>
  </ul>
  )
}

export default Menu