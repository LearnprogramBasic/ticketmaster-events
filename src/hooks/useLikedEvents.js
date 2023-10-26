import { useState } from "react"
import {LIKED_EVENTS_STORAGE_KEY} from '../utils/constants'



const checkIsEventLike= (eventId) => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY )) || [];
    return likedEvents.includes(eventId) ;
}

const useLikedEvents = (eventId) =>{
    const [isLikedEvents, setIsEventLiked] = useState(checkIsEventLike(eventId));
    const toggleEventsLike = () =>{
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY )) || [];
        const eventIndex = likedEvents.indexOf(eventId)

        if (eventIndex !== -1) {
            likedEvents.splice(eventIndex, 1);
            setIsEventLiked(false);
        } else {
            likedEvents.push(eventId);
            setIsEventLiked(true);
        }
        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents));
    };



    return{
        isLikedEvents,
        toggleEventsLike,

    } 

}

export default useLikedEvents