import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../api";

import SkeletonBody from "./Skeleton";

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

  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);

        const response = await api.get("/quotes");
        setQuotes(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: `Error fetching quotes: ${error}`,
          status: "error",
          isClosable: true,
        });
      } finally {
        setLoading(false);
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

      <TableContainer
        maxW={{
          base: "xs",
          md: "fit-content",
          lg: "fit-content",
        }}
      >
        <Table
          size={{
            base: "sm",
            md: "md",
            lg: "lg",
          }}
        >
          <>
            <Thead>
              <Tr>
                <Th>Departure Location</Th>
                <Th>Destination Location</Th>
                <Th>Departure Date</Th>
                <Th>Return Date</Th>
                <Th>Travelers</Th>
                <Th>
                  <div />
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {loading && quotes.length === 0 && <SkeletonBody />}

              {!loading && quotes.length === 0 ? (
                <Tr>
                  <Td textAlign="center" colSpan={5}>
                    Create a new quote
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
                    <Td>{quote.number_of_travelers}</Td>
                    <Td>
                      <Button onClick={() => navigate(`/quote/${quote.id}`)}>
                        <ExternalLinkIcon color="teal" />
                      </Button>
                    </Td>
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
