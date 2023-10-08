// src/components/QuoteList.tsx
import React, { useEffect, useState } from "react";
import api from "../api";

import { AtSignIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
  Divider,
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
  const toast = useToast();

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await api.get("/quotes");
        setQuotes(response.data);

        toast({
          title: "Success",
          description: "Quotes fetched successfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: "Error fetching quotes",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchQuotes();
  }, [toast]);

  return (
    <Card maxW="content">
      <CardHeader>
        <Heading color="#5f6cb0" size="md">
          <AtSignIcon h={4} color="teal" marginRight="1" />
          List quotes
        </Heading>
      </CardHeader>

      <Divider />

      <TableContainer>
        <Table size="md">
          {quotes.length > 0 ? (
            <>
              <Thead>
                <Tr>
                  <Th>Location</Th>
                  <Th>Destination</Th>
                  <Th>Departure</Th>
                  <Th>Return</Th>
                  <Th>Travelers</Th>
                  <Th>Transportation</Th>
                  <Th>Information</Th>
                </Tr>
              </Thead>
              <Tbody>
                {quotes.map((quote) => (
                  <Tr color="gray.600" key={quote.id}>
                    <Td>{quote.departure_location}</Td>
                    <Td>{quote.destination_location}</Td>
                    <Td>
                      {new Date(quote.departure_date).toLocaleDateString()}
                    </Td>
                    <Td>{new Date(quote.return_date).toLocaleDateString()}</Td>
                    <Td>{quote.number_of_travelers}</Td>
                    <Td>{quote.transportation}</Td>
                    <Td>{quote.contact_information}</Td>
                  </Tr>
                ))}
              </Tbody>
            </>
          ) : (
            <Text color="gray.500">No quotes found</Text>
          )}
        </Table>
      </TableContainer>
      {/* <Box>
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
      </Box> */}
    </Card>
  );
};

export default QuoteList;
