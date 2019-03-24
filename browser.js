const RAF = require('random-access-web')

module.exports = function (filename) {
  if('string' === typeof filename) {
    const raf = RAF(filename)
    raf.filename = filename
    return raf
  }
  return filename
}



