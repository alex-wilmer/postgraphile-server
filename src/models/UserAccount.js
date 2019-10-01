module.exports = knex =>
  knex.schema.createTable("UserAccount", t => {
    t.increments("id")
      .unsigned()
      .primary();

    t.dateTime("createdAt").notNull();
    t.dateTime("updatedAt").nullable();
    t.dateTime("deletedAt").nullable();
    t.string("firstName").notNull();
    t.string("lastName").notNull();
    t.string("email").notNull();
    t.date("dateOfBirth");
    t.json("phone");

    // TODO: phone
    // TODO: altPhone
    // TODO: accountSettings
  });
