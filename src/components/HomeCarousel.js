import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.triaxtec.com/wp-content/uploads/2018/02/shutterstock_178613660.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Create a Project</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/PM.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="e-block w-100"
          src="https://cloudinary.hbs.edu/hbsit/image/upload/s--gAAnShcM--/f_auto,c_fill,h_375,w_750,/v20200101/63FA86712AEE497FD9F306C31133994E.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

