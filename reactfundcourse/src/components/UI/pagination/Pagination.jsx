import React from 'react'
import { getPagesArr } from '../../utils/pages'

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArr = getPagesArr(totalPages)
    return (
        <div className='page__wrapper'>
            {pagesArr.map(p => 
                <span 
                    onClick={()=> changePage(p)}
                    key={p} 
                    className={page === p? 'page__current page' : 'page'}
                >{p}</span>
            )}
        </div>
    )
}

export default Pagination