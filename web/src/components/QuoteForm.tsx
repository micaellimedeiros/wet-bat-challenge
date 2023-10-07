// src/components/QuoteForm.tsx
import React, { useState } from "react";
import api from "../api";

import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const QuoteForm: React.FC = () => {
  const [quoteData, setQuoteData] = useState({
    departure_location: "",
    destination_location: "",
    departure_date: "",
    return_date: "",
    number_of_travelers: 0,
    transportation: "",
    contact_information: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(quoteData);
      const request = await api.post("/quotes", quoteData);

      console.log("Quote:", request.data);

      // setQuoteData({
      //   departure_location: "",
      //   destination_location: "",
      //   departure_date: "",
      //   return_date: "",
      //   number_of_travelers: 0,
      //   transportation: "",
      //   contact_information: "",
      // });
      alert("Quote submitted successfully!");
    } catch (error) {
      console.log("Error submitting quote:", error);
      alert("An error occurred while submitting the quote.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl>
          <FormLabel>departure_location</FormLabel>
          <Input
            type="text"
            value={quoteData.departure_location}
            onChange={(e) =>
              setQuoteData({ ...quoteData, departure_location: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>destination_location</FormLabel>
          <Input
            type="text"
            value={quoteData.destination_location}
            onChange={(e) =>
              setQuoteData({
                ...quoteData,
                destination_location: e.target.value,
              })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Departure Date</FormLabel>
          <Input
            type="date"
            value={quoteData.departure_date}
            onChange={(e) =>
              setQuoteData({ ...quoteData, departure_date: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Return Date</FormLabel>
          <Input
            type="date"
            value={quoteData.return_date}
            onChange={(e) =>
              setQuoteData({ ...quoteData, return_date: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Number of Travelers</FormLabel>
          <Input
            type="number"
            value={quoteData.number_of_travelers}
            onChange={(e) =>
              setQuoteData({
                ...quoteData,
                number_of_travelers: Number(e.target.value),
              })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Transportation</FormLabel>
          <Input
            type="text"
            value={quoteData.transportation}
            onChange={(e) =>
              setQuoteData({ ...quoteData, transportation: e.target.value })
            }
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contact Info</FormLabel>
          <Input
            type="text"
            value={quoteData.contact_information}
            onChange={(e) =>
              setQuoteData({
                ...quoteData,
                contact_information: e.target.value,
              })
            }
          />
        </FormControl>

        <Button type="submit" colorScheme="green">
          Submit Quote
        </Button>
      </Stack>
    </form>
  );
};

export default QuoteForm;
