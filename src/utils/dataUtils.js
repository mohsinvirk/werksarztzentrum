export const dummyNodes = {
  "1382b6993e9f270cb1c29833be3f5750": {
    name: "root",
    parentID: null,
    children: [
      "9b6739960c1ac83251046da2c718019b",
      "147d0ef33fe657ce53a83de6a630473d",
      "a55cfa9e1bf87138edd25c4b1553104d",
      "5f2b4d35489a8617e574060b19b7cad9",
    ],
  },
  "9b6739960c1ac83251046da2c718019b": {
    name: "apps",
    parentID: "1382b6993e9f270cb1c29833be3f5750",
    children: [],
  },
  "147d0ef33fe657ce53a83de6a630473d": {
    name: "pictures",
    parentID: "1382b6993e9f270cb1c29833be3f5750",
    children: [],
  },
  a55cfa9e1bf87138edd25c4b1553104d: {
    name: "videos",
    parentID: "1382b6993e9f270cb1c29833be3f5750",
    children: [],
  },
  "5f2b4d35489a8617e574060b19b7cad9": {
    name: "docs",
    parentID: "1382b6993e9f270cb1c29833be3f5750",
    children: ["2d03459789f153918dfc0be413fe9987"],
  },
  "2d03459789f153918dfc0be413fe9987": {
    name: "work",
    parentID: "5f2b4d35489a8617e574060b19b7cad9",
    children: [],
  },
};

const search = (arr, entry) => {
  let no = 0;

  arr[entry.parentID].children.forEach((elementId) => {
    if (
      arr[elementId].name.includes(entry.name) &&
      arr[elementId].type === entry.type
    ) {
      console.log(elementId);
      no++;
    }
  });
  return no;
};

export const AddEntry = (data, newEntry) => {
  let no = search(data, newEntry);

  if (no > 0) {
    newEntry.name = `${newEntry.name}_${no}`;
  }
  newEntry.children = [];
  data[newEntry.id] = newEntry;
  data[newEntry.parentID].children.push(newEntry.id);

  return { ...data };
};

export const DeleteEntry = (data, entryID) => {
  const entry = data[entryID];

  if (entry?.children?.length) {
    entry.children.forEach((id) => {
      DeleteEntry(data, id);
    });
  }

  let parentID = data?.[entryID]?.parentID;

  let index = data?.[parentID]?.children?.indexOf(entryID);

  if (index !== -1) data?.[parentID]?.children?.splice(index, 1);
  delete data[entryID];

  return { ...data };
};

const cloneObj = (obj) => {
  if (Object(obj) !== obj) return obj;
  else if (Array.isArray(obj)) return obj.map(cloneObj);

  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, cloneObj(v)])
  );
};

export const generateTreeFromList = (_list) => {
  const root = [];

  let list = cloneObj(_list);

  Object.keys(list).forEach((nodeID) => {
    if (!list[nodeID].parentID) return root.push({ nodeID, ...list[nodeID] });
    let parentID = list[nodeID].parentID;

    if (list[parentID]) {
      let index = list[parentID].children.indexOf(nodeID);
      if (index !== -1) list[parentID].children.splice(index, 1);

      list[parentID].children.push({ nodeID, ...list[nodeID] });
    }
  });
  return root;
};
