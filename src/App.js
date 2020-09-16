import React , {Component} from 'react';
import Header from './components/header/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Main from './pages/main';
import Cart from './pages/cart';
import Modal from './components/Modal';

export default class App extends Component{
    state = {
        addedItems: [],
        totalPrice: 0,
        totalItems: 0,
        show: false
    };
    
    decreaseItem= prod => {
        var {addedItems} = this.state;
        const quantity = addedItems[addedItems.indexOf(prod)].qty;
        if(quantity === 1){
            addedItems = addedItems.filter(item => item !== prod);
        }else {
            addedItems[addedItems.indexOf(prod)].qty--;
        }
        this.setState({addedItems: addedItems, totalItems: this.state.totalItems - 1, totalPrice: this.state.totalPrice - prod.price});
    }
    //se o  tamanho do items adicionados for 0, adiciona o timer que chama uma função clear.
    handleAdd = newItem => {
        const newAddedItems = this.state.addedItems;
        if(newAddedItems.length === 0){
            setTimeout(() => {
                this.setState({show: true});
            }, 1000);
        }
        if(newAddedItems.includes(newItem)){
            newAddedItems[newAddedItems.indexOf(newItem)].qty++;
        }else{
            newItem.qty = 1;
            newAddedItems.push(newItem);
        }
        this.setState({addedItems: newAddedItems, totalItems: this.state.totalItems + 1, totalPrice: this.state.totalPrice + newItem.price});
    }

    handleClear = () => {
        this.setState({addedItems:[], totalPrice: 0, totalItems: 0, show: false});
    }

    render(){
        return( 
            <BrowserRouter>
                <div className="App">
                    <div className="content">
                        <Header qty={this.state.totalItems} items={this.state.addedItems}/>
                        <Switch>
                            <Route exact path="/" render={(props) => (<Main onAdd={this.handleAdd.bind(this)} />)} />
                            <Route path="/cart" render={(props) => (<Cart price={this.state.totalPrice} items={this.state.addedItems} onIncreaseItem={this.handleAdd.bind(this)} onDecreaseItem={this.decreaseItem.bind(this)} onClear={this.handleClear.bind(this)}/>)} />
                        </Switch>
                    </div>
                    <Modal isSuccess={false} onCheckout={this.handleClear} text="Limite máximo de tempo excedido!" show={this.state.show}></Modal>
                </div>
            </BrowserRouter>
        )
    }
}