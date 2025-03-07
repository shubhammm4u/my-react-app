import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Components/table';

function App() {
  const [data, setData] = useState([]);

  const config_ = [
    {field: 's.no', label: 'S.No.'},
    {field: 'amt.pledged', label: 'Amount pledged'},
    {field: 'percentage.funded', label: 'Percentage funded'}
  ]

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json')
    .then(async res => {
      let res_ = await res.json();
      setData(res_);
    })
    .catch(err => console.log('Error occured in API', err))
  }, [])

  return (
    <>
      {console.log(data)}
      <Table 
        tableData={data} 
        headerColumnConfig={config_}
        // rowsPerPage={5}
      />
    </>
  )
}

export default App
