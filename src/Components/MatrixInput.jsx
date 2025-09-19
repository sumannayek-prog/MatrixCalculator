import React, { useState } from "react";
import { 
    Box, 
    Button, 
    Grid, 
    TextField, 
    Typography,
 } from "@mui/material";

 export default function MatrixInput({onGenerate}) {
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);

  const handleGenerate = () => {
    if (rows > 0 && cols > 0) {
      onGenerate(rows, cols);
    }
  };

//    const handleGenerate = (rows, cols) => {
//     const aData = Array.from({ length: rows }, (_, i) =>
//       Array.from({ length: cols }, (_, j) => i + j)
//     );

//     const bData = Array.from({ length: rows }, (_, i) =>
//       Array.from({ length: cols }, (_, j) => i * j)
//     );

// const handleGenerate = () =>{
//     if(!onGenerate){
//         console.log("There is a error")
//     }
//     const r= Number(rows);
//     const c=Number(cols);
//     if(r>0 && c>0 && !isNaN(r) && isNaN(c)){
//         onGenerate(r,c)
//     }
//     else{
//         console.log("Check out the code")
//     }
// }
  return (
    <Box sx={{ p: 2, border: "1px solid #ccc ", borderRadius: 1, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Generate Matrics
      </Typography>
      <Grid container spacing={2} alignItem="center">
        <Grid xs={4}>
          <TextField
            label="Rows"
            type="number"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            size="small"
            fullWidth
          />
        </Grid>

        <Grid xs={4}>
          <TextField
            label="Columns"
            type="number"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            size="small"
            fullWidth
          />
        </Grid>
        <Grid xs={4}>
          <button varient="contained" onClick={handleGenerate} fullWidth>
            Generate
          </button>
        </Grid>
      </Grid>
    </Box>
  );
};


