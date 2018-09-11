var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1 }
  return Object.assign(recipes, { prop: 2 })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1 }
  return recipes.prop
}