import React from 'react';
import {Link} from 'react-router-dom';
import {RESULTS_PER_PAGE} from "../../config/api.config";

const Pagination = ({count, pageId}) => {
    let pages = 0;

    if (count !== 0) {
        pages = Math.ceil(count / RESULTS_PER_PAGE);
    }

    return (
        <div className="pagination">
            <Link to='/page/1'>
                {parseInt(pageId, 10) === 1 ? null : (
                    <div>First</div>
                )}
            </Link>
            {parseInt(pageId, 10) !== 1 && (
                <Link to={`/page/${parseInt(pageId, 10) - 1}`}>
                    <div>Prev</div>
                </Link>
            )}
            <div>{parseInt(pageId, 10)}</div>
            {parseInt(pageId, 10) !== pages && (
                <Link to={`/page/${parseInt(pageId, 10) + 1}`}>
                    <div>Next</div>
                </Link>
            )}
            <Link to={`/page/${pages}`}>
                {parseInt(pageId, 10) === pages ? null : (
                    <div>Last</div>
                )}
            </Link>
        </div>
    );
}

export default Pagination
