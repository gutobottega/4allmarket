import React, { Component } from 'react';
import formatNumber from '../../utils';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';
import './styles.scss';
import { TiPlus, TiMinus } from 'react-icons/ti';
import {MdClose} from 'react-icons/md';

export default class Cart extends Component {

    state = {
        show: false
    }

    handleSubmit = () => {
    }

    showModal = boolshow => {
        if(this.props.items.length > 0 ){
            this.setState({show: boolshow})
        }
    }

    handleCheckout = () => {
            this.showModal(false);
            this.props.onClear();
    }

    render() {
            const products = this.props.items;
        return (
            <div className="cart">
                <div className="productlist">
                    {products.length <= 0 ? 
                        <div className="productlist-empty">
                            <h1>Carrinho está limpo!</h1>
                            <Link to="/">
                                Voltar ao menu principal
                            </Link>
                        </div> :
                        products.map( product => (
                            <div key={product._id} className="marg">
                                <div className="item">
                                    <div className="item-image">
                                        <img
                                        alt={product.title}
                                        style={{margin: "0 auto", maxHeight: "80px"}} 
                                        src={product.img} />
                                    </div>
                                    <div className="item-id">
                                        <h4>{product.title}</h4>
                                        <p >Preço: {formatNumber(product.price)} </p>
                                        
                                    </div>
                                    <div className="item-quantity">
                                        <p className="mb-0">Qtd: {product.qty}</p>
                                        <div className="buttons">
                                            <button onClick={() => this.props.onIncreaseItem(product)}>
                                                <TiPlus/>
                                            </button>
                                            {
                                                product.qty > 1&& 
                                                <button color="#fff" onClick={() => this.props.onDecreaseItem(product)}>
                                                    <TiMinus/>
                                                </button>
                                            }
                                            {
                                                product.qty === 1 &&
                                                <button onClick={() => this.props.onDecreaseItem(product)}>
                                                    <MdClose/>
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="checkout">
                    {
                        products.length > 0 && 
                        <div className="checkout-body">
                            <h4>Total do pagamento:</h4>
                            <h3>{formatNumber(this.props.price)}</h3>
                            <button type="button" onClick={()=>{this.showModal(true)}}>CONCLUIR</button>
                            <button type="button" onClick={()=>this.props.onClear()}>LIMPAR</button>
                        </div>
                    }
                </div>
                <Modal text="Compra realizada com sucesso." isSuccess={true} onCheckout={this.handleCheckout} show={this.state.show}/>
            </div>
        );
    }
}
