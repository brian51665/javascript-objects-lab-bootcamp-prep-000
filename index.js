var recipes = {sandwich:"peanut butter, jelly, bread", soup:"water, salt, chicken"}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object,{ [key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete Object.assign({}, object)
  return object
}
