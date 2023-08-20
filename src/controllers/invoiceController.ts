import {appointmentModel} from "../models/appointmentModel";
import {accountModel} from "../models/accountModel";
import {doctorModel} from "../models/doctorModel";
import {facilityModel} from "../models/facilityModel";
import {makePdf} from "../helpers/pdfMake";
import path from "path";

export const showAll = async (req, res, next) => {
  const appoints = await appointmentModel.find({}).then(aps => aps);
  res.render('invoice', {appointments: JSON.stringify(appoints)});
};

export const printPdf = async (req, res) => {
  if (!req.query.ap) return res.redirect('/invoice');

  const ap = await appointmentModel.findById(req.query.ap).then(doc => doc);
  const usr = await accountModel.findById(ap.patientId).then(doc => doc);
  const doc = await doctorModel.findById(ap.prefDoctor).then(doc => doc);
  const cli = await facilityModel.findById(ap.clinic).then(doc => doc);

  makePdf({
    invoiceNumber: ap._id.toString(),
    clinic: cli.name,
    doctor: doc?.firstName ? `${doc.firstName} ${doc.lastName}` : '',
    buyerName: `${usr.firstName} ${usr.lastName}`,
    buyerAddress: usr.address,
    price: Math.random().toString()
  });
  res.sendFile(path.resolve(`./invoices_pdf/${ap._id.toString()}.pdf`));
};