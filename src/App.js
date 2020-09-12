import React , {Component} from 'react';
import Header from './components/header/index';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles.css';
import Main from './pages/main';
import Cart from './pages/cart';

export default class App extends Component{
    state = {
        addedItems: []
    };

    handleAdd = (newItem) => {
        const newAddedItems = this.state.addedItems; 
        newAddedItems.push(newItem);
        console.log(newItem);
        this.setState({addedItems: newAddedItems});
    }

    render(){
        return( 
            <BrowserRouter>
                <div className="App">
                    <Header qnt={this.state.addedItems.length}/>
                    <Switch>
                        <Route exact path="/" render={(props) => (<Main onAdd={this.handleAdd.bind(this)} />)} />
                        <Route path="/cart" component={Cart} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}