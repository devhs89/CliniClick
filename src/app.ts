/*!
 * Copyright 2023, CC_Group 5
 * Akshai Kumbalathparambil Thambi, Amrutha Palakkada Jayan, Aruna Rani, Harpreet Singh, Jimit Sunil Modi
 */

import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import expressSession from 'express-session';
import dbContext from './data/dbContext';
import {router} from "./routes";
import path from "path";
import {seedDoctors, seedFacilities} from "./data/initialSeed";

// Create Express Application
const app = express();
const port = 41004;

// App Settings
dotenv.config();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve('src', 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({secret: process.env.SESSION_TOKEN}));
app.use(router);

// Server listening on specified port
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// Database connection
const _db = dbContext();

// Seed data
const _sf = seedFacilities();
const _sd = seedDoctors();