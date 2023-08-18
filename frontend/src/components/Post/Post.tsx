import './Post.scss'
import {IPost} from "../../types/interfaces";
import {API_URL} from "../../utils/Api";
import {SyntheticEvent, useContext} from "react";
import {LoggedInContext} from "../../contexts/LoggedInContexts";
import {CgClose, CgPen} from "react-icons/cg";

interface IProps {
    item: IPost;
    onPostClick: (arg0: IPost) => void;
    isReading?: boolean;
    onDeleteClick?: (arg0: IPost) => void;
}

export function Post({item, onPostClick, isReading, onDeleteClick}: IProps) {
    const loggedIn = useContext(LoggedInContext);

    function handleDeleteClick() {
        if (onDeleteClick) {
            onDeleteClick(item)
        }
    }
    function handlePostClick(e: SyntheticEvent) {
        const target = e.target as HTMLElement
        if (target.parentElement?.tagName === 'ARTICLE') {
            onPostClick(item)
        }
    }
    return (
        <article className={`post ${!isReading && 'post_not-reading'}`} onClick={handlePostClick}>
            {(loggedIn && !isReading) && (<div className={'post__admin'}>
                <button className={'post__admin-button'}><CgPen/></button>
                {onDeleteClick && (<button className={'post__admin-button'} onClick={handleDeleteClick}><CgClose/></button>)}
            </div>)}
            <img className='post__image' src={`${API_URL}/${item.image}`}/>
            <h2 className={`post__heading ${isReading && 'post__heading_reading'}`}>{item.heading}</h2>
            <p className={`post__description ${isReading && 'post__description_reading'}`}>{item.description}</p>
        </article>
    );
}