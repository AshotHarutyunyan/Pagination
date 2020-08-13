import React from 'react'
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Pagination from './Pagination';
import PropTypes from 'prop-types';

const PaginationLogic = (props) => {

    const setPage = (page) => {
        props.setcurrentPage(page)
    };
    
    let pages = props.pages.map((page) => {
            let key = nanoid();
            if (props.pagesCount <= 7) {
                return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
            } else if (props.pagesCount > 7 && props.pagesCount <= 9) {
                if(props.currentPage < 5){
                    if(page <= 5){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( page > 5 && page < 7){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( page > 7 ){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }
                }else if(props.currentPage >= 5 ){
                    if(page < 3){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( page > 3 && page < 5){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( page >= 5 ){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }
                }
            } else if (props.pagesCount >= 10) {
                if(props.currentPage <= 5){
                    if(page <= 6){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( page > 6 && page <= props.pages.length - 3){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( page > props.pages.length - 3 ){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }
                }else if(props.currentPage > 5 && props.currentPage <= props.pages.length - 4 ){
                    if(page <= 3){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( page > 3 && page < props.currentPage - 1){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( props.currentPage - page >= -1 && props.currentPage - page <= 1){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( props.currentPage - page < -1 && page < props.pages.length - 2){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( page >= props.pages.length - 2 ){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }
                }else if(props.currentPage > props.pages.length - 4 ){
                    if(page <= 3){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }else if( page > 3 && page < props.pages.length - 4){
                        return <span className={'spanETC'} key={key}>...</span>
                    }else if( page >= props.pages.length - 4 ){
                        return <NavLink key={key} to={`/${page}`} onClick={() => setPage(page)} className={'paginationItem'}>{page}</NavLink>
                    }
                }
            }
            return null
        }
    );
    
    let filteredPages = pages;
    if(props.pagesCount >= 10){
        filteredPages = pages.filter( (page,idx) => {
            if(pages[idx].type === 'span' && pages[idx].type !== pages[idx + 1].type){
                return page
            }else if(pages[idx].type.displayName === "NavLink"){
                return page
            }
            return null
        })
    }

    return (
        <Pagination currentPage={props.currentPage} filteredPages={filteredPages} />
    )
}

PaginationLogic.propTypes = {
    setcurrentPage: PropTypes.func,
    key: PropTypes.string,
    pages: PropTypes.array,
    currentPage: PropTypes.number,
    pagesCount: PropTypes.number,
};

export default PaginationLogic