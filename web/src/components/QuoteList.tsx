import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api";

import { AtSignIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  Divider,
  Button,
  SkeletonCircle,
  SkeletonText,
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
  const navigate = useNavigate();

  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await api.get("/quotes");
        setQuotes(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error fetching quotes",
          status: "error",
          isClosable: true,
        });
      }
    };

    fetchQuotes();
  }, [toast]);

  return (
    <Card maxW="fit-content">
      <CardHeader display="flex" justifyContent="space-between">
        <Heading color="#5f6cb0" size="md">
          <AtSignIcon h={4} color="teal" marginRight="1" />
          List quotes
        </Heading>

        <Button colorScheme="teal" onClick={() => navigate("/create")}>
          New Quote
        </Button>
      </CardHeader>

      <Divider />

      <TableContainer>
        <Table size="lg">
          <>
            <Thead>
              <Tr>
                <Th>Location</Th>
                <Th>Destination</Th>
                <Th>Departure</Th>
                <Th>Return</Th>
                <Th>
                  <div />
                </Th>
                {/* <Th>Travelers</Th>
                  <Th>Transportation</Th>
                  <Th>Information</Th> */}
              </Tr>
            </Thead>

            <Tbody>
              {quotes.length === 0 ? (
                <Tr>
                  <Td>
                    <SkeletonText noOfLines={1} spacing="4" />
                  </Td>
                  <Td>
                    <SkeletonText noOfLines={1} spacing="4" />
                  </Td>
                  <Td>
                    <SkeletonText noOfLines={1} spacing="4" />
                  </Td>
                  <Td>
                    <SkeletonText noOfLines={1} spacing="4" />
                  </Td>
                  <Td>
                    <SkeletonCircle size="10" />
                  </Td>
                </Tr>
              ) : (
                quotes.map((quote) => (
                  <Tr color="gray.500" key={quote.id}>
                    <Td>{quote.departure_location}</Td>
                    <Td>{quote.destination_location}</Td>
                    <Td>
                      {new Date(quote.departure_date).toLocaleDateString()}
                    </Td>
                    <Td>{new Date(quote.return_date).toLocaleDateString()}</Td>
                    <Td>
                      <Button onClick={() => navigate(`/quote/${quote.id}`)}>
                        <ExternalLinkIcon color="teal" />
                      </Button>
                    </Td>
                    {/* <Td>{quote.number_of_travelers}</Td>
                      <Td>{quote.transportation}</Td>
                      <Td>{quote.contact_information}</Td> */}
                  </Tr>
                ))
              )}
            </Tbody>
          </>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default QuoteList;
