// rafce - сніпет
import { useEffect, useState } from 'react';
import './App.css';
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import { Photo, requestPhotos } from '../../services/api';
import toast from "react-hot-toast";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

const App: React.FC = () => {    
  const [photos, setPhotos] = useState<Photo[] | []>([]);
  const [query, setQuery] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const [page, setPage] = useState<number>(1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalUrl, setModalUrl] = useState<string>("");
  const [modalAlt, setModalAlt] = useState<string>("");

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
      } catch (error) {
        setIsError(true);
        toast.error('Oops,something went wrong, please try again later', {
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

  const handleSubmit = (value: string): void => {
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

  const loadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleOpenModal = (url: string, alt: string) => {
    setShowModal(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const handleCloseModal = (): void => {
    setShowModal(false);
    setModalUrl("");
    setModalAlt("");
  };
    
  return (
    <div className='pageStyle'>
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

export default App;
