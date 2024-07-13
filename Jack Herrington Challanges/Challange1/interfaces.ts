import houses from "./houses";

interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}
type FilterHouse = (house: House) => boolean;

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: FilterHouse): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: FilterHouse): HouseWithID[];
function findHouses(
  input: string | House[],
  filter?: FilterHouse
): HouseWithID[] {
  const houses = typeof input === "string" ? JSON.parse(input) : input;
  return filter
    ? houses
        .filter(filter)
        .map((house) => ({
          ...house,
          id: Math.floor(Math.random() * 1000 + 1),
        }))
    : houses.map((house) => ({
        ...house,
        id: Math.floor(Math.random() * 1000 + 1),
      }));
}

console.log("First instance");
console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);
console.log("Second instance");
console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
