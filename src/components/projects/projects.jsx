import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./projects.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const sliderImageUrl = [
  {
    url: "https://i.postimg.cc/KYjKCWCj/Capture.png",
  },
  {
    url: "https://i.postimg.cc/y8Vn3V3G/store.png",
  },
  {
    url: "https://i.postimg.cc/J7NbNf8C/quiz.png",
  },
  {
    url: "https://i.postimg.cc/c1Bngf7s/bird.png",
  },

  {
    url: "https://i.postimg.cc/85BjvV6y/calc.png",
  },
  {
    url: "https://i.postimg.cc/dt0LhptB/quote.png",
  },
  {
    url: "https://i.postimg.cc/CKb1yVmF/list.png",
  },
  {
    url: "https://i.postimg.cc/k4j4n6n7/Capture.png"
  },
  {
    url: "https://i.postimg.cc/fLksfHNh/55.png"
  }
];

// ... (your existing imports)

export const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-title">My work</h1>

      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <div>
                <img src={imageUrl.url} className="project-img" />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
