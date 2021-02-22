import css from "./styles.module.scss";
import cn from "classnames";

const Button = ({ title, onClick, className }) => (
  <div className={cn(css.buttonWrapper, className)}>
    <button className={css.button} onClick={onClick}>
      <span>{title}</span>
    </button>
  </div>
);

export default Button;
