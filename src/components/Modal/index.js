import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCheckCircle, AiOutlineFieldTime } from 'react-icons/ai';
import './styles.scss';

const Modal = ({text, isSuccess, show, onCheckout}) => {
    return show &&
    <div className="modal">
        <div className="container">
            <div className="content">
                <div className="icon">
                    {
                        isSuccess ?
                        <AiFillCheckCircle color="green"/>:
                        <AiOutlineFieldTime color="$primary-color"/>
                    }
                </div>
                <h2>{text}</h2>
            </div>
            <Link to="/" className="link">
            <button onClick={() => onCheckout()}>Finalizar</button>
            </Link>
        </div>
    </div>
};

export default Modal;