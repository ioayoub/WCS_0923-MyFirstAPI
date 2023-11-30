const tables = require("../tables");

const browse = async () => {
  try {
    const things = await tables.thing.readAll();

    console.info(things);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { browse };
