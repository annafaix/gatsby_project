import React from 'react';
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai"
import { FiMapPin } from "react-icons/fi" 
import SEO from "../components/seo"
import Layout from "../components/layout"

function AboutPage(){
  return(
    <Layout>
    <SEO title="About" />
    <h1>So mnou je RADOsť pracovať</h1>
    <div style={{display:`flex`, flexWrap:`wrap`,justifyContent:`space-between`}}>
      <div style={{display:`grid`, 
          padding:`1rem`,
          placeItems:`center`, 
          maxWidth: `350px`, 
          marginBottom: `1.45rem`, 
          maxHeight:`300px`, 
          color: `#f6f5f5`,
          textAlign:`center`,
          backgroundColor: `#ee6f57`, boxShadow:`10px 10px 1px grey`, flex:`0 1 300px` }}>
        <p>Kontaktujte ma <br/>
        <AiOutlineMail/> e-mailom:
          <a href="mailto:nabytok@faix.sk"> nabytok@faix.sk</a> 
          <br/> <AiOutlinePhone/> telefonicky <a href="tel:12345">12345</a>
        </p>
      </div>
      <div style={{ display:`grid`, 
        placeItems:`center`, 
        padding:`2rem`,
          maxWidth: `450px`, 
          marginBottom: `1.45rem`, 
          minHeight:`300px`, 
          color: `#f6f5f5`,
          boxShadow:`10px 10px 1px grey`,
          backgroundColor:`#ee6f57`, 
          flex:`1 2 500px`}}>
      
        <p>
         <FiMapPin/> Nájdete nás:
        </p>
        <iframe title="Kde nas najdete" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48436.890681803976!2d17.239358312168246!3d48.219018015071676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c9aad8f94c421%3A0x400f7d1c696fff0!2s900%2025%20Chorv%C3%A1tsky%20Grob%2C%20Slovakien!5e0!3m2!1ssv!2sse!4v1598257632217!5m2!1ssv!2sse" 
        style={{width:`100%`, height:`300px`, border:`0` }}></iframe>
        </div>
      </div>
  </Layout>
  )
}

export default AboutPage;