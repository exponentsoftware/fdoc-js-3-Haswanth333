const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (array) => {
  let result = array.map((arr) => {
    const [name, skills, scores] = arr;
    return {
      name,
      skills,
      scores,
    };
  });
  return result;
};

console.log(convertArrayToObject(students), "convert");
