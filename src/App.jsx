import React, { useState } from 'react'
import Header from './Header/Header'
import ProductBar from './ProductBar/ProductBar';
import CarouselComp from './Carousel/Carousel';
import Container from './PosterContainer.jsx/Container';
import ProductCarousel from './Carousel/ProductCarousel';
import DealsContainer from './GridContainer/DealsContainer';
import ProductList from './Footer/ProductList';
import FlipkartDetails from './Footer/FlipkartDetails';
import Footer from './Footer/Footer';

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <ProductBar />
      <CarouselComp />
      <Container />
      <ProductCarousel />
      <DealsContainer />
      <ProductList />
      <FlipkartDetails />
      <Footer />
    </>
  )
}

export default App