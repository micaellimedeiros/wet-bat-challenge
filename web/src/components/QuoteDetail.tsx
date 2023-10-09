import React, { useEffect, useState, useCallback } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { AtSignIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  SimpleGrid,
  Skeleton,
  Text,
  Input,
  useToast,
  Box,
} from "@chakra-ui/react";

import api from "../api";

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

const QuoteDetail: React.FC = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await api.get(`/quotes/${id}`);
        setQuote(response.data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error fetching quote",
          status: "error",
          isClosable: true,
        });
      }
    };

    fetchQuote();
  }, [toast, id]);

  const handleDelete = useCallback(async () => {
    try {
      setLoading(true);

      await api.delete(`/quotes/${id}`);
      toast({
        title: "Success",
        description: "Quote deleted",
        status: "success",
        isClosable: true,
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Error deleting quote",
        status: "error",
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }, [toast, id, navigate]);

  return (
    <Card maxW="fit-content">
      <CardHeader display="flex" justifyContent="space-between">
        <Heading color="#5f6cb0" size="md">
          <AtSignIcon h={4} color="teal" marginRight="1" />
          Quote Detail
        </Heading>

        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Back
        </Button>
      </CardHeader>

      <Divider />

      <CardBody>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
          {!quote ? (
            <>
              <Skeleton>
                <Text>Departure Location</Text>
                <Input isReadOnly size="sm" />
              </Skeleton>
            </>
          ) : (
            <>
              <Box>
                <Text mb="8px" color="gray.500">
                  Departure Location
                </Text>
                <Input isReadOnly size="sm" value={quote.departure_location} />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Destination Location
                </Text>
                <Input
                  isReadOnly
                  size="sm"
                  value={quote.destination_location}
                />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Departure Date
                </Text>
                <Input
                  isReadOnly
                  size="sm"
                  value={new Date(quote.departure_date).toLocaleDateString()}
                />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Return Date
                </Text>
                <Input
                  isReadOnly
                  size="sm"
                  value={new Date(quote.return_date).toLocaleDateString()}
                />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Number of Travelers
                </Text>
                <Input isReadOnly size="sm" value={quote.number_of_travelers} />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Transportation
                </Text>
                <Input isReadOnly size="sm" value={quote.transportation} />
              </Box>

              <Box>
                <Text mb="8px" color="gray.500">
                  Contact Information
                </Text>
                <Input isReadOnly size="sm" value={quote.contact_information} />
              </Box>
            </>
          )}
        </SimpleGrid>

        <Box display="flex" justifyContent="flex-end">
          <Button
            colorScheme="red"
            onClick={() => handleDelete()}
            isLoading={loading}
            marginTop="4"
            size="sm"
          >
            Delete quote
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
};

export default QuoteDetail;
