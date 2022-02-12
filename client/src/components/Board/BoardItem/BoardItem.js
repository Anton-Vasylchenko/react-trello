import React from 'react';
import CardItem from '../../Card/CardItem';
import BoardButtons from '../BoardButtons';
import { useDispatch, useSelector } from 'react-redux';
import { Droppable } from "react-beautiful-dnd";
import { fetchCards } from '../../../redux/actions';
import Loader from '../../Loader';

import styles from './BoardItem.module.css';

function BoardItem({ item }) {
    const dispatch = useDispatch();
    const { cards, isLoaded } = useSelector(({ cards }) => cards);

    const cardsArray = cards.filter(card => card.ListId === item.id)

    React.useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch])

    return (
        <Droppable droppableId={`${item.id}`}>
            {(provided) => (
                <div className={styles.board}>
                    <div className={styles['board-title']}>
                        {item.title}
                        <div className={styles["nav-panel"]}>
                            <BoardButtons boardId={item.id} />
                        </div>
                    </div>
                    <div className={styles['board-content']} {...provided.droppableProps} ref={provided.innerRef}>
                        {isLoaded ? cardsArray.map((item, index) => (
                            <CardItem key={item.id} item={item} index={index} />
                        )) : <Loader animation={'grow'} />}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}

export default BoardItem

