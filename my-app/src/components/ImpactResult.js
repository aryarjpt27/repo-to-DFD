import React from "react";
import {
  Card, CardContent, Typography, Grid, Table, TableBody,
  TableCell, TableContainer, TableRow, Paper
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StageTable = ({ title, rows }) => (
  <Card
    elevation={2}
    sx={{
      borderRadius: 3,
      height: "100%",
      border: "1px solid #eee",
      transition: "0.2s",
      "&:hover": { boxShadow: 6, transform: "translateY(-2px)" },
    }}
  >
    <CardContent>
      <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 1 }}>
        {title}
      </Typography>
      <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2 }}>
        <Table size="small" aria-label={`${title} table`}>
          <TableBody>
            {rows.map(([k, v]) => (
              <TableRow key={k} hover>
                <TableCell sx={{ width: 130, fontWeight: 600 }}>{k}</TableCell>
                <TableCell>{v}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);

export default function ImpactResult({ data }) {
  if (!data) return null;

  const [input, usage, output] = data.lineage;

  const toRows = (node) => [
    ["File", node.file],
    ["Field", node.field],
    ["Value", node.value],
    ["Last Updated", node.updated],
    ["Status", node.status],
  ];

  return (
    <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 6 }}>
      <CardContent>
        <Typography align="center" variant="h6" fontWeight={800} sx={{ mb: 3 }}>
          Attribute Lineage Stats for: {data.attribute} = {data.value}
        </Typography>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <StageTable title="Input Source" rows={toRows(input)} />
          </Grid>

          <Grid
            item
            xs={12}
            md={0.5}
            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
          >
            <ArrowForwardIosIcon />
          </Grid>

          <Grid item xs={12} md={4}>
            <StageTable title="Usage" rows={toRows(usage)} />
          </Grid>

          <Grid
            item
            xs={12}
            md={0.5}
            sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
          >
            <ArrowForwardIosIcon />
          </Grid>

          <Grid item xs={12} md={4}>
            <StageTable title="Output/Impact" rows={toRows(output)} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
