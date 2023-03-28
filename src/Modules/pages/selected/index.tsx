import React, { useEffect, useState } from "react";
import { CategoryType, VideoType,VideosData } from "../../../Api";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
type Props = {
    onDisplay: VideoType[]
    handleCategory: (tag: CategoryType) => void,
    cateogry: CategoryType[],
    categoryAll: string,
};

const SelectedVideo: React.FC<Props> = ({ onDisplay, handleCategory, cateogry, categoryAll }: Props) => {

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



    return (
        <div className="selectVideo" id="videoContainersID">
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
            }}>
                <div className="video-type-left">
                    <img style={{
                        width: '853px',
                        maxWidth: '100%',
                        height: '480px',
                        maxHeight: '100%'
                    }} src="data:image/jpeg;base64,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" alt="" />
                    {
                        VideosData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h2 key={item.id}>{item.title}</h2>
                                </div>
                            )
                        })
                    }
                </div>


                {/* video type right */}
                <div className="video-type-left" >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '500px',
                        overflow: 'auto',
                        marginBottom: '20px'
                    }}>
                        <ScrollingCarousel>
                            {cateogry.map((item) => {
                                return (
                                    <div
                                        className={`categoryTabVideo ${categoryAll === item.category && 'active'}`}
                                        key={item.id}
                                        onClick={() => handleCategory(item)}>
                                        {item.category}
                                    </div>
                                );
                            })}
                        </ScrollingCarousel>
                    </div>
                    {
                        onDisplay.map((item) => {
                            return (

                                <div
                                    style={{
                                        display: "flex",
                                        gap: "10px",
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        height: '105px'
                                    }}
                                >
                                    <div className="searchthumbnailInfo videoThumpnailInfo" style={{ position: "relative" }}>
                                        <p style={{
                                            fontSize: '15px',

                                        }}>
                                            {item.duration}
                                        </p>
                                        <img
                                            style={{
                                                width: "168px",
                                                height: "94px",
                                                borderRadius: "5px"
                                            }}
                                            src={item.image}
                                            alt=""
                                        />
                                    </div>
                                    <div style={{
                                        width: '300px',
                                    }}>
                                        <h2 style={{
                                            fontSize: '12px',
                                        }}>
                                            {item.title.length <= 50 ? item.title : `${item.title.substr(0, 50)}...`}
                                        </h2>
                                        <h3 style={{ fontSize: '12px', color: '#999595', }} title={item.channel}>{item.channel} {item.isVerified && <span className='material-symbols-rounded active'>check_circle</span>}</h3>
                                        <p style={{
                                            marginTop: '10px',
                                            fontSize: '11px',
                                            color: '#999595',
                                        }}>
                                            {countViews(item.views)} views • {item.uploadTime} ago
                                        </p>
                                        <h5 style={{
                                            fontSize: '12px',
                                            color: '#999595',

                                        }}>
                                        </h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default SelectedVideo;
