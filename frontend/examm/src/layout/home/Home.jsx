import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/header/Header'
import Sectionfirst from '../../pages/Sectionfirst'
import Crud from '../../pages/Crud/Crud'
import Second from '../../pages/second/Second'

const Home = () => {
  return (
    <>
    <Header/>
<Navbar/>
<Sectionfirst/>
<Crud/>
<Second/>
</>
  )
}

export default Home