import { useState } from "react";
import Pagination from "./pagination";

const Table = ({tableData = [], headerColumnConfig = [], rowsPerPage = 5}) => {

    const [currPage, setCurrPage] = useState();

    const config_ = headerColumnConfig?.filter(_ => _?.field && _?.label);

    const getCurrentPageValue = (pageValInput) => {
        setCurrPage(pageValInput);
    }

    let iter = tableData?.slice((currPage*rowsPerPage), (currPage+1)*rowsPerPage);
    iter = iter?.length < rowsPerPage ? [...iter, ...new Array(rowsPerPage - iter?.length).fill({field: 'dummy'})] : iter;

    return (
        <>
            {console.log('config_', tableData, config_, iter)}
            <table className="styled-table">

                <thead>
                    {config_?.map((_, index) => <th key={index}>{_?.label}</th>)}
                </thead>

                <tbody>
                    {iter?.map((_, indexPar) => (
                        <tr key={indexPar}>
                            {config_?.map((iter, indexChild) => <td key={indexChild}>{_[iter?.field] || ''}</td>)}
                        </tr>
                    ))}
                </tbody>

            </table>

            <Pagination 
                totalRecords={tableData?.length}
                rowsPerPage={rowsPerPage}
                upliftPageValue={getCurrentPageValue}
            />
            
        </>
    )
}

export default Table;