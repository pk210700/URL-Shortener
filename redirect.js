const express = require('express')
const router = express.Router()
const Url = require('../models/Url')
const url_stats = require('../models/url_stats')
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({
            urlCode: req.params.code
        })
        if (url) {
          console.log(url);
          // console.log(Url);
          Url.update(
            { urlCode: req.params.code },
            { $inc: { count: 1 } })
              //await url.save()
          //console.log(url);
          // url1=Url.findOne({
          //     urlCode: req.params.code
          // })
          // console.log(url1);
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No URL Found')
        }
    }
    catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})
module.exports = router
