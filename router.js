const express = require('express');
const { changeLanguage } = require('i18next');
const router = express.Router();

router.post('/router/Languages', (req, res) => {
    const {Languages} = req.body;

    //To store or update the user's preferred language in the database
    req.i18n,changeLanguage(Languages);
     
// Assuming language selection was successful

res.status(200).json({ message: 'Language preference was updated successfully'});
});

//Export the router
module.exports = router;