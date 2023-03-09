import Carousel from 'react-bootstrap/Carousel';
import './styles/Producitem.css';
const CarouselBanner = () => {
  return (
    <Carousel className='ab'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/assets/p2.jpg"
          alt="First slide"
          height={550}
        />
        <Carousel.Caption>
          <h2>NEW SEASON ARRIVALS</h2>
          <p>CHECKOUT ALL THE TRENDS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/assets/p1.jpg"
          alt="Second slide"
          height={550}

        />

        <Carousel.Caption>
          <h2>NEW SEASON ARRIVALS</h2>
          <p>CHECKOUT ALL THE TRENDS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="/assets/p1.jpg"
          alt="Third slide"
          height={550}

        />

        <Carousel.Caption>
          <h2>NEW SEASON ARRIVALS</h2>
          <p>CHECKOUT ALL THE TRENDS</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBanner;