import React from 'react';  
import './styles.scss';  

const Popup = ({show, items}) => (
    show && (
        <div className="popup"> 
            <h1>Lista</h1>
            {items.length > 0 ?
                <div className="content">  
                    <ul>
                        {items.map( item => (
                            <div key={item._id} className="item">
                                <img alt={item.title} src={item.img}></img>
                                <div className="item-content">
                                    <h3>{item.title}</h3>
                                    Total: {item.qty}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>:
                <h1>Lista está vazia!</h1>
            }
        </div>
    )  
)

export default Popup;