import React from "react";
import { Card, CardContent, Grid, TextField, Button } from "@mui/material";

export default function RepoInput({ repoUrl, setRepoUrl, onGenerate, loading }) {
  return (
    <Card sx={{ mt: 4, borderRadius: 3, boxShadow: 5 }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={9}>
            <TextField
              fullWidth
              label="Enter GitHub repo URL"
              placeholder="https://github.com/org/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              fullWidth
              size="large"
              variant="contained"
              onClick={onGenerate}
              disabled={loading || !repoUrl.trim()}
              sx={{
                height: "56px",
                textTransform: "none",
                fontWeight: 700,
                boxShadow: 3,
              }}
            >
              {loading ? "Generating…" : "Generate DFD"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}


