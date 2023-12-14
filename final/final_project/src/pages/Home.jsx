import React from 'react';
import './Home.css';
import ImageCarousel from '../components/ImageCarousel';
import coffee from '../assets/the-roost.jpeg';
import explore_flower from '../assets/explore-flower-garland.jpeg';
import explore_polevaulting from '../assets/explore-polevaulting.jpeg';

const Home = () => {
    const images = [
        coffee,explore_flower,explore_polevaulting
       
      ];

    return (
        <div className = 'text_content'>
            <h1>Animal Crossing: New Horizons </h1>
            <p> New to Animal Crossing: New Horizons? 
                Come get the lay of the land and learn what to expect when you set out to create 
                your own island paradise. If you're an island life veteran already, 
                we hope you will share this video with newcomers and welcome them with open arms!
            </p> 
            <ImageCarousel images={images} />
            {/* <p> New to Animal Crossing: New Horizons? 
                Come get the lay of the land and learn what to expect when you set out to create 
                your own island paradise. If you're an island life veteran already, 
                we hope you will share this video with newcomers and welcome them with open arms!
            </p> */}
            {/* <p>Each day brings new discoveries</p>
            <p>
                Live life at your own pace as you garden, fish, decorate, hunt for bugs and fossils,
                get to know the animal residents, and more. The time of day and seasons match real life, 
                so something is happening on your island whether you're there or not.
            </p>
            <p>Make friends with adorable animal villagers and have fun creating a world of your own in the Animal Crossing series.</p> */}
        </div>
    );
};

export default Home;