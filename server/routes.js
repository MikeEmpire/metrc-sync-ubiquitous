const swaggerJSDoc = require("swagger-jsdoc");
const favicon = require("serve-favicon");
const path = require("path");

const rooms = require("./routes/rooms");
const strains = require("./routes/strains");
const packages = require("./routes/packages");
const labTests = require("./routes/labtests");
const validate = require("./routes/validate");
const plants = require("./routes/plants");
const plantBatches = require("./routes/plant_batches");
const harvests = require("./routes/harvest");
const sales = require("./routes/sales");
const items = require("./routes/item");
const transfers = require("./routes/transfers");
const facilities = require("./routes/facilities");

module.exports = (app) => {
  app.use("/api/facilities", facilities);
  app.use("/api/rooms", rooms);
  app.use("/api/validate", validate);
  app.use("/api/plants", plants);
  app.use("/api/harvest", harvests);
  app.use("/api/labtests", labTests);
  app.use("/api/items", items);
  app.use("/api/strains", strains);
  app.use("/api/plantbatches", plantBatches);
  app.use("/api/sales", sales);
  app.use("/api/packages", packages);
  app.use("/api/transfers", transfers);

  // serve the grolens favicon
  app.use(favicon(path.join(__dirname, "images", "favicon.ico")));

  // -- routes for docs and generated swagger spec --
  app.get("/api-docs", (req, res) => {
    res.render("redoc", { docUrl: `${process.env.DOC_URL}/docs/swagger.json` });
  });

  app.get("/docs", (req, res) => {
    res.render("customer-docs");
  });

  app.get("/docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  // Define request response in root URL (/)
  app.get("/", (req, res) =>
    res.send("Welcome to Grolens METRC-Michigan API!")
  );

  // -- setup up swagger-jsdoc --
  const swaggerDefinition = {
    info: {
      title: "Grolens METRC Sync API",
      version: "2.0.0",
      description: "Grolens METRC",
    },
    host: process.env.DOC_HOST,
    basePath: "/",
  };
  const options = {
    swaggerDefinition,
    apis: [path.resolve(__dirname, "routes", "*.js")],
  };
  const swaggerSpec = swaggerJSDoc(options);

  // -- routes for docs and generated swagger spec --
  app.get("/api-docs", (req, res) => {
    res.render("redoc", { docUrl: `${process.env.DOC_URL}/docs/swagger.json` });
  });

  app.get("/docs", (req, res) => {
    res.render("customer-docs");
  });

  app.get("/docs/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  // Swagger API Documentation
  // eslint-disable-next-line no-unused-vars
  // app.use('/swag', (req, res, next) => res.status(200).send(swaggerDocument));

  // Error Handling
  // Route not found

  // NECESSARY Fallback for client-side routing (until this issue is addressed)
  // Related to Browser Router
  //  If no route is found, returns index.html instead of making non-existent request

  // If error is passed from next(error)
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (!err.statusCode) {
      // eslint-disable-next-line no-param-reassign
      err.statusCode = 500;
    }

    return res.status(err.statusCode).send(err.message);
  });
};
