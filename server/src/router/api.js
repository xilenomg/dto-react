const express = require('express');

const Router = new express.Router();
const request = require('request');

Router.get('/events', (req, res) => {
  request('https://storage.googleapis.com/dito-questions/events.json', (
    error,
    response,
    body,
  ) => {
    res.json(JSON.parse(body));
  });
});

module.exports = Router;
