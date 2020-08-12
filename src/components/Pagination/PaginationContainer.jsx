import React, { useState } from 'react'
import PaginationVariant1 from './PaginationVariants/PaginationVariant1'
import PaginationVariant2 from './PaginationVariants/PaginationVariant2';
import PaginationVariant3 from './PaginationVariants/PaginationVariant3';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


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

    if (pagesCount <= 7) {
        return <PaginationVariant1 currentPage={Number(currentPage)} setcurrentPage={setcurrentPage} pages={pages} />
    } else if (pagesCount > 7 && pagesCount <= 9) {
        return <PaginationVariant2 currentPage={Number(currentPage)} setcurrentPage={setcurrentPage} pages={pages} />
    } else if (pagesCount >= 10) {
        return <PaginationVariant3 currentPage={Number(currentPage)} setcurrentPage={setcurrentPage} pages={pages} />
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