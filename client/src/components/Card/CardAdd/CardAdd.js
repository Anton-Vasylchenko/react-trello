import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../../../redux/actions';
import apiServices from '../../../services/api-services';
import ModalForm from '../../ModalForm';
import { Button } from 'react-bootstrap';
import { MdOutlineAdd } from 'react-icons/md';

import styles from './CardAdd.module.css';

function CardAdd({ boardId }) {
    const dispatch = useDispatch();

    const { cards } = useSelector(({ cards }) => cards)

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const addNewCard = (item) => {
        apiServices.addCard({
            title: item.title,
            text: item.text,
            listId: boardId
        }).then(data => {
            const newCard = { ...data }
            newCard.idx = cards.length;
            dispatch(addCard(newCard))
        });
    }

    return (
        <>
            <Button
                variant="info"
                size="sm"
                className={styles.button}
                onClick={handleShow}
            >
                <MdOutlineAdd />
            </Button>

            <ModalForm onAddHandler={addNewCard} show={show} setShow={setShow} cardForm={true} />
        </>
    );
}

export default CardAdd;