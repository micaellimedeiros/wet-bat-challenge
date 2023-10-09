import knex, { Knex } from "knex";

exports.seed = function (knex: Knex) {
  return knex("quotes")
    .del()
    .then(function () {
      return knex("quotes").insert([
        {
          departure_location: "New York Airport",
          destination_location: "Los Angeles Airport",
          departure_date: "2023-10-15",
          return_date: "2023-10-22",
          number_of_travelers: 2,
          transportation: "Rental Car",
          contact_information: "john.doe@example.com",
        },
        {
          departure_location: "Chicago Airport",
          destination_location: "Miami Airport",
          departure_date: "2023-11-05",
          return_date: "2023-11-12",
          number_of_travelers: 4,
          transportation: "Flight",
          contact_information: "jane.smith@example.com",
        },
      ]);
    });
};
