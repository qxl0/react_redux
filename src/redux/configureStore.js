// use commonJS
if (process.env.NPDE_ENV === "production"){
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}