import React from 'react';
import BoardWithCustomCard from 'react-trello';
import useBoard from './hooks/useBoard';
import BoardDetails from './details';
const Boards = () => {
  const { boards, handleModal, show, setDetails, details } = useBoard();
  return (
    <>
      <BoardWithCustomCard
        data={boards}
        draggable
        editable
        collapsibleLanes
        className='boardContainer'
        canAddLanes
        onCardClick={(cardId, metadata, laneId) => {
          handleModal(true);
          setDetails(metadata);
        }}
      />
      <BoardDetails show={show} handleModal={handleModal} details={details} />
    </>
  );
};
export default Boards;
