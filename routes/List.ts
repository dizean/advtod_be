const express = require('express')
const router = express.Router();
import ListControl from "../controllers/List";


router.route("/create").post(ListControl.Create); // create
// router.route("/display").get(ListControl.Get); // get
const Listroute = router;

export default Listroute;