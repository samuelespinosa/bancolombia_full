import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Header from './header';
import {fetchData} from '../utils/data';
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function searchView() {
  const theme = useTheme();
  const [submitFailure, setSubmitFailure] = useState(false);
  const [acount, setAcount]= useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {
      try {
        // const response = await fetchData(`api/movimientos/${acount}/lista_movimientos/`);
        const response = await fetchData(`api/cuentas/${acount}/`);
        if (response.statusText==='OK') {
              console.log(response.data);
              navigate(`/detalles/${acount}`);
          } else {
              console.error('API request failed:', response.status, response.statusText);
              setSubmitFailure(true);
          }
      } catch (error) {
          console.error('An error occurred while fetching data:', error);
          setSubmitFailure(true);
      }
  };


  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField 
          name="acount" 
          label="Cuenta" 
          onChange={(e)=>setAcount(e.target.value)} 
          
        />
      </Stack>
      {submitFailure &&
        <Stack direction="row" alignItems="center" justifyContent="flex-start" >
          <Typography variant="subtitle2" >
            No se encontró la cuenta  
          </Typography>
        </Stack>
      } 
      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{mt:2,
          backgroundColor:'#fdda24',
          color:'#2c2a29',
          boxShadow: '0 1px 1px',
          '&:hover': {

            backgroundColor:'#fdda24',
            boxShadow: '0 1px 8px 0 rgba(0,0,0,0.14),0 3px 8px 0 rgba(0,0,0,0.11)',
          },
        }}
      >
        VER EXTRACTOS  
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        display:'flex',
        width:'100vw',
        height:'100vh',
        justifyContent:'center',
      }}
    >
      <Stack  width='100%' display='flex' alignContent="center" justifyContent="center" >
        <Card
          sx={{
            p: 4 ,
            width: 1,
            maxWidth: 420,
            margin:'auto'
          }}
        >
          <Header/>
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
