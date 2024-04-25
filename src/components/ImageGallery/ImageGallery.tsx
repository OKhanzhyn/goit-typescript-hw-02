import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ results, onModalOpen }) => {

  return (
    <ul className={css.photoList}>
      {results.map((result) => {
        return (
          <li key={result.id} className={css.item}>
            <ImageCard
              imageForModal={result.urls.regular}
              imageForGallary={result.urls.small}
              title={result.alt_description}
              onModalOpen={onModalOpen}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
