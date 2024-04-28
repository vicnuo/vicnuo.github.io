import '../css/Projects.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from './Button';

const card_list =[
    {
        name: "High-Performance Cloud-Native Web Application",
        path: "Cloud-Native.png",
        alt: " image_Cloud-Native",
        title: "Cloud-Native Web Application",
        url: "https://github.com/Decheng-Xu/webapp",
        context: "This project developed a secure, high-performance cloud-native web app, focusing on backend deployment with AWS and DevOps practices, including automated CI/CD pipelines, server management, and real-time performance monitoring for scalability.",
        button_visual : "button",
        id: 1,
    },
    {
        name: "News Aggregator",
        path: "news_aggregator.png",
        alt: "image_news_aggregator",
        title: "News Aggregator",
        url: "https://github.com/dxu104/News_Aggregator",
        context: "This project involved creating a News Aggregator Web Crawler using Spring Boot to collect articles from major news sources, integrated with a React frontend for cross-device compatibility, and performance boosts from Mybatis and Redis caching.",
        button_visual : "button",
        id: 2,
    },
    {
        name: "Amazon-Twitter Fusion App ",
        path: "UX3.png",
        alt: " image_UX",
        title: "Amazon-Twitter Fusion App",
        url: "https://youtu.be/OEGvcgRMMZo",
        context: "The Amazon-Twitter Fusion App project tackled user experience challenges in online shopping and social media by introducing personalized review filters and trending pages. Key features were prototyped using Figma, and usability tests led to significant enhancements in user engagement.",
        button_visual : "button",
        id: 3,
    }
    
];

function Projects(){

    const projectlist = (card_list) => {
        return card_list.map(item =>

            <div className="card" key = {item.name}>
            <a href = {item.url} target="_blank" rel="noopener noreferrer">
                <img className={item.alt} src={item.path} alt={item.alt} title={item.title}></img>
            </a>

                <div className="card-text">
                    <h2 className="card__title">{item.name}</h2>
                    <p className='card__content'>{item.context} </p>
                </div>

                {/* <Button type="button" visual={item.button_visual} text="More Details" onClick={() => toggleDetails(item.id)}/> */}
                <Button className = "favor" type="button" visual={item.button_visual} text={`${likeCount[item.id]} \u2665`} onClick={() => {
                    setLikeCount({...likeCount, [item.id]: likeCount[item.id] + 1});
                }}/>

            </div>
        )
    }

    // show detail button
    // const [showDetails, setShowDetails] = useState({}); // Tracks which project details to show

    // const toggleDetails = (id) => {
    //     setShowDetails((prevDetails) => ({
    //     ...prevDetails,
    //     [id]: !prevDetails[id],
    //     }));
    // };

    // like button
    const [likeCount, setLikeCount] = useState(card_list.reduce((obj, item) => {
        obj[item.id] = 0;
        return obj
    }, {}));

    const [list, setList] = useState(
        projectlist(card_list)
    );

    const [sortOrder, setSortOrder] = useState(-1);

    useEffect(() => {
        card_list.sort(function(a, b){
            return sortOrder * (likeCount[a.id] - likeCount[b.id]);
        }); // sort a list using a compare function.
        setList(projectlist(card_list));
    }, [sortOrder]); 

    useEffect(() => {
        setList(projectlist(card_list));
    }, [likeCount]); 

    return(
        <main id="main-content">
            <button id="sortButton" onClick={() => {
                setSortOrder(-sortOrder);
            }}>
                {sortOrder === 1 ? <div className="button">{`\u2665 sort \u2B06`}</div> : <div className="button">{`\u2665 sort \u2B07`}</div>}
            
            </button>
            <div className="cards" >
            {list}
            </div>
        </main>

    );
}




export default Projects;