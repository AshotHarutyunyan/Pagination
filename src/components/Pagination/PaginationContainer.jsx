import React, { useState } from 'react'
// import PaginationVariant1 from './PaginationVariants/PaginationVariant1'
// import PaginationVariant2 from './PaginationVariants/PaginationVariant2';
// import PaginationVariant3 from './PaginationVariants/PaginationVariant3';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import PaginationLogic from './PaginationLogic';


const PaginationContainer = (props) => {

    let allItemsCount = props.allItemsCount;
    let pageItemsCount = props.pageItemsCount;
    let pagesCount = Math.ceil(allItemsCount / pageItemsCount);
    const [currentPage, setcurrentPage] = useState(1);

    if (props.match.params.pageId !== currentPage && props.match.params.pageId <= pagesCount) {
        setcurrentPage(props.match.params.pageId)
    }

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    if (pagesCount > 0) {
        return <PaginationLogic currentPage={Number(currentPage)} setcurrentPage={setcurrentPage} pages={pages} pagesCount={pagesCount}/>
    } 
    return (
        <div>Sorry but your items is not paginatable</div>
    )
}


PaginationContainer.propTypes = {
    allItemsCount: PropTypes.number,
    pageItemsCount: PropTypes.number,
};

export default withRouter(PaginationContainer)