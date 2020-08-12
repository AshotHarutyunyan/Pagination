import React from 'react'
import PropTypes from 'prop-types';

export default function Pagination(props) {
    
    return (
        <div>
            <div className="dFlex">
                <h1>page {props.currentPage}</h1>
                <div className="paginationContain">
                    {props.filteredPages}
                </div>
            </div>
        </div>
    )
}

Pagination.propTypes = {
    filteredPages: PropTypes.array,
    currentPage: PropTypes.number,
};
