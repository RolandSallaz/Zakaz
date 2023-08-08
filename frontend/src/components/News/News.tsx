import './News.scss'
import Slider from "react-slick";
import image1 from '../../images/sliderImages/1691119330405.jpg'
import image2 from '../../images/sliderImages/1691119330452.jpg'
import image3 from '../../images/sliderImages/1691119330445.jpg'
export function News() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
    };
    return (
        <div className='news'>
                <Slider {...settings}>
                    {/*Желательно стоит добавлять alt атрибут с описанием картинок*/}
                    <img className={'news-item__image'} src={image1} alt='Трубы лежат на песке'/>
                    <img className={'news-item__image'} src={image2} alt='Трактор работает'/>
                    <img className={'news-item__image'} src={image3} alt='Трактор работает'/>
                </Slider>

        </div>
    );
}