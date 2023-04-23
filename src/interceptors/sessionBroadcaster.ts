export function sessionBroadcaster(req, res, next) {
  if (req.url === '/logout') {
    res.app.locals.session = null;
  } else {
    if (req.session?.userId) {
      res.app.locals.session = {userId: req.session.userId};
    }
  }
  next();
}
