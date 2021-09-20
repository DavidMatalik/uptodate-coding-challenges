exports.overlappingSpreads = function(data) {
    let neighbouringNumbers = [];

    for (let i = 0; i < data.length; i++) {
      neighbouringNumbers.push(data[i] - 1);
      neighbouringNumbers.push(data[i] + 1);
    }

    const findDuplicates = arr => 
      arr.filter((item, index) => arr.indexOf(item) !== index);
   
    const duplicates = findDuplicates(neighbouringNumbers);
    const sum = duplicates.reduce((acc, curr) => acc + curr, 0);

    return sum;   
}
