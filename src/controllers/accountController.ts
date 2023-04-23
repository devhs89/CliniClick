import {accountModel} from "../models/accountModel";
import bcrypt from 'bcrypt';
import {responseMsg} from "../constants/responseMsg";

export const register = async (req, res) => {
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
    res.redirect('login');
  }).catch(err => {
    res.render('register', {resp: err});
  });
};

export const login = async (req, res) => {
  const payload = {
    email: req.body.email,
    password: req.body.password
  };

  await accountModel.findOne({email: payload.email}).then(resp => {
    bcrypt.compare(payload.password, resp.password, (err, match) => {
      if (match) {
        req.session.userId = resp._id;
        req.session.email = resp.email;
        res.redirect('home');
      } else {
        res.render('login', {resp: responseMsg.userNotFound});
      }
    });
  }).catch(err => {
    res.render('login', {resp: err});
  });
};

// Logout Action
export const logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};