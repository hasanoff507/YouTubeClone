import React from "react";
import { VideoType } from "../../../Api";


type Props = {
    onDisplay: VideoType[]
};

const Search: React.FC<Props> = ({ onDisplay }: Props) => {

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
        <div>
            <div className="homeContainer" id="homeContainer">
                {
                    onDisplay.map((item) => {
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    gap: "20px"
                                }}
                            >
                                <div className="searchthumbnailInfo" style={{ position: "relative" }}>
                                    <p style={{
                                        fontSize: '15px'
                                    }}>
                                        {item.duration}
                                    </p>
                                    <img
                                        style={{
                                            width: "360px",
                                            height: "202px",
                                            borderRadius: "20px"
                                        }}
                                        src={item.image}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2 style={{
                                        fontSize: '18px'
                                    }}>
                                        {item.title.length <= 70 ? item.title : `${item.title.substr(0, 70)}...`}
                                    </h2>
                                    <p style={{
                                        fontSize:'12px'
                                    }}>
                                        {countViews(item.views)} views • {item.uploadTime} ago
                                    </p>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',

                                    }}>
                                        <img src={item.logo} alt="" style={{ borderRadius: '50%', width: '30px', height: '30px' }} />
                                        <h3 title={item.channel}>{item.channel} {item.isVerified && <span className='material-symbols-rounded active'>check_circle</span>}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

    );
};

export default Search;
