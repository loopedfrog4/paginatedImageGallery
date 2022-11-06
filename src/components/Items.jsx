import React from 'react'
import ItemCard from './ItemCard'
import "./Items.css";

export const Items = ({items, loading}) => {

    if (loading) {
        return <h2>Loading ...</h2>
    }

    return <div className="item-list">
            {items.map((item) => {
                return <ItemCard key={item.id} src={item.download_url}/>               
            })}
        </div>

    
}
