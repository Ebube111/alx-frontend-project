import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './News.css';
import NewsApi from 'newsapi';
import image from '../../images/trending.jpeg';
import eyes from '../../images/eye.svg';

const dummyData = [
  {
    url: 'https://crypto-news-live3.p.rapidapi.com/news',
    title:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ",
    urlToImage: image,
    time: '10 Hours ago',
  },
];

const News = () => {
  const [data, setData] = useState([]);

  const [sliderRef, setSliderRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = new NewsApi('4f72da92384f4c6cb35f1afe4dc287f9');

  /** HANDLING SLIDERS RESPONSIVENESS AND AUTOPLAY MODE */
  const conditions = {
    arrows: false,
    dots: false,
    speed: 5000,
    slidesToShow: 4,
    infinite: data?.length > 3,
    autoplay: true,
    slidesToScroll: 1,
    className: 'slider',
    afterChange: (current) => setCurrentIndex(current),
    responsive: [
      {
        breakpoint: 1755,
        settings: {
          slidesToShow: 2,
          infinite: data.length > 2,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          infinite: data.length > 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          infinite: data.length > 1,
        },
      },
    ],
  };

  return (
    <div className='news-container'>
      <div className='news-card-root'>
        <Slider ref={setSliderRef} {...conditions}>
          {data?.map((data, index) => (
            <div key={index}>
              <div className='news-card'>
                <div className='news-card-title'>
                  <img className='news-img' src={data?.urlToImage} />
                  <h1>{data?.title.substring(0, 100)}...</h1>
                </div>
                <div className='news-footer'>
                  <div className='news-time'>
                    Published: <span>{data?.time}</span>
                  </div>
                  <a target='_blank' href={data?.url} className='eyes'>
                    <img src={eyes} alt='' />
                    visit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default News;
