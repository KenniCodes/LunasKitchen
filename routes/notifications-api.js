const express=require('express');
const router=express.Router();
const userQueries = require('../db/queries/notifications');
  
  router.get('/:id', (req, res) => {
      userQueries.getNotifications()
        .then(sms => {
          res.json({ notification });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
  
  
  module.exports = router;
  
