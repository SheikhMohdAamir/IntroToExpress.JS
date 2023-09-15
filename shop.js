const express = require('express');
const path=require('path')
const helperPath=require('../helper/path')
const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(helperPath,'views','shop.html'));
});

module.exports = router;
