
import { useEffect, useState } from 'react';
import { fetchData } from '../../utils/data';
import { useParams } from 'react-router-dom';
import MovimientoForm from '../form';
import DenseTable from '../dense-table';
import Header from '../header'; 
export default function AppView(props) {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading indicator
  const [toggleForm, setToggleForm] = useState(false);
  const [refresh, setRefresh]=useState(false)
  const { cuenta } = useParams();
  function updateTableHandler() {
      setRefresh(!refresh);
      setToggleForm(toggleForm);
  }
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      setIsLoading(true); // Set loading state to true before fetching data
      try {
        const response = await fetchData(`api/movimientos/${cuenta}/lista_movimientos/`);
        setRows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false); // Set loading state to false after data is fetched (or even if there's an error)
      }
    };

    fetchDataFromAPI();
  }, [cuenta,refresh]);
  return (
      <>
        <Header cuenta={cuenta} toggleForm={() => setToggleForm(!toggleForm)} isForm={!toggleForm}/>

        {isLoading ? (
         <div className="spin"></div>
        ) : (
          !toggleForm ? <DenseTable rows={rows} /> : <MovimientoForm updateTable={updateTableHandler} numCuenta={cuenta} />
        )}
      </>
    );
  }
