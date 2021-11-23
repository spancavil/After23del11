import React from 'react';
import './styles.scss';
import ItemCount from '../Components/ItemCount';

const ItemListContainer = () => {
    return (
        <div className = "container">
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer

