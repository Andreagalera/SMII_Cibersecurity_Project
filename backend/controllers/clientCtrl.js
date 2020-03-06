
const controllerCtrl = {};


// GET
controllerCtrl.getData = async (req, res) => {
    data = "El get data";
    res.json(data);
}


// POST
controllerCtrl.postData =  async (req, res) => {
    console.log("POST: ",req);
    res.json({
        'status': 'Post realizado'
        
    });
}

module.exports = controllerCtrl;