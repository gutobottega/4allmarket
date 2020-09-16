import React, {Component} from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './styles.scss';
import Popup from '../../components/Popup';

export default class Header extends Component {

    state ={
        showPop: false
    }

    togglePopup = boolshow => {
        if(this.props.qty > 0){
            this.setState({showPop: boolshow});    
        }
    }


    render() {
        return <div className="main">
            <div className="main-header">
                <img src="https://4all.com/wp/themes/4all/img/4all_logo.svg" alt="4all"></img>
                <div className="icon">
                    <Link to={'/cart'} onMouseEnter={() => this.togglePopup(true)} onMouseLeave={() => this.togglePopup(false)}>
                        <FaShoppingCart /> {this.props.qty}
                    </Link>
                    <Popup className="popup" items={this.props.items} show={this.state.showPop}/>
                </div>
            </div>
        </div>
    }
};