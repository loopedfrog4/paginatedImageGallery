import React from 'react'
import "./CataloguePagination.css"

export const CataloguePagination = (itemsPerPage, totalItems, paginate) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(itemsPerPage.totalItems / itemsPerPage.itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);
    // console.log(totalItems);
    // console.log(paginate);


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (<li key={number} className='page-item'>
                        <a onClick={() => itemsPerPage.paginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>)
                })}
            </ul>
        </nav>
    )
}
