import React, { useState } from 'react';
import Video from './Video';
import { CategoryType, Category, VideosData, VideoType } from '../../../Api/index';
import { Link, useNavigate } from 'react-router-dom';

type Props = {
  handleCategory:(tag: CategoryType) => void,
  cateogry:CategoryType[],
  categoryAll:string,
  onDisplay:VideoType[]
};

const Home: React.FC<Props> = ({ handleCategory,cateogry,categoryAll,onDisplay }: Props) => {
 
  const navigate = useNavigate()

  const selectedVideo =(id:number)=>{
    navigate(`/video-selected/${id}`)
  }

  return (
    <div className="homeContainer" id="homeContainer">
      <div className="categoryContainer" style={{
            position: 'fixed',
            zIndex: '1',
            padding: "12px 20px",
            top: '58px',
            width: '100%',
            marginBottom:'20px'
      }}>
        {cateogry.map((tab) => {
          return (
            <h3
              className={`categoryTab ${categoryAll === tab.category && 'active'}`}
              key={tab.id}
              onClick={() => handleCategory(tab)}
             
            >
              {tab.category}
            </h3>
          );
        })}
      </div>
      <div className="videoContainer" id='videoContainerId'>
        {onDisplay.map((video: VideoType) => {
          return (
            <div key={video.id} onClick={()=>selectedVideo(video.id)}>
              <Video video={video}  />
              </div>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
