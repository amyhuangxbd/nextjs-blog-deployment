const colors = ['#FAC44C', '#EF5169', '#72C264'];
const shadings = ['open', 'striped', 'solid'];
const shapes = ['tree', 'star', 'circle'];
const numbers = [1, 2, 3];
const selecteds = [true, false, false]

export const generateBaubles = () => {
    const baubles = [];
    while(baubles.length < 9) {
        const bauble = generateBauble();
        baubles.push(bauble);
        if (!areUniqueObjects(baubles)) {
            baubles.pop();
        }
    }
    return baubles;
}

const getRandomIdx = () => Math.floor(Math.random() * 3)

const generateBauble = () => {
    return {
        color: colors[getRandomIdx()],
        shading: shadings[getRandomIdx()],
        shape: shapes[getRandomIdx()],
        number: numbers[getRandomIdx()],
        selected: selecteds[getRandomIdx()],
    }
}

function areUniqueObjects(array: Record<string, any>[]) {
    const unique = new Set(array.map(item => JSON.stringify(item)));
    return unique.size === array.length;
  }
  