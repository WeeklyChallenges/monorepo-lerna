const getStore = require('store');

const { user } = getStore();
console.log(`user ID: ${user.id}`)