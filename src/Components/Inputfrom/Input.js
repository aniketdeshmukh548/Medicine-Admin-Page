import React from "react";

const Input=(props)=>{

    const addProdHandler=(event)=>{
        event.preventDefault();
        const Name=document.getElementById('name').value;
        const Description=document.getElementById('descp').value;
        const Price=document.getElementById('price').value;
        const Quantity=document.getElementById('quantity').value;
        const List=[Name,Description,Price,Quantity]
        console.log(List)
    }
    return(
        <form onSubmit={addProdHandler}>
            <label htmlFor={props.name}>
                <input type="text" id="name"></input>
                Medicine Name
            </label>
            <label>
                <input type="text" id="descp"></input>
                Description
            </label>
            <label>
                <input type="number" id="price"></input>
                Price
            </label>
            <label>
                <input type="number" id="quantity"></input>
                Quantity
            </label>
            <button>Add Product</button>
        </form>
    )
}
export default Input;