/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  const arr = [];
  preferences.forEach((item, index) => {
    if (preferences[index] === preferences[preferences[preferences[item - 1] - 1] - 1] &&
      preferences[preferences[index] - 1] === preferences[item - 1] &&
      preferences[preferences[preferences[index] - 1] - 1] === preferences[preferences[item - 1] - 1]) {
        let a = preferences[index];
        let b = preferences[preferences[index] - 1];
        let c = preferences[preferences[preferences[index] - 1] - 1];
        if (a !== b && b !== c && c !== a) {
          if (arr.indexOf(a) === -1 && arr.indexOf(b) === -1 && arr.indexOf(c) === -1) {
            arr.push(a, b, c);
          }
        }
    }
  })
  return arr.length / 3;
};
