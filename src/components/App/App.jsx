// rafce - сніпет
import { useEffect, useState } from 'react';
import css from './App.module.css';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { requestPhotos } from '/OKHANZHYN/Education/IT/GoIT/Full stack cours 180523/GitHub projects/React_HW/goit-react-hw-04/src/services/api';
import toast from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App = () => {    
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

  useEffect(() => {
    if (!query) return;
    async function fetchDataByQuery() {
      try {
        setIsLoading(true);
        const { results, total_pages } = await requestPhotos(query, page);

        setPhotos((prevState) => [...prevState, ...results]);
        setIsVisible(page !== total_pages && total_pages !== 0);
      if (results.length === 0) {
        toast('Nothing found, try another search params', {
          style: {
            border: '1px solid #713200',
            padding: '15px',
            color: '#713200',
          },
          iconTheme: {
            primary: '#713200',
            secondary: '#FFFAEE',
          },
        });
      }        
      } catch (err) {
        setIsError(true);
        toast.err('Oops,something went wrong, please try again later', {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataByQuery();
  }, [page, query]);

  const handleSubmit = (value) => {
    if (query === value) {
      toast(`You have already got the result by request '${value}'`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }
    setQuery(value);
    setPhotos([]);
    setPage(1);
    setIsError(false);
    setIsVisible(false);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (url, alt) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };

  // const onSetSearchQuery = (query) => {
  //   setSearchQuery(query);
  // };
    
  return (
    <div className={css.pageStyle}>
     <SearchBar onSubmit={handleSubmit}/>
     <ImageGallery results={photos} onModalOpen={handleOpenModal}/>
     {isError && <ErrorMessage />}
     {isLoading && <Loader />}
     {isVisible && <LoadMoreBtn  onClick={loadMore} />}
      <ImageModal
        modalIsOpen={showModal}
        closeModal={handleCloseModal}
        src={modalUrl}
        alt={modalAlt}
        />
    </div>
  );
};

export default App

// /OKHANZHYN/Education/IT/GoIT/Full stack cours 180523/GitHub projects/React_HW/goit-react-hw-04/src/services/api'

//  <button className={css.loadMoreBtn} type="submit">Load more</button>


// {is-hidden} 
// import ContactForm from "../ContactForm/ContactForm";
// import { nanoid } from 'nanoid';