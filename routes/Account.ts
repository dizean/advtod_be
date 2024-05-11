const express = require('express')
const router = express.Router();
import AccountControl from "../controllers/Account";


router.route("/create").post(AccountControl.Create); // create
const Accountroute = router;

export default Accountroute;