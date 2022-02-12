import React, { useState } from 'react';
import { Button, Modal, Form, Alert, FloatingLabel } from 'react-bootstrap';

function ModalForm({ onAddHandler, show, setShow, cardForm }) {
    const [error, setError] = useState('');
    const inputRef = React.useRef();
    const textRef = React.useRef();

    const handleClose = () => {
        setError('');
        setShow(false)
    };

    const addNewBoard = () => {
        const enteredTitle = inputRef.current.value;

        if (enteredTitle.trim().length === 0) {
            setError('Please, enter a title!');
            return;
        }

        if (cardForm && textRef.current.value.trim().length === 0) {
            setError('Please, enter a text!');
            return;
        }

        let item;

        if (!cardForm) {
            item = { title: enteredTitle }
            onAddHandler(item)
            handleClose();
            return;
        }

        item = { title: enteredTitle, text: textRef.current.value }
        onAddHandler(item)
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New board</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error.length !== 0 && <Alert variant='warning'>
                        {error}
                    </Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={inputRef} type="text" placeholder="Enter a title" />
                        </Form.Group>
                        {cardForm &&
                            <FloatingLabel controlId="floatingTextarea2">
                                <Form.Control
                                    ref={textRef}
                                    as="textarea"
                                    placeholder="Please, enter your text here"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addNewBoard}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalForm
