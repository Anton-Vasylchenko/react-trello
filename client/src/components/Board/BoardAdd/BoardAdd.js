import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBoard } from '../../../redux/actions';
import apiServices from '../../../services/api-services';
import ModalForm from '../../ModalForm';
import { MdOutlineAdd } from 'react-icons/md';
import { Button } from 'react-bootstrap';

function BoardAdd() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const addNewBoard = (item) => {
        apiServices.addBoard({ title: item.title }).then(data => {
            dispatch(addBoard(data))
        });
    }

    return (
        <>
            <Button
                variant="success"
                size="sm"
                className="m-2"
                onClick={handleShow}
            >
                <MdOutlineAdd />
            </Button>

            <ModalForm onAddHandler={addNewBoard} show={show} setShow={setShow} />
        </>
    );
}

export default BoardAdd;