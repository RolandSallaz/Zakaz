import './Post.scss'
import {IPost} from "../../types/interfaces";
import {API_URL} from "../../utils/Api";
import {useContext} from "react";
import {LoggedInContext} from "../../contexts/LoggedInContexts";
import {CgClose, CgPen} from "react-icons/cg";

interface IProps {
    item: IPost;
    onPostClick: (arg0: IPost) => void;
    isReading?: boolean;
}

export function Post({item, onPostClick, isReading}: IProps) {
    const loggedIn = useContext(LoggedInContext);
    return (
        <article className={`post ${!isReading && 'post_not-reading'}`} onClick={() => onPostClick(item)}>
            {(loggedIn && !isReading) && (<div className={'post__admin'}>
                <button className={'post__admin-button'}><CgPen/></button>
                <button className={'post__admin-button'}><CgClose/></button>
            </div>)}
            <img className='post__image' src={`${API_URL}/${item.image}`}/>
            <h2 className={`post__heading ${isReading && 'post__heading_reading'}`}>{item.heading}</h2>
            <p className={`post__description ${isReading && 'post__description_reading'}`}>{item.description}</p>
        </article>
    );
}