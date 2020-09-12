import React, { Component } from "react";
import './styles.css';
import products from "../../data/products.json";
import { MdAdd } from 'react-icons/md';

export default class Main extends Component {

    state = {
        products: []
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    //não assincrono por nao utilizar uma api
    loadProducts = () => {
        this.setState({products: products});
    }

    render() {
        const { products } = this.state;
        return (
            <div className="main">
                <select></select>
                <div className="box">
                    {products.map(product => (
                        <div className="card" key={product._id}>
                            <div className="card-image">
                                <span className="card-title">{product.title}</span>
                                <span to="/" className="button" onClick={()=> this.props.onAdd(product)}><MdAdd/></span>
                            </div>

                            <div className="card-content">
                                <p>{product.desc}</p>
                                <p><b>Price: R${product.price}</b></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

/*
{products.map(product => (
    <article key={product._id}>
        <strong>{product.title}</strong>
        <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
    </article>
))}
*/