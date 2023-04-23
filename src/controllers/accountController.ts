import {accountModel} from "../models/accountModel";

export const register = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dob: req.body.dob,
    phone: req.body.phone,
    address: req.body.address
  };

  await accountModel.create(payload).then(resp => {
    res.send('/login');
  }).catch(next);
};

export const login = async (req, res, next) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  };

  await accountModel.findOne(payload.email).then(resp => {
    res.send({success: {_id: resp.id}});
  }).catch(next);
};