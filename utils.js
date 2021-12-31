String.prototype.isNumber = function() {
  t = this.split('String: ')[0]
  if(t.includes('0') || t.includes('1') || t.includes('2') || t.includes('3') || t.includes('4') || t.includes('5') || t.includes('6') || t.includes('7') || t.includes('8') || t.includes('9')) return true
  else return false
}

module.exports = String
