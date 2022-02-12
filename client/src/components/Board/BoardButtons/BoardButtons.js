import React from 'react';
import { AiFillDelete, AiOutlineClose } from 'react-icons/ai';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, deleteCards } from '../../../redux/actions';
import apiServices from '../../../services/api-services';
import CardAdd from '../../Card/CardAdd';

import styles from './BoardButtons.module.css';

function BoardButtons({ boardId }) {
    const dispatch = useDispatch();
    const { cards } = useSelector(({ cards }) => cards);

    const cardsList = cards.filter(card => card.ListId === boardId)

    const onDeleteHandler = () => {
        dispatch(deleteBoard(boardId))
        apiServices.deleteBoard(boardId);
    }

    const onClearHandler = () => {
        dispatch(deleteCards(boardId))
        apiServices.deleteCardsByBoardId(boardId);
    }

    return (
        <div className={styles.buttons}>

            <CardAdd boardId={boardId} />

            {cardsList.length !== 0 && <Button onClick={onClearHandler} className={styles.button} size="sm" variant="warning">
                <AiFillDelete />
            </Button>}

            <Button onClick={onDeleteHandler} className={styles.button} size="sm" variant="danger">
                <AiOutlineClose />
            </Button>
        </div>
    )
}

export default BoardButtons
