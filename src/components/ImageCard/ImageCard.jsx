import css from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ imageForGallary, imageForModal, title, onModalOpen }) => {
  return (
    <div className={css.imgContainer} >
      <img className={css.image} src={imageForGallary} alt={title} width="250" onClick={() => {
        onModalOpen(imageForModal, title);}}/>
    </div>
  );
};

export default ImageCard
