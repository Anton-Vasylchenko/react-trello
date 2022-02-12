import React from 'react'
import { Card } from 'react-bootstrap'
import CardDelete from '../CardDelete';
import moment from 'moment';
import { Draggable } from 'react-beautiful-dnd';

import styles from './CardItem.module.css';

function CardItem({ item, index }) {
    return (
        <Draggable draggableId={`${item.id + ''}`} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        ref={provided.innerRef}
                        snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >

                        <Card
                            bg='Light'
                            key={item.id}
                            text='dark'
                            className={styles.card}
                        >
                            <Card.Body>
                                <Card.Title>
                                    {item.title}
                                </Card.Title>
                                <Card.Text className={styles['card-text']}>
                                    {item.text}
                                </Card.Text>

                            </Card.Body>

                            <div className={styles.date}>
                                {moment.utc(item.createdAt).local().startOf('seconds').fromNow()}
                            </div>

                            <CardDelete id={item.id} />
                        </Card>
                    </div>)
            }}
        </Draggable >

    )
}

export default CardItem
