// import useEventsData from "../../hooks/useEvenstData";
import EventItem from "./EventItem/evenItem";
import { useNavigate } from "react-router-dom";
// import evensJSON from "../../data/evens.json";


const Events = ({searchTerm, events}) => {
  const navigate = useNavigate();

  const handleEvenItemClick = (id) =>{
    navigate(`/detail/${id}`)

  }

  const renderEvents = () =>{
    let eventsFiltered = Object.values(events);
    
    if(searchTerm.length> 0){
      eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm));
      
    }
    
   return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEvenItemClick}
        id={eventItem.id}
      />
    ));
  };
  
  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
