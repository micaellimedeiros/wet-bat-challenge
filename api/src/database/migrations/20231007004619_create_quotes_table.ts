import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('quotes', (table) => {
    table.increments('id').primary();
    table.string('departure_location');
    table.string('destination_location');
    table.date('departure_date');
    table.date('return_date');
    table.integer('number_of_travelers');
    table.string('transportation');
    table.string('contact_information');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('quotes');
}
