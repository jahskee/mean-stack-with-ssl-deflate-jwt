const DataController = require('./crud/_dataController');
const Model = require('../../models/contactModel');

const controller = new DataController(Model);

/* ---------- Available or built-in functions ----------
   
1. controller.list(req, res)

2. controller.create(req, res) 
   - requires x-www-form-urlencoded to test in Postman

3. controller.read(req, res)

4. controller.delete(req, res)


---private function2
5. this._search(queryObj={}, fields=[], limit = null)

---------- Default functions ---------- */
module.exports = controller;