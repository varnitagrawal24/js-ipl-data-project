function matchesPerYear(matches, _deliveries) {
  const result = {};
  for (const match of matches) {
    if (result[match.season]) {
      result[match.season] = result[match.season] + 1;
    } else {
      result[match.season] = 1;
    }
  }

  return result;
}

module.exports = matchesPerYear;
