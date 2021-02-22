import css from "./styles.module.scss";

const Header = () => (
  <div className={css.header}>
    <p className={css.greeting}>WELCOME TO THE</p>
    <p className={css.name}>HYPER SWIPE</p>
    <p className={css.description}>
      These are som things we like and maybe you like them <br /> to? Swipe your
      way through the stack and sort the pile <br /> into things you like and
      dislike.
    </p>
  </div>
);

export default Header;
