import { useEffect, useState } from "react";
import { Box, Typography, Paper, Alert } from "@mui/material";
import { HealthService } from "../../services/health.service";

const ConnectionStatus = () => {
  const [status, setStatus] = useState({
    server: "checking",
    database: "checking",
    timestamp: null
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const health = await HealthService.checkHealth();
        setStatus(health);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper sx={{ p: 3, my: 2 }}>
      <Typography variant="h6" gutterBottom>
        System Status
      </Typography>
      {error ? (
        <Alert severity="error">
          Connection Error: {error}
        </Alert>
      ) : (
        <Box>
          <Typography>
            Server Status: {status.server}
          </Typography>
          <Typography>
            Database Status: {status.database}
          </Typography>
          {status.timestamp && (
            <Typography variant="caption" color="text.secondary">
              Last checked: {new Date(status.timestamp).toLocaleString()}
            </Typography>
          )}
        </Box>
      )}
    </Paper>
  );
};

export default ConnectionStatus;
