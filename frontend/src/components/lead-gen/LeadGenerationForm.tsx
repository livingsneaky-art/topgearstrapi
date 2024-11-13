import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar
} from "@mui/material";

interface LeadGenerationFormProps {
  type?: "newsletter" | "testDrive" | "priceQuote";
  position?: "top" | "middle" | "bottom";
}

const LeadGenerationForm = ({ type = "newsletter", position = "bottom" }: LeadGenerationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleInterest: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission to backend
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicleInterest: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getFormTitle = () => {
    switch (type) {
      case "testDrive":
        return "Schedule a Test Drive";
      case "priceQuote":
        return "Request a Price Quote";
      default:
        return "Stay Updated with Top Gear Philippines";
    }
  };

  return (
    <Paper sx={{ p: 3, my: 4 }}>
      <Typography variant="h5" gutterBottom>
        {getFormTitle()}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        {type !== "newsletter" && (
          <>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Vehicle Interest</InputLabel>
              <Select
                name="vehicleInterest"
                value={formData.vehicleInterest}
                onChange={handleChange}
                label="Vehicle Interest"
              >
                <MenuItem value="">Select a vehicle</MenuItem>
                <MenuItem value="suv">SUV</MenuItem>
                <MenuItem value="sedan">Sedan</MenuItem>
                <MenuItem value="truck">Truck</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
        >
          {type === "newsletter" ? "Subscribe" : "Submit Request"}
        </Button>
      </Box>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {type === "newsletter"
            ? "Thank you for subscribing!"
            : "Thank you for your request. We will contact you soon."}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default LeadGenerationForm;
