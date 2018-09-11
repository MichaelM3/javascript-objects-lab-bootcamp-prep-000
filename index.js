var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1 }
  return object.assign(recipes, { prop2: 2 })
}