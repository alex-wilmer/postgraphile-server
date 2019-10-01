let E = ["EMAIL", "IN_APP_PROMPT", "PUSH", "SMS"];

module.exports = knex =>
  knex.schema
    .createTable("UserAccount", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.dateTime("createdAt").notNull();
      t.dateTime("updatedAt").nullable();
      t.dateTime("deletedAt").nullable();
      t.string("firstName").notNull();
      t.string("lastName").notNull();
      t.string("email").notNull();
      t.date("dateOfBirth").nullable();
      t.json("phone").nullable();
      t.json("altPhone").nullable();
    })
    .createTable("AccountSettings", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.integer("userAccountId")
        .unsigned()
        .notNull();
      t.foreign("userAccountId").references("UserAccount.id");
    })
    .createTable("NotificationPreferences", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.enu("criticalAlerts", E).notNull();
      t.enu("leads", E).notNull();

      t.integer("accountSettingsId")
        .unsigned()
        .notNull();
      t.foreign("accountSettingsId").references("AccountSettings.id");
    });
