import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Pagination(props) {
    
    return (
        <div>
            <div className="dFlex">
                <h1>page {props.currentPage}</h1>
                <div className="paginationContain">
                    <NavLink to={`/${props.currentPage - 1}`} className={'paginationItem'}>◄</NavLink>
                    {props.filteredPages}
                    <NavLink to={`/${props.currentPage + 1}`} className={'paginationItem'}>►</NavLink>
                </div>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    filteredPages: PropTypes.array,
    currentPage: PropTypes.number,
};
