import css from '../ImageCard/ImageCard.module.css';
import { ImageCardProps } from "./ImageCard.types";

const ImageCard: React.FC<ImageCardProps> = ({ imageForGallary, imageForModal, title, onModalOpen }: ImageCardProps) => {
  return (
    <div className={css.imgContainer} >
      <img className={css.image} src={imageForGallary} alt={title} width="250" onClick={() => {
        onModalOpen(imageForModal, title);}}/>
    </div>
  );
};

export default ImageCard
