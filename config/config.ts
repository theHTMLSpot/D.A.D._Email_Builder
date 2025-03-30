export const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
    url: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`,
    apiUrl:`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`
  };
  