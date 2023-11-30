const AbstractManager = require("./AbstractManager");

class ThingManager extends AbstractManager {
  constructor() {
    super({ table: "thing" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }
}

module.exports = ThingManager;
