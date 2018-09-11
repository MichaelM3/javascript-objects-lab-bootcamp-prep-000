var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1 }
  return Object.assign(recipes, { prop2: 2 })
}

function deleteFromObjectByKey(object, key) {
  var recipes = { prop: 1
}