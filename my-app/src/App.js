import React, { useState } from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import RepoInput from "./components/RepoInput";
import AttributeForm from "./components/AttributeForm";
import ImpactResult from "./components/ImpactResult";
import "./App.css";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  const [formData, setFormData] = useState({
    pts: "apollo",
    feed: "trade",
    attribute: "trade_id",
    value: "123",
  });

  const [impactData, setImpactData] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      // TODO: call backend to build DFD from repoUrl
      // await fetch("/generate-dfd", { method: "POST", body: JSON.stringify({ repoUrl }) })
      // For demo, just delay:
      await new Promise((r) => setTimeout(r, 1200));
    } finally {
      setLoading(false);
    }
  };

  const handleCheckImpact = async () => {
    setChecking(true);
    try {
      // TODO: call backend using formData
      // const res = await fetch("/impact", { ... });
      // const data = await res.json();
      // setImpactData(data);

      // Mock data faithful to the wireframe:
      const data = {
        attribute: formData.attribute,
        value: formData.value,
        lineage: [
          {
            stage: "Input Source",
            file: "trade.csv",
            field: formData.attribute,
            value: formData.value,
            updated: "2025-08-15",
            status: "Active",
          },
          {
            stage: "Usage",
            file: "trades",
            field: formData.attribute,
            value: "10",
            updated: "2025-08-15",
            status: "Processed",
          },
          {
            stage: "Output/Impact",
            file: "trade_sum",
            field: formData.attribute,
            value: "10",
            updated: "2025-08-15",
            status: "Reported",
          },
        ],
      };
      await new Promise((r) => setTimeout(r, 500));
      setImpactData(data);
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="app-bg">
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Header />
        <RepoInput
          repoUrl={repoUrl}
          setRepoUrl={setRepoUrl}
          onGenerate={handleGenerate}
          loading={loading}
        />
        <AttributeForm
          formData={formData}
          setFormData={setFormData}
          onCheckImpact={handleCheckImpact}
          checking={checking}
        />
        <ImpactResult data={impactData} />
      </Container>
    </div>
  );
}

