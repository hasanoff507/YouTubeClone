import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import WhiteLogo from '../../../Assets/img/logo-white.png'
import Avatar from '../../../Assets/img/Avatar.png';
import { AiOutlineBell } from 'react-icons/ai'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbUserCircle } from 'react-icons/tb'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { VscSignOut } from 'react-icons/vsc'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { CiDark } from 'react-icons/ci'
import { MdDarkMode } from 'react-icons/md'
import { CiSettings } from 'react-icons/ci'
import { BiHelpCircle } from 'react-icons/bi'
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { VideoType } from '../../../Api';
import { useNavigate, useLocation } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
type Props = {
    searchQuery: string,
    setSearchQuery: Dispatch<SetStateAction<string>>
    setOnDisplay: React.Dispatch<React.SetStateAction<VideoType[]>>
    videoData: VideoType[],

};

const Navbar: React.FC<Props> = ({ searchQuery, setSearchQuery, setOnDisplay, videoData}: Props) => {
  const [open, setOpen] = useState(false);


    const [isDarkTheme, setisDarkTheme] = useState<boolean>(true)


    const navigate = useNavigate()
    const location = useLocation();



    const handleSidebar = (): void => {
        const sidebarContainer = document.getElementById('sidebarContainer') as HTMLDivElement;
        const homeContainer = document.getElementById('homeContainer') as HTMLDivElement;
        const videoContainerId = document.getElementById("videoContainerId") as HTMLDivElement;

        if (homeContainer) {
            homeContainer.classList.toggle('changePadding');
        } else {
            console.error('Element with ID "homeContainer" not found');
        }

        if (sidebarContainer) {
            sidebarContainer.classList.toggle('close');
        } else {
            console.error('Element with ID "sidebarContainer" not found');
        }

        if (videoContainerId) {
            videoContainerId.classList.toggle("videoContainersID");
        } else {
            console.error('Element with ID "videoContainerId" not found');
        }


    };


    const handleThemes = (): void => {
        const rootElement: HTMLElement | null = document.getElementById('root');
        if (rootElement) {
            rootElement.classList.toggle('dark-theme')
        }
        setisDarkTheme(!isDarkTheme)
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchQuery);
        const query = searchQuery.toLowerCase();
        setOnDisplay(
            videoData.filter(
                (video) =>
                    video.title.toLowerCase().includes(query) ||
                    video.channel.toLowerCase().includes(query)
            )
        );

        if (location.pathname === '/search-results') {
            navigate('/');
        } else {
            navigate(`/search-results?query=${searchQuery}`);
        }
    };




    const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        console.log(searchQuery);

    }

    const handleClose = () => {
        setOpen(false);
      };
      const handleToggle = () => {
        setOpen(!open);
      };
    return (
        <header>
            <div className="headerDiv">
                <div>
                    <div className="humburger">
                        <div onClick={handleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <a href="/" style={{ marginTop: '2px' }}>

                        <img src={WhiteLogo} alt="Youtube Logo" title='Youtube' />
                    </a>
                </div>
                <form className="searchContainer" onSubmit={handleSearch} >
                    <div className="searchBox">
                        <input onChange={handleSearchTerm} type="text" placeholder='Search' value={searchQuery} style={{ borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px' }} />
                    </div>
                    <button type='submit' className="searchBtn" style={{ borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
                        <AiOutlineSearch style={{ width: '24px', height: '39px', color: 'white' }} />
                    </button>
                    <div className="searchMic">
                        <span className='material-symbols-rounded active'>
                            <BsFillMicFill />
                        </span>
                    </div>
                </form>

                <div className="profileContainer">
                    <span className='material-symbols-rounded'>
                        <AiOutlineVideoCameraAdd />
                    </span>
                    <span className='material-symbols-rounded'>
                        <AiOutlineBell />
                    </span>
                    <img src={Avatar} alt="Your Avatar" title='Teenage Programmer' onClick={handleToggle} />

                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className="profileBtns">
                    <div className="avatarInfo profileTab">
                        <img src={Avatar} alt="Your Avatar" title='Avatar' />
                        <p>Your Chanel</p>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <TbUserCircle />
                            </span>
                            <p>Your Channel</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <AiOutlinePlaySquare />
                            </span>
                            <p>Youtube Studio</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <SwitchAccountIcon />
                            </span>
                            <p>Switch account</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <VscSignOut />
                            </span>
                            <p>Sign Out</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <RiMoneyDollarCircleFill />
                            </span>
                            <p>Purchase and Memberships</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <AssignmentIndOutlinedIcon />
                            </span>
                            <p>Your Data on Youtube</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        {isDarkTheme && <div className="profileTab" onClick={handleThemes}>
                            <span className='material-symbols-rounded'>
                                <CiDark />
                            </span>
                            <p>Light Theme</p>
                        </div>}
                        {!isDarkTheme && <div className="profileTab" onClick={handleThemes}>
                            <span className='material-symbols-rounded'>
                                <MdDarkMode />
                            </span>
                            <p>Dark Theme</p>
                        </div>}
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <CiSettings />
                            </span>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div className="horizontalLine"></div>
                    <div className="profileTabs">
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <BiHelpCircle />
                            </span>
                            <p>Help</p>
                        </div>
                        <div className="profileTab">
                            <span className='material-symbols-rounded'>
                                <AnnouncementOutlinedIcon />
                            </span>
                            <p>Send Feedback</p>
                        </div>
                    </div>
                </div>
            </Backdrop>

        </header>
    )
}

export default Navbar