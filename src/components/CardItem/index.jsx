import css from "./styles.module.scss";

const CardItem = ({ image, title, body }) => {
  return (
    <div className={css.card}>
      <img src={image} alt="" height="200" />
      <div className={css.cardInfo}>
        <p className={css.cardTitle}>{title}</p>
        <p className={css.cardBody}>{body}</p>
      </div>
    </div>
  );
};

export default CardItem;
