import React from 'react';
import './news_style.css';
import Panel from '../components/panel';
import newsImg1 from '../assets/LEGO_Animal_Crossing_Minifigures.png';
import newsImg2 from '../assets/Nintendo_Network_Logo.png';
import newsImg3 from '../assets/Farley_silhouette.png';
import newsImg4 from '../assets/Animal_Crossing_Enciclopedia_Logo.png';

const News = () => {
    const newsData = [
        {
          title: 'LEGO Animal Crossing5th Oct 2023',
          time: '5th Oct 2023',
          imageSrc: newsImg1,
          content: 'Nintendo and LEGO have announced LEGO Animal Crossing, which will include minifigures of various Animal Crossing characters.',
        },
        {
          title: 'Nintendo 3DS/Wii U online service discontinuation',
          time: '3rd Oct 2023',
          imageSrc: newsImg2,
          content: 'Nintendo has announced the discontinuation of online services for the Nintendo 3DS and Wii U in early April 2024. As a result, online functionality in Animal Crossing: New Leaf and Animal Crossing: Happy Home Designer will no longer be usable from this date.',
        },
        {
            title: 'A mysterious spirit has been reported!',
            time: '1st Apr 2023',
            imageSrc: newsImg3,
            content: 'Nookipedia users have been reporting that a mysterious spirit is roaming around the wiki! He is purportedly both wise and evasive, and our staff have been unable to catch him. Can you?',
        },
        {
            title: 'The Spanish Animal Crossing wiki has gone independent!',
            time: '7th Mar 2023',
            imageSrc: newsImg4,
            content: "Animal Crossing Enciclopedia, the Spanish-language Animal Crossing wiki, has recently gained independence! Originally founded on Wikia in 2008, the wiki is now hosted at animalcrossing.wikidex.net. Nookipedia will be working with Animal Crossing Enciclopedia to provide interlanguage links to each other's articles.",
        },
        
    ];

    return (
        <div>
            
            <div className="panelset">
            <h1 className ="page_title">News</h1>
                {newsData.map((news, index) => (
                    <Panel 
                        key = {index}
                        title = {news.title}
                        time={news.time}
                        imageSrc={news.imageSrc}
                        content={news.content}
                    />
                ))}
            </div>
        </div>
 
    );
};

export default News;