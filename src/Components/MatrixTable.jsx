import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
export default function MatrixTable({ matrix, title }){
  if (!matrix) {
    return (
      <Box sx={{ p: 2, textAlign: "center" }}>
        <Typography variant="h6">No {title} matrix generated</Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ p: 2, m: 1 }}>
      <Typography variant="h6" gutterBottom align="center">
        {title} Matrix ({matrix.rows} x {matrix.cols})
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell/> {/* Empty for row indices */}
              {Array.from({ length: matrix.cols }, (_, j) => (
                <TableCell key={j} align="center">
                  {j} 
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: matrix.rows }, (_, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row" align="center">
                  {i} 
                </TableCell>
                {Array.from({ length: matrix.cols }, (_, j) => (
                  <TableCell key={j} align="center">
                    {matrix.data[i][j]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};


