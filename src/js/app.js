import Validator from './Validator';

const result = new Validator('8 (927) 080-00-00');
console.log('result', result);
console.log('resultNew', result.validatePhone());
