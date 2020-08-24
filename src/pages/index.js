import React from "react"
import { Link } from "gatsby"
import { AiOutlineArrowRight } from "react-icons/ai"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Moderný <br/> praktický <br/> elegantný</h1>
    <p>Sme malá rodinná firma a venujeme sa výrobe nábytku z masívu. Ja sa venujem celému procesu od návrhom až k výrobe, rodina je zodpovedná za testovanie každého kusu nábytku. 
      Kvalita a Vaša spokojnosť je pre nás prvoradá!</p>
    <p>Inšpirujte sa</p>
    <div style={{ marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/products">Ostatné produkty <AiOutlineArrowRight/></Link>
  </Layout>
)

export default IndexPage
