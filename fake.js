const _ = require("lodash");
const faker = require("faker/locale/uk");

const students = [];

const res = _.range(0, 100).map(el => ({
  id: faker.random.uuid(),
  name: "Програмування",
  group: "Группа 1",
  teacher: "Викладач 1"
}));
require("fs").writeFileSync("./db.json", JSON.stringify(res));
