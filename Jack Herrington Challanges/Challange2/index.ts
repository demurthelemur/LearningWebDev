//Let's challenge ourselves to re-implement forEach, map and filter using reduce, and to do it in a type safe manner using Typescript.

// forEach
function myForEach<T>(items: T[], callback: (item: T) => void): void {
  items.reduce((a, item) => {
    callback(item);
    return undefined;
  }, undefined);
}

myForEach(["a", "b", "c"], (item) => {
  console.log(`foreach ${item}`);
});

//map
function myMap<T>(items: T[], callback: (item: T) => T): T[] {
  let returnArray: T[] = [];
  items.reduce((a, item) => {
    item = callback(item);
    returnArray.push(item);
    return undefined;
  }, undefined);
  return returnArray;
}

console.log(
  myMap([1, 2, 3], (item) => {
    return item + 5;
  })
);

function myFilter<T>(items: T[], callback: (item: T) => T | undefined): T[] {
  let returnArray: T[] = [];
  items.reduce((a, item) => {
    let v = callback(item);
    v ? returnArray.push(v) : "";
    return undefined;
  }, undefined);
  return returnArray;
}

console.log(
  myFilter(["a", "b", "c", "a"], (item) => {
    return item === "a" ? item : undefined;
  })
);
