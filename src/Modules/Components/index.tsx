import React,{useState} from "react";
import { VideosData, Category,CategoryType,VideoType } from "../../Api/index";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route,   } from 'react-router-dom'
import Search from "../pages/search";

type Props = {};

const Componets: React.FC<Props> = ({ }: Props) => {
  const [videoData, setVideoData] = useState<VideoType[]>(VideosData);
  const [cateogry, setCateogry] = useState<CategoryType[]>(Category);
  const [categoryAll, setCategoryAll] = useState('All');
  const [onDisplay, setOnDisplay] = useState<VideoType[]>(videoData);
  const [searchQuery, setSearchQuery] = useState<string>('');
  

  const handleCategory = (tag: CategoryType): void => {
    setCategoryAll(tag.category);
    if (tag.category === 'All') {
      setOnDisplay(videoData);
      return;
    }
    setOnDisplay(videoData.filter((video) => video.category === tag.category));
  };



  return (
    <div>
    <Router>
        <Navbar setSearchQuery={setSearchQuery} videoData={videoData} setOnDisplay={setOnDisplay}  searchQuery={searchQuery}/>
        <Sidebar />
        <Routes>
          <Route  path="/" element={<Home handleCategory={handleCategory} cateogry={cateogry} categoryAll={categoryAll } onDisplay={onDisplay}/>}/>
          <Route  path="/search-results" element={<Search onDisplay={onDisplay}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default Componets;
