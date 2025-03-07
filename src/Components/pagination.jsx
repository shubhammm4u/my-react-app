import { useEffect, useState } from "react";

const Pagination = ({upliftPageValue, totalRecords = 0, rowsPerPage = 5}) => {

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        upliftPageValue(currentPage);
    }, [currentPage])

    const handleClick = (flag) => {
        flag ? setCurrentPage(prev => prev + 1) : setCurrentPage(prev => prev - 1);
    }

    const totalPages = Math.trunc(totalRecords / rowsPerPage) + (totalRecords % rowsPerPage === 0 ? 0 : 1);
    
    return (
        <>
            {console.log('check curr', currentPage+1, totalPages)}
            <button 
                className="pag_button"
                onClick={() => handleClick(false)}
                disabled={currentPage === 0}
            >
                Prev
            </button>
            <span className="pag_text">{currentPage+1}</span>
            <button 
                className="pag_button"
                onClick={() => handleClick(true)}
                disabled={currentPage + 1 === totalPages}
            >
                Next
            </button>
        </>
    )
}

export default Pagination;