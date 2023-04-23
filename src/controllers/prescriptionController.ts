export const showAll = async (req, res) => {
  console.log(req.body);
  res.send(req.body);
};