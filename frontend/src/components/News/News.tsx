import './News.scss'
import Slider from "react-slick";
import image1 from '../../images/sliderImages/1691119330405.jpg'
import image2 from '../../images/sliderImages/1691119330452.jpg'
import image3 from '../../images/sliderImages/1691119330445.jpg'
import {useEffect, useState} from "react";
import {getPosts} from "../../utils/Api";
import {IPost} from "../../types/interfaces";
import {Post} from "../Post/Post";
import {Popup} from "../Popup/Popup";

export function News() {
    const [posts, setPosts] = useState<IPost[]>([])
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null)

    function handlePostClick(post: IPost) {
        setSelectedPost(post)
    }

    function handleClosePopup() {
        setSelectedPost(null)
    }

    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch(console.log)
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='news'>
            <section className='slider'>
                <Slider {...settings}>
                    {/*Желательно стоит добавлять alt атрибут с описанием картинок*/}
                    <img className={'news-item__image'} src={image1} alt='Трубы лежат на песке'/>
                    <img className={'news-item__image'} src={image2} alt='Трактор работает'/>
                    <img className={'news-item__image'} src={image3} alt='Трактор работает'/>
                </Slider>
            </section>
            <section className='posts'>
                {posts.map((item) => (<Post item={item} onPostClick={handlePostClick}/>))}
            </section>
            {selectedPost && <Popup onClose={handleClosePopup}>
                <Post item={selectedPost} onPostClick={handlePostClick} isReading/>
            </Popup>}
        </div>
    );
}