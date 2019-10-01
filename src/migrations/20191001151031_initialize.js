let UserAccount = require("../models/UserAccount");

// TODO: omit comment for knex_migrations and knex_migrations_lock
// comment on table knex_migrations is E'@omit';
// comment on table knex_migrations_lock is E'@omit';

exports.up = knex => {
  return UserAccount(knex);
};

exports.down = knex => {
  return knex.schema
    .dropTable("UserAccount")
    .dropTable("AccountSettings")
    .dropTable("NotificationPreferences");
};
