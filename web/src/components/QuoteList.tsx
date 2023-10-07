// src/components/QuoteList.tsx
import React, { useEffect, useState } from "react";
import api from "../api";

import {
  Box,
  Text,
  UnorderedList,
  Divider,
  Stack,
  Input,
} from "@chakra-ui/react";

interface Quote {
  id: number;
  departure_location: string;
  destination_location: string;
  departure_date: string;
  return_date: string;
  number_of_travelers: number;
  transportation: string;
  contact_information: string;
}

const QuoteList: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await api.get("/quotes");
        setQuotes(response.data);

        console.log("Quotes:", response.data);
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <Box>
        <Text fontSize="2xl">Quotes</Text>
        <Divider />
        <UnorderedList>
          {quotes.map((quote) => (
            <Stack key={quote.id} spacing={3}>
              <Text mb="8px" color="gray.500">
                Departure location
              </Text>
              <Input isReadOnly value={quote.departure_location} />

              <Text mb="8px" color="gray.500">
                Destination location
              </Text>
              <Input isReadOnly value={quote.destination_location} />

              <Text mb="8px" color="gray.500">
                Departure date
              </Text>
              <Input isReadOnly value={quote.departure_date} />

              <Text mb="8px" color="gray.500">
                Return date
              </Text>
              <Input isReadOnly value={quote.return_date} />

              <Text mb="8px" color="gray.500">
                Number of travelers
              </Text>
              <Input isReadOnly value={quote.number_of_travelers} />

              <Text mb="8px" color="gray.500">
                Transportation
              </Text>
              <Input isReadOnly value={quote.transportation} />

              <Text mb="8px" color="gray.500">
                Contact information
              </Text>
              <Input isReadOnly value={quote.contact_information} />
            </Stack>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
};

export default QuoteList;
