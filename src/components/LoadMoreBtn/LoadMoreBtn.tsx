import css from './LoadMoreBtn.module.css'
import { LoadMoreType } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreType> = ({ onClick }: LoadMoreType) => {
  return <button className={css.loadMoreBtn} onClick={onClick}>Load more</button>;
};

export default LoadMoreBtn;