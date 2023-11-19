//* Caching in JavaScript can be achieved in many different ways
//* The simplest way is to use a object and assigning keys and values to it
function Cacher() {  
  const _cache = {}

  this.set = (key, value) => _cache[key] = value

  this.get = (key) => _cache[key]

  this.delete = (key) => delete _cache[key]
}

const cache = new Cacher()

cache.set('a', 1);

console.log(cache.get('a'))

cache.delete('a')
console.log(cache.get('a'))