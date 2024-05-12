import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable({rows}) {
  return (
    <TableContainer 
      sx={{display:'flex',
        maxHeight:'100%', 
        width:'auto',
        minWidth:'300px',
        height:'calc(100vh - 10rem)',
        justifyContent:'center',
        margin:'3rem'
      }} 
        component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Valor</TableCell>
            <TableCell align="center">Tipo</TableCell>
            <TableCell align="center">Saldo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.descripcion}</TableCell>
              <TableCell align="center">{row.monto}</TableCell>
              <TableCell align="center">{row.tipo}</TableCell>
              <TableCell align="center">{row.saldo_calculado}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
