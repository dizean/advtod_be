const express = require('express')
const router = express.Router();
import AccountControl from "../controllers/Account";


router.route("/create").post(AccountControl.Create); // create
router.route("/display").get(AccountControl.Get); // get
router.route("/test").get(AccountControl.Test); // get

const Accountroute = router;

export default Accountroute;