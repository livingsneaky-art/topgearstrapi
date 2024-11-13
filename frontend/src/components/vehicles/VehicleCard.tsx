import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Vehicle } from "../../types/vehicle";

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia
        component="img"
        height="200"
        image={vehicle.featuredImage.url}
        alt={vehicle.featuredImage.alt}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {vehicle.brand} {vehicle.name}
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {vehicle.specifications.engine.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {vehicle.specifications.transmission.type}
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          {vehicle.price.currency} {vehicle.price.base.toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
