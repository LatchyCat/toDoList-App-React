import style from '../css/ContentBox.module.css';

const ContentBox = ({ children }) => {
  return (
    <div className={style.MainBox}>
      <h1 className={style.Header}>Task Creator 10x</h1>
      {children}
    </div>
  );
};
  export default ContentBox;
