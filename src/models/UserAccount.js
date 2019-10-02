const NOTIFICATION_CHANNEL = ["EMAIL", "IN_APP_PROMPT", "PUSH", "SMS"];

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
      t.unique("userAccountId")
    })
    .createTable("NotificationPreferences", t => {
      t.increments("id")
        .unsigned()
        .primary();

      t.enu("criticalAlerts", NOTIFICATION_CHANNEL).notNull();
      t.enu("leads", NOTIFICATION_CHANNEL).notNull();

      t.integer("accountSettingsId")
        .unsigned()
        .notNull();
      t.foreign("accountSettingsId").references("AccountSettings.id");
      t.unique("accountSettingsId")
    });
