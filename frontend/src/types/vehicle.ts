export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  featuredImage: {
    url: string;
    alt: string;
  };
  specifications: {
    engine: {
      type: string;
      displacement: string;
      power: string;
      torque: string;
    };
    transmission: {
      type: string;
      gears: number;
    };
    performance: {
      acceleration: string;
      topSpeed: string;
    };
    dimensions: {
      length: string;
      width: string;
      height: string;
      wheelbase: string;
    };
  };
  price: {
    base: number;
    currency: string;
  };
  status: "draft" | "published" | "archived";
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
