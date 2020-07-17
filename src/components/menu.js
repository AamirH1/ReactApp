import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemdetails: [
                { id: 1, name: 'Shawarma', price: 120, qty: 0 },
                { id: 2, name: 'Chicken Roll', price: 100, qty: 0 },
                { id: 3, name: 'Egg Roll', price: 80, qty: 0 },
                { id: 4, name: 'Chicken Burger', price: 80, qty: 0 },
                { id: 5, name: 'Egg Burger', price: 80, qty: 0 },
                { id: 6, name: 'Coke', price: 20, qty: 0 }]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                {this.state.itemdetails.map(function (list, index) {
                    return <div className="row">
                        <div className="col-sm-4" >{list.name}</div>
                        <div className="col-sm-4" >Rs.{list.price}</div>
                        <div className="col-sm-4" >
                            <button type="button" className={styles.button} key={list.id}>Add</button>
                        </div></div>;
                })}
            </div>
        );
    }
}

export default Menu;
