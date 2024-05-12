
import '../../App.css';
import logo from '../../assets/logo.svg';
import {fetchData} from '../utils/data';
import {useNavigate} from 'react-router-dom';
export default function Header({toggleForm,isForm,cuenta}) {
   
  async function pdfHandler() {
    const response = await fetchData(`api/movimientos/${cuenta}/obtener_pdf/`);
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');
    }
  const navigate=useNavigate();
  return (
    <div id="header" >
      <figure  onClick={()=>navigate('/')} className="logo">
        <img src={logo} alt="logo"/>
      </figure>
      <div style={{marginRight:'3rem'}} className='botones_header'>
        <button onClick={toggleForm}>{isForm?'Nueva Transacción': 'Ver Extractos'}</button>
        <button onClick={pdfHandler}>Descargar Pdf</button>
      </div>  
    </div>
  );
}

