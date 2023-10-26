// import { Link } from 'react-router-dom';
import styles from "./EventItem.module.css";
import HearthFilled from "../../../assets/hearth-filled.png";
import hearthunfilled from "../../../assets/hearth-unfilled.png";
import useLikedEvents from "../../../hooks/useLikedEvents";
import PropTypes from 'prop-types';

const EventItem = ({ info, id, name, image, onEventClick }) => {
  const {isLikedEvents, toggleEventsLike} = useLikedEvents(id);
  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = () => {
    toggleEventsLike();

  };

  return (
    <div
      onClick={() => console.log("padre clikeado")}
      className={styles.eventItemContainer}
    >
      <div className={styles.imageContainer}>
        <img
          src={isLikedEvents ? HearthFilled :hearthunfilled}
          alt="Hearth button"
          className={styles.hearthImeges}
          onClick={handleHearthClick}
        />
        <img src={image} alt={name} width={200} height={200} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>
          {/* <Link to= {`/detail/${id}`}> */}
          ver mas
          {/* </Link> */}
        </button>
      </div>
    </div>
  );
};

EventItem.propTypes = {
  info: PropTypes.any,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  image: PropTypes.string,
  onEventClick: PropTypes.func.isRequired
};

export default EventItem;
