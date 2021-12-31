const mongoose = require('mongoose')

const connect =(url) => { mongoose.connect(url, () => {
  console.log('DB connected')
})
}
module.exports = connect