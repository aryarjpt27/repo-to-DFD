import React from "react";
import {
  Card, CardContent, Grid,
  FormControl, InputLabel, Select, MenuItem,
  TextField, Button
} from "@mui/material";

export default function AttributeForm({ formData, setFormData, onCheckImpact, checking }) {
  const handle = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Card sx={{ mt: 3, borderRadius: 3, boxShadow: 5 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Select PTS</InputLabel>
              <Select name="pts" value={formData.pts} label="Select PTS" onChange={handle}>
                <MenuItem value="apollo">apollo</MenuItem>
                <MenuItem value="nfos">nfos</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Select Feed</InputLabel>
              <Select name="feed" value={formData.feed} label="Select Feed" onChange={handle}>
                <MenuItem value="trade">trade</MenuItem>
                <MenuItem value="cancel">cancel</MenuItem>
                <MenuItem value="amend">amend</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Select Attribute</InputLabel>
              <Select
                name="attribute"
                value={formData.attribute}
                label="Select Attribute"
                onChange={handle}
              >
                <MenuItem value="trade_id">trade_id</MenuItem>
                <MenuItem value="version_id">version_id</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              name="value"
              label="Attribute Value"
              value={formData.value}
              onChange={handle}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              color="secondary"
              onClick={onCheckImpact}
              disabled={checking}
              sx={{
                py: 1.5,
                textTransform: "none",
                fontWeight: 700,
                borderRadius: 2,
                background:
                  "linear-gradient(90deg, rgba(124,58,237,1) 0%, rgba(59,130,246,1) 100%)",
                boxShadow: 3,
                "&:hover": { filter: "brightness(0.95)" },
              }}
            >
              {checking ? "Checking…" : "Check Impact"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
