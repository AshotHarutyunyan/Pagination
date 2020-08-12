import React from 'react'
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Pagination from '../Pagination';
import PropTypes from 'prop-types';


const PaginationVariant1 = (props) => {

    const setPage = (page) => {
        props.setcurrentPage(page)
    };

    let pages = props.pages.map(page => {
            let key = nanoid();
            return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
        }
    )

    return (
        <Pagination currentPage={props.currentPage} filteredPages={pages} />
    )
}

PaginationVariant1.propTypes = {
    setcurrentPage: PropTypes.func,
    pages: PropTypes.array,
    currentPage: PropTypes.number,
};

export default PaginationVariant1