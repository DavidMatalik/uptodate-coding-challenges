exports.botProtection = function(data) {
    let sequences = [];
    let currentSequence = "";

    for (let i = 0; i < data.length - 2; i++) {
      currentSequence = data[i] + data[i + 1] + data[i + 2];
      sequences.push(currentSequence);
    }

    const hasDuplicates = arr => {
      return new Set(arr).size !== arr.length;
    }

    return hasDuplicates(sequences);
}