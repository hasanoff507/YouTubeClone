import FinalLogo from '../Assets/img/Final.jpg'
import FinalPrevyu from '../Assets/img/FinalPrevyu.webp'
import finalChampionsLiguePrevyu from '../Assets/img/finalChampionsLiguePrevyu.jpg'
import FinalChampionsIcon from '../Assets/img/FinalChampionsIcon.jpg'
import JavaScriptPrevyu from '../Assets/img/javascriptPrevyu.jpg'
import JavaScriptIcon from '../Assets/img/javaScriptIcon.jpg'
import MusicPrevyu from '../Assets/img/musicPrevyu.jpg'
import MusicIcon from '../Assets/img/musicIcon.jpg'
import KakEtaUStoysvaPrevyu from '../Assets/img/kakEtaUstroysvaPrevyu.jpg'
import kakEtaUstrostvaIcon from '../Assets/img/kakEtaUstrostvaIcon.jpg'
export interface VideoType {
    id: number;
    title: string;
    logo: any;
    image: any;
    channel: string;
    isVerified: false;
    category: string;
    duration: string;
    views: number;
    uploadTime: string;
    // video:any;
}

export const VideosData: VideoType[] = [
    {
        id: 1,
        title: "Finaldagi Haqiqiy Reaksiya! Shavkat Mirziyoyev va Saida Mirziyoyeva - U20",
        logo: FinalLogo,
        image: FinalPrevyu,
        channel: "Ruhlantiruvchi",
        isVerified: false,
        category: 'Final',
        duration: '6:00',
        views: 112312,
        uploadTime: '4 day',
    },
    {
        id: 2,
        title: "Real Madrid vs Atletico Madrid (4-1aet)UCL2014 Final Highlights",
        logo: FinalChampionsIcon,
        image: finalChampionsLiguePrevyu,
        channel: "TV AHD",
        isVerified: false,
        category: 'Final',
        duration: '13:29',
        views: 856980,
        uploadTime: '1 year ago',
    },
    {
        id: 3,
        title: "JavaScript Programming - Full Course",
        logo: JavaScriptIcon,
        image: JavaScriptPrevyu,
        channel: "freeCodeCamp.org",
        isVerified: false,
        category: 'JavaScript',
        duration: '7:09:06',
        views: 2487234,
        uploadTime: '1 year ago',
    },
    {
        id: 4,
        title: "Gaming Music 2023 | Best Music Mix || EDM, Trap, Dubstep, House",
        logo: MusicIcon,
        image: MusicPrevyu,
        channel: "Cloudx Music",
        isVerified: false,
        category: 'Music',
        duration: '1:09:06',
        views: 487234,
        uploadTime: '1 month ago',
    },
    {
        id: 5,
        title: "Ноутбуки | Как это устроено | Discovery Channel",
        logo: kakEtaUstrostvaIcon,
        image: KakEtaUStoysvaPrevyu,
        channel: "Discovery Channel Россия",
        isVerified: false,
        category: 'how did you make the devices',
        duration: '4:59',
        views: 276856,
        uploadTime: '3 years ago',
    }
]

export interface CategoryType {
    id: number,
    category:string,
}

export const Category: CategoryType[] = [
    {
        id:1,
        category:'All'
    },
    {
        id:2,
        category:'Final'
    },
    {
        id:3,
        category:'JavaScript'
    },
    {
        id:4,
        category:'Music'
    },
    {
        id:5,
        category:'how did you make the devices'
    },
    
]