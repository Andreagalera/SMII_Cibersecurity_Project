const { Router} = require('express');
const router = Router();


const controller = require('../controllers/clientCtrl');

router.get('/', controller.getData);
router.post('/', controller.postData);
// router.put('/', controller.putData);
// router.delete('/', controller.deleteData);


module.exports = router;