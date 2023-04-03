const router = require("express").Router();
const { showImage }  = require('../controller/s3_communication/showImage')
const{ imagedetails } = require("../controller/s3_communication/imagedetails")

router.post("/showImage",  showImage);
router.post("/imagedetails", imagedetails);



module.exports = router;
