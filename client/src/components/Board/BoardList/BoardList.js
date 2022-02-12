import React from 'react'
import BoardItem from '../BoardItem/BoardItem';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { setCards } from '../../../redux/actions';
import Loader from '../../Loader';
import { Container } from 'react-bootstrap';
import Masonry from 'react-masonry-css'

import styles from './BoardList.module.css';
import { fetchBoards } from '../../../redux/actions';
import apiServices from '../../../services/api-services';

const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 3,
    500: 2
};

function BoardList() {
    const dispatch = useDispatch();

    const { boards, isLoaded } = useSelector(({ boards }) => boards);
    const { cards } = useSelector(({ cards }) => cards);

    React.useEffect(() => {
        dispatch(fetchBoards());
    }, [dispatch])

    const onDragEndHandler = (result) => {
        const { destination, draggableId } = result;

        if (!destination) {
            return;
        }
        const card = cards.filter(item => item.id === +draggableId)[0];

        const newCard = { ...card }
        newCard.ListId = +destination.droppableId;

        const cardIndex = cards.indexOf(card)
        const newCards = [...cards]

        newCards.splice(cardIndex, 1)
        newCards.splice(destination.index, 0, newCard)

        apiServices.updateCard(card.id, destination.droppableId);
        dispatch(setCards(newCards))
    }

    const content = isLoaded ?
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className={styles["my-masonry-grid"]}
            columnClassName={styles["my-masonry-grid_column"]}>
            {boards.map((board, index) => (
                <BoardItem item={board} key={board.id} index={index} />
            ))}
        </Masonry> : <Loader />

    return (
        <DragDropContext onDragEnd={onDragEndHandler}>
            <Container className="text-center">
                {content}
            </Container>
        </DragDropContext>
    )
}

export default BoardList
