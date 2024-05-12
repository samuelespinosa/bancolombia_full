
import React, { useState } from 'react';
import { TextField, Button, Container, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import {postData} from '../utils/data'

import { useNavigate } from "react-router-dom";
export default function MovimientoForm({numCuenta,updateTable}) {
    const [cuenta, setCuenta] = useState(numCuenta);
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');
    const [tipo, setTipo] = useState('');
  async function handleSubmit(event) {
          try{
          const data={
            "cuenta": cuenta,
            "descripcion": descripcion,
            "monto": monto,
            "tipo": tipo,
          }
            const response=postData('api/movimientos/',data);
            event.preventDefault();
            updateTable() 
          }catch(e){
              setFailed(true);
              console.log(e,'error fetching data');
          }
    }
    return (
        <div className='formContainer'>
          <form style={{ width: '100%', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <TextField
                    type="number"
                    variant='outlined'
                    label="Cuenta"
                    onChange={e => setCuenta(e.target.value)}
                    value={cuenta}
                    fullWidth
                    required
                    sx={{
                        mb: 4,
                        '&:focus': {
                            backgroundColor: '#f0f0f0', // Change to your desired focus color
                        },
                    }}
                />

                <TextField
                    type="text"
                    variant='outlined'
                    label="Descripcion"
                    onChange={e => setDescripcion(e.target.value)}
                    value={descripcion}
                    fullWidth
                    required
                    sx={{
                        mb: 4,
                        '&:focus': {
                            backgroundColor: '#f0f0f0', // Change to your desired focus color
                        },
                    }}
                />

                <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                    <TextField
                        type="number"
                        variant='outlined'
                        label="monto"
                        onChange={e => setMonto(e.target.value)}
                        value={monto}
                        fullWidth
                        required
                        sx={{
                            '&:focus': {
                                backgroundColor: '#f0f0f0', // Change to your desired focus color
                            },
                        }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="tipo-label">Tipo</InputLabel>
                        <Select
                            variant='outlined'
                            label="Tipo"
                            id="tipo"
                            value={tipo}
                            onChange={e => setTipo(e.target.value)}
                            sx={{
                                '&:focus': {
                                    backgroundColor: '#f0f0f0', // Change to your desired focus color
                                },
                            }}
                        >
                            <MenuItem value="">Seleccionar</MenuItem>
                            <MenuItem value="consignacion">Consignar</MenuItem>
                            <MenuItem value="retiro">retirar</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Button onClick={handleSubmit} variant="outlined"type="submit">registrar</Button>
            </form>
        </div>
    )
}
