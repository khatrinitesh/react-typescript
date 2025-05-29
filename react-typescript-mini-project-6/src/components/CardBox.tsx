import React from 'react';
import { useCardStore } from '../store/useCardStore';
import type { CardBoxProps } from '../interface';
import { CARD_LIST } from '../constants/constants';



function CardBoxComp(){
    return(
        <>
        <div className="flex w-full justify-between items-center">
         {CARD_LIST.map((card) => (
        <CardBox key={card.id} card={card} />
      ))}
      </div>
        </>
    )
}

export default CardBoxComp;
 


const CardBox: React.FC<CardBoxProps> = ({ card }) => {
  const { selectedCardId, setSelectedCard } = useCardStore();

  return (
    <div
      className={`card-box w-full ${selectedCardId === card.id ? 'active' : ''}`}
      onMouseEnter={() => setSelectedCard(card.id)}
      onMouseLeave={() => setSelectedCard(null)}
    >
      <img src={card.image} alt={card.title} />
      <h3>{card.title}</h3>
    </div>
  );
};
