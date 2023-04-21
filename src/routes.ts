// Controller Routes
// export const controllerRoutes = app => {
// };

// View Routes
export const viewRoutes = app => {
  app.get('/appointment', (req, res) => res.render('appointment'));

  app.get('/', (req, res) => res.render('index'));

  app.use('*', (req, res) => res.render('404'));
};
