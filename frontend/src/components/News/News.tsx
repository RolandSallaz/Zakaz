import './News.scss'
import Slider from "react-slick";
import image1 from '../../images/sliderImages/1691119330405.jpg'
import image2 from '../../images/sliderImages/1691119330452.jpg'
import image3 from '../../images/sliderImages/1691119330445.jpg'
import {SyntheticEvent, useContext, useEffect, useState} from "react";
import {deletePost, getPosts} from "../../utils/Api";
import {IPost} from "../../types/interfaces";
import {Post} from "../Post/Post";
import {Popup} from "../Popup/Popup";
import {LoggedInContext} from "../../contexts/LoggedInContexts";
import {AdminPopup} from "../AdminPopup/AdminPopup";

export function News() {
    const [posts, setPosts] = useState<IPost[]>([])
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null)
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false);
    const [selectedPostToDelete, setSelectedPostToDelete] = useState<IPost | null>(null)
    const loggedIn = useContext(LoggedInContext)

    function handlePostClick(post: IPost) {
        setSelectedPost(post)
        setIsPopupOpened(true);
    }

    function handleClosePopups() {
        setSelectedPostToDelete(null)
        setIsPopupOpened(false)
        // Таймаут нужен, чтобы пост закрывался плавно, иначе он пропадает раньше закрытия
        setTimeout(() => setSelectedPost(null), 200)
    }

    function handleDeletePopupClick(post: IPost) {
        setSelectedPostToDelete(post)
    }

    function handleDeletePostSubmit(e: SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        deletePost((selectedPostToDelete as IPost)._id).then(() => {
            handleClosePopups()
            setPosts((prev) =>
                prev.filter((item) => item._id !== selectedPostToDelete?._id)
            )
        }).catch(console.log)
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
            <h2 className={'news__heading'}>Новости</h2>
            <section className='posts'>
                {posts.map((item, index) => (
                    <Post key={index} item={item} onPostClick={handlePostClick}
                          onDeleteClick={handleDeletePopupClick}/>))}
            </section>
            <Popup onClose={handleClosePopups} isOpen={isPopupOpened}>
                {selectedPost && (
                    <Post item={selectedPost}
                          onPostClick={handlePostClick}
                          isReading
                    />
                )}
            </Popup>
            {
                (loggedIn && selectedPostToDelete) && (
                    <AdminPopup heading={`Удалить пост ${selectedPostToDelete.heading}?`} onClose={handleClosePopups}
                                onSubmit={handleDeletePostSubmit}>

                    </AdminPopup>)
            }
        </div>
    )
        ;
}