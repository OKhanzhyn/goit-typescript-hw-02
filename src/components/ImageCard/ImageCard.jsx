import css from '../ImageCard/ImageCard.module.css';

const ImageCard = ({ imageForGallary, imageForModal, title, onModalOpen }) => {
  return (
    <div
      className={css.imgContainer}
      onClick={() => {
        onModalOpen(imageForModal, title);
      }}
    >
      <img className={css.image} src={imageForGallary} alt={title} width="250" />
    </div>
  );
};

export default ImageCard
