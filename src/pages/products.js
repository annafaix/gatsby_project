import React from 'react';
import Layout from '../components/layout'
import Image from "../components/image"

function ProductPage(){
  return(
    <Layout>
      <h1> Produkty</h1>  
      <h2>Jedálenské stoly</h2>
      <h2>Konferenčné stolíky</h2>
      <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <h2>TV komody</h2>
    </Layout>
  )
}

export default ProductPage