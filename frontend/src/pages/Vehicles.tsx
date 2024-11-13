import { Grid, Typography, Box, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import VehicleCard from "../components/vehicles/VehicleCard";
import { VehicleService } from "../services/vehicle.service";
import SEO from "../components/seo/SEO";

const Vehicles = () => {
  const { data: vehicles, isLoading, error } = useQuery({
    queryKey: ["vehicles"],
    queryFn: VehicleService.getVehicles
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error loading vehicles</Typography>;

  return (
    <>
      <SEO
        title="Vehicle Library"
        description="Explore our comprehensive collection of vehicle reviews, specifications, and prices."
        keywords="cars, vehicles, reviews, specifications, prices, Philippines"
      />
      <Container>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Vehicle Library
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore our comprehensive collection of vehicle reviews, specifications, and prices.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {vehicles?.map((vehicle) => (
            <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
              <VehicleCard vehicle={vehicle} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Vehicles;
