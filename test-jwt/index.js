const jwt = require('jsonwebtoken');
const JWT_SECRET = 'tegar!pop';

const token = jwt.sign({ data: { kelas: 'tegar' } }, JWT_SECRET);
console.log(token);