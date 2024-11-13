import axios from "axios";
import { Vehicle } from "../types/vehicle";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const VehicleService = {
  getVehicles: async () => {
    const response = await axios.get(`${API_URL}/vehicles`);
    return response.data;
  },

  getVehicle: async (id: string) => {
    const response = await axios.get(`${API_URL}/vehicles/${id}`);
    return response.data;
  },

  getVehiclesByCategory: async (category: string) => {
    const response = await axios.get(`${API_URL}/vehicles?category=${category}`);
    return response.data;
  }
};
