import { useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/navbar";
import Events from "../../components/Events/events";
// import useEventsData from "../../hooks/useEventsData";
import ReactPaginate from "react-paginate";
import styles from "./Home.module.css";
import useEventResult from "../../state/events-results";
// import SignupFrom from "../../components/SignupFrom/SignupFrom";
const Home = () => {
  const { data, isLoading, error, fetchEvents,} = useEventResult();
  const events = data?._embedded?.events || {};
  const page =  data?.page || {};
  const [searchTerm, setSearchTerm] = useState(""); // se actualiza
  const containerRef = useRef();

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keywords = ${term}`);
  };

  const handlePageClick = ({ selected }) => {
    fetchEvents(`&keywords=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados</div>;
    }
    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
      {/* <SignupFrom/> */}
    </>
  );
};
export default Home;
