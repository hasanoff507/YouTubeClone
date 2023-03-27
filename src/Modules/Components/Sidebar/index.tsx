import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai'
import { BsCollectionPlay } from 'react-icons/bs'
import { RiFlashlightLine } from 'react-icons/ri'
import { FaHistory } from 'react-icons/fa'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
import { AiOutlineFire } from 'react-icons/ai'
import { MdOutlineMusicNote } from 'react-icons/md'
import { BsBroadcast } from 'react-icons/bs'
import { SiYoutubegaming } from 'react-icons/si'
import { AiOutlineTrophy } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { FiFlag } from 'react-icons/fi'
import { FiHelpCircle } from 'react-icons/fi'
import { BiCommentError } from 'react-icons/bi'

import LiveTvIcon from '@mui/icons-material/LiveTv';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
type Props = {};

const Sidebar: React.FC<Props> = ({ }: Props) => {
    const [selectedId, setSelectedId] = useState("Home")

    const sideBarData = {
        mainTabs: [
            {
                id: "1",
                head: "Home",
                iconDispley: <AiOutlineHome />,
                icon: 'home',
                path: '/'
            },
            {
                id: "2",
                head: "Shorts",
                iconDispley: <RiFlashlightLine />,
                icon: "explore",
                path: '/'

            },
            {
                id: "3",
                head: "Subscriptions",
                iconDispley: <BsCollectionPlay />,
                icon: "bolt",
                path: '/'

            },
            {
                id: "4",
                head: "Library",
                iconDispley: <LiveTvIcon />,
                icon: "Library",
                path: '/'

            },
        ],
        externalTabs: [
            {
                id: '1',
                head: "History",
                iconDispley: <FaHistory />,
                icon: "history"

            },
            {
                id: '2',
                head: "Your Videos",
                iconDispley: <SlideshowOutlinedIcon />,
                icon: "smart_display"
            },
            {
                id: '3',
                head: "Watch Later",
                iconDispley: <MdOutlineWatchLater />,
                icon: "browse_gallery"
            },
            {
                id: '4',
                head: "Liked Vides",
                iconDispley: <AiOutlineLike />,
                icon: "thumb_up_off"
            },
        ],
        channels: [
            {
                "logo": "https://yt3.ggpht.com/T2Sua5k4SCxKU99F58HGswm-PjV38ghrYMuZe5dL0_M6UHvxCnWgAC4LHcqRsUgfjZfLuQao3A=s176-c-k-c0x00ffffff-no-rj-mo",
                "name": "Ruhlantiruvchi",
                id: 'Ruhlantiruvchi'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AL5GRJVa1XOGoTnI2BcpZargAzzPHALjWfOL0baDt7WG=s68-c-k-c0x00ffffff-no-rj",
                "name": "TV AHD",
                id: 'TV AHD'
            },
            {
                "logo": "https://yt3.googleusercontent.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s176-c-k-c0x00ffffff-no-rj-mo",
                "name": "freeCodeCamp.org",
                id: 'freeCodeCamp'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AL5GRJW8lrrzEygUGKA-9EBaBGKj80XL40EUQNPAWb8KwQ=s68-c-k-c0x00ffffff-no-rj",
                "name": "Cloudx Music ",
                id: 'CloudxMusic '
            },
            {
                "logo": "https://yt3.ggpht.com/iOLsmc0VR6-4fmR7Zgk6cmJtQ_l4_94-Yyq3Tyl5EFXpKlbzSbGISMBJh78pUQFbthdL4903=s68-c-k-c0x00ffffff-no-rj",
                "name": "Discovery Channel Россия",
                id: 'Discovery Channel Россия'
            },
        ],
        explore: [
            {
                id: '1',
                head: "Films",
                iconDispley: <AiOutlineFire />,
                icon: "theaters"
            },
            {
                id: '2',
                head: "Music",
                iconDispley: <MdOutlineMusicNote />,
                icon: "music"
            },
            {
                id: '3',
                head: "Live",
                iconDispley: <BsBroadcast />,
                icon: "sensors"
            },
            {
                id: '4',
                head: "Gaming",
                iconDispley: <SiYoutubegaming />,
                icon: "styler"
            },
            {
                id: '5',
                head: "Sports",
                iconDispley: <AiOutlineTrophy />,
                icon: "sports_soccer"
            },
            {
                id: '6',
                head: "Learning",
                iconDispley: <EmojiObjectsOutlinedIcon />,
                icon: "lightbulb"
            },

        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
                "name": "Creator Studio"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
                "name": "Youtube TV"
            },
        ],
        settings: [
            {
                id: '1',
                head: "Settings",
                iconDispley: <FiSettings />,
                icon: "settings"
            },
            {
                id: '1',
                head: "Report History",
                iconDispley: <FiFlag />,
                icon: "flag"
            },
            {
                id: '1',
                head: "Help",
                iconDispley: <FiHelpCircle />,
                icon: "help"
            },
            {
                id: '1',
                head: "Send Feedback",
                iconDispley: <BiCommentError />,
                icon: "sms_failed"
            },
        ]
    }

    return (
        <>
            <div className="sidebarSection close" id='sidebarContainer' >
                <div className="miniSidebar" id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab, i) => {
                        return (
                            <Link to={tab.path}>
                                <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.iconDispley}</span>
                                    <p style={{color:'white'}}>{tab.head}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                <div className="sidebarContainer" id='sidebarContainer'>
                    <div className="sideBarTabs">
                        <div className="tabContainer">
                            {sideBarData.mainTabs.map((tab, i) => {
                                return (
                                    <Link to={tab.path}>
                                        <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                            <span className='material-symbols-rounded'>{tab.iconDispley}</span>
                                            <p style={{color:'white'}}>{tab.head}</p>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.externalTabs.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.iconDispley}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="subscriptions">
                            <h2 className='mainSidebarHead'>Subscriptions</h2>
                            {sideBarData.channels.map((tab) => {
                                return <div className="channelTab" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="explore">
                            <h2 className="mainSidebarHead">Explore</h2>
                            {sideBarData.explore.map((tab) => {
                                return <div className="sidebarTab" key={tab.head}>
                                    <span className='material-symbols-rounded'>{tab.iconDispley}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="moreYoutube">
                            <h2 className="mainSidebarHead">More on Youtube</h2>
                            {sideBarData.moreYoutubes.map((tab) => {
                                return <div className="youtubeTabs" key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>
                        <div className="tabContainer">
                            {sideBarData.settings.map((tab, i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.iconDispley}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className="horizontalLine" style={{ margin: '10px 0' }}></div>

                        <div className="sidebarBottomLinks">
                            <Link to="/">About</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">Copyright</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Creator</Link>
                            <Link to="/">Advertise</Link>
                            <Link to="/">Developers</Link>
                        </div>
                        <div className="sidebarBottomLinks">
                            <Link to="/">Terms</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Policy &amp; Safety</Link>
                            <Link to="/">How Youtube works</Link>
                            <Link to="/">Test new features</Link>
                            <h3>&copy; Teenage Programmer</h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar