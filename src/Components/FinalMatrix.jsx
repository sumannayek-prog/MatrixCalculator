import React, { useState } from "react";
import { 
  Box,
  Button,
  Container,
  Grid,
  Typography, 
} from "@mui/material";
import MatrixInput from "./MatrixInput";
import MatrixTable from "./MatrixTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function FinalMatrix() {
  const [matrices, setMatrices] = useState({
    a: null,
    b: null,
    c: null,
  });

  const handleGenerate = (rows, cols) => {
    const aData = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i + j)
    );

    const bData = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i * j)
    );

    setMatrices({
      a: { rows, cols, data: aData },
      b: { rows, cols, data: bData },
      c: null,
    });
  };

  const handleAddMatrices = () => {
    if (!matrices.a || !matrices.b) return;

    const cData = matrices.a.data.map((row, i) =>
      row.map((val, j) => val + matrices.b.data[i][j])
    );

    setMatrices((prev) => ({
      ...prev,
      c: { rows: matrices.a.rows, cols: matrices.a.cols, data: cData },
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
          Matrix Calculator
        </Typography>

        <MatrixInput onGenerate={handleGenerate} />

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={4}>
            <MatrixTable
              matrix={matrices.a}
              title="Matrix A (Sum of Indices)"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <MatrixTable
              matrix={matrices.b}
              title="Matrix B (Product of Indices)"
            />
          </Grid>
          {matrices.c && (
            <Grid item xs={12} md={4}>
              <MatrixTable matrix={matrices.c} title="Matrix C (A + B)" />
            </Grid>
          )}
        </Grid>

        {matrices.a && matrices.b && !matrices.c && (
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              variant="outlined"
              size="large"
              onClick={handleAddMatrices}
              sx={{ mr: 2 }}
            >
              Add Matrices
            </Button>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  );
}
