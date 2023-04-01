import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryType, VideoType, VideosData, Category } from "../../../Api";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import defaultVideo from '../../../Assets/video/default.mp4'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {CgMailForward} from 'react-icons/cg'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
type Props = {

};

const SelectedVideo: React.FC<Props> = ({ }: Props) => {


    const [videoData, setVideoData] = useState<VideoType[]>(VideosData);
    const [cateogry, setCateogry] = useState<CategoryType[]>(Category);
    const [categoryAll, setCategoryAll] = useState('All');
    const [onDisplay, setOnDisplay] = useState<VideoType[]>(videoData);

    const { id }: any = useParams();
    const selectedVideo = videoData.find((video) => video.id === parseInt(id));

    const navigate = useNavigate()

    const countViews = (number: any) => {
        if (number.toString().length === 4) {
            return number.toString().slice(0, 1) + 'K'
        }
        if (number.toString().length === 5) {
            return number.toString().slice(0, 2) + 'K'
        }
        if (number.toString().length === 6) {
            return number.toString().slice(0, 3) + 'K'
        }
        if (number.toString().length === 7) {
            return number.toString().slice(0, 1) + 'M'
        }
        if (number.toString().length === 8) {
            return number.toString().slice(0, 2) + 'M'
        }
    }

    const selectVideoCategory = (tag: CategoryType): void => {
        setCategoryAll(tag.category);
        if (tag.category === 'All') {
            setOnDisplay(videoData);
            return;
        }
        setOnDisplay(videoData.filter((video) => video.category === tag.category));
    };
 
    const onVideoClick = (id: number) => {
        navigate(`/video-selected/${id}`)
        window.location.reload()
    }
    return (
        <div className="selectVideo" id="videoContainersID">
            <main>
                <div className="main__video">
                    <div className="main__video-container">
                        <video style={{ width: '880px', maxWidth: '100%' }} controls autoPlay loop muted >
                            <source src={defaultVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        {selectedVideo ? (
                            <div>
                                <h2 style={{ fontFamily: 'Roboto' }}>{selectedVideo.title}</h2>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' , width: '880px', maxWidth: '100%'}}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                                        <div>
                                            <img style={{ borderRadius: '50%', width: '50px' }} src={selectedVideo.logo} alt="" />
                                        </div>
                                        <div>
                                            <p className="subscribe_channel">{selectedVideo.channel}</p>
                                            <p className="subscribe_p"> {countViews(selectedVideo.subscribers)} <span>subscribers</span></p>
                                        </div>
                                        <div>
                                            <button className="subscribe">Subscribe</button>
                                        </div>
                                    </div>
                                    <div className="style-scope" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div className="like__button">
                                            <button ><ThumbUpOffAltIcon sx={{color:'white'}}/> <span></span> <ThumbDownOffAltIcon sx={{color:'white'}}/> </button>
                                        </div>
                                        <div className="share_button">
                                            <button style={{color:'white'}}><CgMailForward style={{color:'white'}}/>  Share</button>
                                        </div>
                                        <div className="download_button">
                                            <button style={{color:'white'}}><FileDownloadOutlinedIcon sx={{color:'white'}}/>  Download</button>
                                        </div>
                                        <div className="more_button">
                                            <MoreHorizOutlinedIcon sx={{marginTop:'5px', color:'white'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Video not found.</p>
                        )}
                    </div>
                </div>
                <aside className="aside">
                    <div className="aside__top-container">
                        <div style={{ display: 'flex', alignItems: 'center', width: '500px', maxWidth:'100%', overflow: 'auto', marginBottom: '20px' }}>
                            <ScrollingCarousel>
                                {cateogry.map((item) => {
                                    return (
                                        <div
                                            className={`categoryTabVideo ${categoryAll === item.category && 'active'}`}
                                            key={item.id}
                                            onClick={() => selectVideoCategory(item)}>
                                            {item.category}
                                        </div>
                                    );
                                })}
                            </ScrollingCarousel>
                        </div>
                    </div>
                    <div>
                        {
                            onDisplay.map((item) => {
                                return (
                                    <div key={item.id} onClick={() => onVideoClick(item.id)}>
                                        <div style={{ display: "flex", gap: "10px", justifyContent: 'center', cursor: 'pointer', height: '105px' }}>
                                            <div className="searchthumbnailInfo videoThumpnailInfo" style={{ position: "relative" }}>
                                                <p style={{ fontSize: '15px', }}>
                                                    {item.duration}
                                                </p>
                                                <img style={{ width: "168px", height: "94px", borderRadius: "5px" }} src={item.image} alt="" />
                                            </div>
                                            <div style={{ width: '300px', }}>
                                                <h2 style={{ fontSize: '12px', }}>
                                                    {item.title.length <= 50 ? item.title : `${item.title.substr(0, 50)}...`}
                                                </h2>
                                                <h3 style={{ fontSize: '12px', color: '#999595', }} title={item.channel}>{item.channel} {item.isVerified && <span className='material-symbols-rounded active'>check_circle</span>}</h3>
                                                <p style={{ marginTop: '10px', fontSize: '11px', color: '#999595', }}>
                                                    {countViews(item.views)} views • {item.uploadTime} ago
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </aside>
            </main>
        </div>

    );
};

export default SelectedVideo;
