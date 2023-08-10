import './Post.scss'
import {IPost} from "../../types/interfaces";
import {API_URL} from "../../utils/Api";

interface IProps {
    item: IPost
}

export function Post({item}: IProps) {
    return (
        <article className='post'>
            <img className='post__image' src={`${API_URL}/${item.image}`}/>
            <h2 className='post__heading'>{item.heading}</h2>
            <p className='post__description'>{item.description}</p>
        </article>
    );
}