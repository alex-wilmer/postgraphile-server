let E = ["EMAIL", "IN_APP_PROMPT", "PUSH", "SMS"];

module.exports = knex =>
  knex.schema
    .createTable("NotificationPreferences", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.enu("criticalAlerts", E).notNull();
      t.enu("leads", E).notNull();
    })
    .createTable("AccountSettings", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.integer("notificationPreferencesId").unsigned().notNull();
      t.foreign("notificationPreferencesId").references("NotificationPreferences.id");
    })
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
      t.date("dateOfBirth");
      t.json("phone")
      t.json("altPhone")
      t.integer("accountSettingsId").unsigned();
      t.foreign("accountSettingsId").references("AccountSettings.id");
    });
