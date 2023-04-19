// Controller Routes
// export const controllerRoutes = app => {
// };

// View Routes
export const viewRoutes = app => {
  app.get('/', (req, res) => {
    res.render('index');
  });
};
