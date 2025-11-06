import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import MatrixInput from "./MatrixInput";
import MatrixTable from "./MatrixTable";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme(); //mui er default theme banano ho66e jate puro app ak rokom style pai

// Ei component ta user k matrics generate krte o segulo addition krte dei

export default function FinalMatrix() {
  // 3 ta matrics er data rakhar jonno useState use kora hoyeche

  const [matrices, setMatrices] = useState({
    a: null, // 1st Matrix A
    b: null, // 2nd Matrix B
    c: null, // 3rd Matrix C(Matrix A + Matrix B)
  });

  // 2ta Matrix bananor jonno function
  // Matrix A → every cell = i + j
  // Matrix B → every cell = i * j

  const handleGenerate = (rows, cols) => {
    // A Matrix (Sum of Indices)

    const aData = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i + j)
    );

    // B Matrix (Product of Indices)

    const bData = Array.from({ length: rows }, (_, i) =>
      Array.from({ length: cols }, (_, j) => i * j)
    );

    // state e matrix gulo store kora hoyeche

    setMatrices({
      a: { rows, cols, data: aData },
      b: { rows, cols, data: bData },
      c: null,
    });
  };

  // duto matrix er Addition function (A + B)

  const handleAddMatrices = () => {
    // jodi Matrix A ba Matrix B na hoi tahle return

    if (!matrices.a || !matrices.b) {
      return;
    }

    // Matrix C (Every cell = A[i][j] + B[i][j])

    const cData = matrices.a.data.map((row, i) =>
      row.map((val, j) => val + matrices.b.data[i][j])
    );

    // state update kore new Matrix C set kora

    setMatrices((prev) => ({
      ...prev,
      c: { rows: matrices.a.rows, cols: matrices.a.cols, data: cData },
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 4, minHeight: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: matrices.a ? "flex-start" : "center",
            height: matrices.a ? "auto" : "100vh",
            textAlign: "center",
          }}
        >
          <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4 }}>
            Matrix Calculator
          </Typography>

          {/* Input Box */}
          <MatrixInput onGenerate={handleGenerate} />

          {/* Matrix Tables */}
          {matrices.a && (
            <>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ mt: 4 }}
              >
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

              {/* Add Button */}
              {matrices.a && matrices.b && !matrices.c && (
                <Box sx={{ textAlign: "center", mt: 3 }}>
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
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
