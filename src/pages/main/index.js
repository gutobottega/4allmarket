import React, { Component } from "react";
import './styles.scss';
import products from "../../data/products.json";
import categories from "../../data/categories.json";
import { MdAdd } from 'react-icons/md';
import formatNumber from "../../utils";

export default class Main extends Component {

    state = {
        products: [],
        categories: [],
        categoryKey: '0'
    }
    
    componentDidMount() {
        this.loadProducts();
    }

    //não assincrono por nao utilizar uma api
    loadProducts = () => {
        this.setState({
            products: products,
            categories: categories
        });
    }

    handleSelectChange= event => {
        this.setState({categoryKey: event.target.value});
    }

    filterProducts= (prod) => {
        const {categoryKey} = this.state;
        // eslint-disable-next-line eqeqeq
        if(categoryKey === '0'){
            return true;
        }else {
            // eslint-disable-next-line eqeqeq
            return categoryKey === prod.idCategory.toString();
        }
        
    }

    render() {
        const { products, categories } = this.state;
        return (
            <div className="main">
                <div className="select-container">
                    <h2>Filtrar por categoria:</h2>
                    <select placeholder="Selecione uma categoria" onChange={this.handleSelectChange} value={this.state.categoryKey}>
                        <option key="0" value="0">Todas</option>
                        {categories.map( cat => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="box">
                    {products.filter(product => this.filterProducts(product)).map(product => (
                        <div className="card" key={product._id}>
                            <div className="card-content">
                                <div className="card-content-image">
                                    <img style={{width:"200px"}} src={product.img} alt={product.name}/>
                                </div>
                                <div className="content">
                                    <div className="title">
                                        <span>{product.title}</span>
                                    </div>
                                    <p>{product.description}</p>
                                    <p><b>Preço: {formatNumber(product.price)}</b></p>
                                </div>
                                <div className="button-content">
                                    <span  className="button" onClick={()=> this.props.onAdd(product)}>
                                        <MdAdd/>
                                    </span>
                                </div>                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
