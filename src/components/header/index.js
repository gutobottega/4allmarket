import React, {Component} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Header extends Component {
    render() {
        return <header id="main-header">
            4all Market
            <Link to={'/cart'}>
                <FaShoppingCart /> {this.props.qnt}
            </Link>
        </header>
    }
};