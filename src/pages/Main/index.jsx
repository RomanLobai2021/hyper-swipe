import React, { useEffect, useMemo } from "react";
import { getCards, swipeCard } from "store/actions/cards.actions";
import { useDispatch, useSelector } from "react-redux";
import { CardItem, Button, Header } from "components";
import css from "./styles.module.scss";
import TinderCard from "react-tinder-card";
import { LIKE, DISLIKE } from "constants/cards";
import Loader from "react-loader-spinner";
import cn from "classnames";

const MainPage = () => {
  const dispatch = useDispatch();
  const { cards, loaded } = useSelector(state => state.cards);

  const childRefs = useMemo(() => cards.map(i => React.createRef()), [cards]);

  const swipe = dir => {
    if (cards.length) childRefs[cards.length - 1].current.swipe(dir);
  };

  useEffect(() => {
    dispatch(getCards.request());
  }, []);

  return (
    <div className={css.wrapper}>
      {!loaded ? (
        <Loader type="Circles" color="#72fbfd" height={100} width={100} />
      ) : (
        <>
          <Header />
          <div className={css.swiper}>
            <Button
              title="DISLIKE"
              onClick={() => swipe(DISLIKE)}
              className={cn(css.button, css.dislike)}
            />
            <div className={css.cardContainer}>
              {cards.map((card, index) => (
                <TinderCard
                  ref={childRefs[index]}
                  className={cn(css.swipe, {
                    [css.firstSwipe]: index === cards.length - 1
                  })}
                  key={card.id}
                  onCardLeftScreen={dir =>
                    dispatch(swipeCard.request({ id: card.id, dir }))
                  }
                >
                  <CardItem {...card} />
                </TinderCard>
              ))}
            </div>
            <Button
              title="LIKE"
              onClick={() => swipe(LIKE)}
              className={cn(css.button, css.like)}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MainPage;
