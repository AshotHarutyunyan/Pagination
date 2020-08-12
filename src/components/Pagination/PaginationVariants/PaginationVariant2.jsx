import React from 'react'
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Pagination from '../Pagination';
import PropTypes from 'prop-types';


const PaginationVariant2 = (props) => {

    const setPage = (page) => {
        props.setcurrentPage(page)
    };

    let pages = props.pages.map((page) => {
            let key = nanoid();
            if(props.currentPage < 5){
                if(page <= 5){
                    return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                }else if( page > 5 && page < 7){
                    return <span key={key}>...</span>
                }else if( page > 7 ){
                    return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                }
            }else if(props.currentPage >= 5 ){
                if(page < 3){
                    return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                }else if( page > 3 && page < 5){
                    return <span key={key}>...</span>
                }else if( page >= 5 ){
                    return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                }
            }
            return null
        }
    )

    return (
        <Pagination currentPage={props.currentPage} filteredPages={pages} />
    )
}

PaginationVariant2.propTypes = {
    setcurrentPage: PropTypes.func,
    pages: PropTypes.array,
    currentPage: PropTypes.number,
};

export default PaginationVariant2