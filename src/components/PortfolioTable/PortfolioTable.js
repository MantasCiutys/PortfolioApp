import React, { useEffect , useState } from 'react';
import './PortfolioTable.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CryptoAPI from '../CryptoAPI/CryptoAPI';

const PortfolioTable = ({setNetWorth}) => {
  
  const columns = ["Asset", "Name", "Amount", "Current Price", "Total Sum", ""];

  const [data, setData] = useState([
    {"id": 0, "asset": "BTC", "name": "bitcoin", "amount": 0.35, "price": 30000},
    {"id": 1, "asset": "ETH", "name": "ethereum", "amount": 1.4, "price": 1700}
  ]);

  const [isLastEditable, setIsLastEditable] = useState(false);

  let totalWorth = 0;

  const recalculateTotalWorth = () => {
    totalWorth = 0;
    data.forEach(asset => {
      totalWorth += asset.amount * asset.price;
    })
  }

  const addNewRowToData = () => {
    setIsLastEditable(true);
    const lastId = data.length === 0 ? -1 : data.length - 1;
    console.log("last id: " + lastId);
    const newRowData = {
      "id": lastId + 1,
      "asset": "",
      "name": "",
      "amount": "",
      "price": ""
    }
    setData([...data, newRowData]);
  }

  const save = () => {
    setIsLastEditable(false);
  }

  const deleteRow = (assetId) => {
    let index = 0;
    console.log("Asset id to delete: " + assetId);
    for (let i = 0; i < data.length; i++) {
      if (assetId === data[i].id) {
        index = i;
        break;
      }
    }
    console.log("Index to delete: " + index);
    console.log(data);
    const arrayWithElementRemoved = data.splice(index, 1);
    setData(data.filter(row => row.id !== arrayWithElementRemoved[0].id));
  }

  useEffect(() => {
    recalculateTotalWorth();
    setNetWorth(totalWorth);
  }, [totalWorth])

  useEffect(() => {
    console.log("Data changed !");
    setData(data);
  }, [data.length])

  return (
      <div>
        <Table striped bordered hover className="portf-table" id="portfolio-table">
          <thead>
            <tr>
              {columns.map(col => {
                return (
                  <th>{col}</th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((asset, i) => {
              const shouldEditRow = isLastEditable && i === data.length - 1;
              return (
                <tr>
                  <td contentEditable={shouldEditRow}>{asset.asset}</td>
                  <td>{asset.name}</td>
                  <td contentEditable={shouldEditRow}>{asset.amount}</td>
                  <td>{asset.price}</td>
                  <td>{asset.amount * asset.price}</td>
                  <td><Button id={asset.id} variant="danger" 
                  onClick={() => deleteRow(asset.id)}
                  >Delete - {asset.id}</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        <Button id="add_new_row" variant="primary" onClick={() => addNewRowToData()}>Add</Button>
        <Button id="save" variant="success" onClick={() => save()}>Save</Button>
        <CryptoAPI
          data={data}
          setData={setData}
        >
        </CryptoAPI>
      </div>
  )

}
    
export default PortfolioTable;