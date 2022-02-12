import React from 'react';
import { ImCross } from 'react-icons/im';
import { deleteCard } from '../../../redux/actions';
import { useDispatch } from 'react-redux';

import styles from './CardDelete.module.css';
import apiServices from '../../../services/api-services';

function CardDelete({ id }) {
    const dispatch = useDispatch();

    const onDeleteHandler = () => {
        apiServices.deleteCard(id).then(data => {
            dispatch(deleteCard(id))
        });
    }

    return (
        <div className={styles['delete-button']} onClick={onDeleteHandler}>
            <ImCross />
        </div>
    )
}

export default CardDelete
