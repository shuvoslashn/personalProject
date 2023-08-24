const radius = [3, 1, 2, 4];

// calculating area
const calc = (radius, logic) => {
    const output = [];
    radius.forEach((e) => {
        output.push(eval(logic));
    });
    return output;
};

console.log('Area of Radius: ', calc(radius, `Math.PI * (e ** 2)`));
console.log('Circumference: ', calc(radius, `2 * Math.PI * e`));
console.log('Diameter', calc(radius, `e * 2`));
