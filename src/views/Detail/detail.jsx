import styles from "./detasil.module.css";
import { format } from "date-fns";
import { es } from "date-fns/locale";

import eventFetcher from '../../utils/fetchEvents';
const pathname = window.location.pathname;
const resource = eventFetcher(pathname.substring(8, pathname.length))

const Detail = () => {
  // const {data} = useEventResult();
  //const { eventId } = useParams();
  //const [eventData, seteventData] = useState({});

  const eventData = resource.eventDetail.read();

  return (
    <div className={styles.container}>
      <div className={styles.mainInfoContainer}>
        <img
          src={eventData.images?.[0].url}
          className={styles.eventImage}
          alt={eventData.name}
        />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.eventinfoParagraph}>{eventData.info}</p>
        {eventData.dates?.start?.dateTime && (
          <p className={styles.dateParagraphp}>
            {format(
              new Date(eventData.dates.start.dateTime),
              "d LLLL yyyy H:mm",
              { locale: es }
            )}
            hrs
          </p>
        )}
      </div>
      <div className={styles.seatInfoContainer}>
        <h6 className={styles.seatMapTitle}>Mapa del Evento</h6>
        <img src={eventData?.seatmap?.staticUrl} alt="Setmap event" />
        <p className={styles.pleaceNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangelLegend}>
          Rango de precios: {eventData.priceRanges?.[0].min}-
          {eventData.priceRanges?.[0].max} - {eventData.priceRanges?.[0].currency}
        </p>
      </div>
      <a href={eventData.url}>Ir por tus boletos</a>
    </div>
  );
};

export default Detail;
