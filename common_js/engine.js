let passedName = "";
let passedModel = "";
const getName = (name) => {
  passedName = name;
  return name;
};
const getModel = (model) => {
  passedModel = model;
  return model;
};
const getEngine = () => {
  return passedName + " " + passedModel;
};

module.exports = { getEngine, getName, getModel };
