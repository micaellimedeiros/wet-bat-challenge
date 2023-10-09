import React, { useState } from "react";
import api from "../api";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import { ArrowRightIcon } from "@chakra-ui/icons";

const QuoteForm: React.FC = () => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);

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
      setLoading(true);

      await api.post("/quotes", quoteData);

      setQuoteData({
        departure_location: "",
        destination_location: "",
        departure_date: "",
        return_date: "",
        number_of_travelers: 0,
        transportation: "",
        contact_information: "",
      });

      toast({
        title: "Success",
        description: "Quote created successfully",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Error creating quote",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <Heading color="#5f6cb0" size="md">
            <ArrowRightIcon h={4} color="teal" marginRight="1" />
            Quick quote
          </Heading>
        </CardHeader>

        <Divider />

        <CardBody>
          <SimpleGrid columns={2} spacing={3}>
            <FormControl>
              <Textarea
                resize="none"
                variant="filled"
                size="sm"
                value={quoteData.departure_location}
                placeholder="From"
                onChange={(e) =>
                  setQuoteData({
                    ...quoteData,
                    departure_location: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl>
              <Textarea
                resize="none"
                variant="filled"
                size="sm"
                placeholder="Destination"
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
              <Input
                type="date"
                variant="filled"
                height="80px"
                placeholder="Depart date"
                value={quoteData.departure_date}
                onChange={(e) =>
                  setQuoteData({
                    ...quoteData,
                    departure_date: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl>
              <Input
                type="date"
                variant="filled"
                height="80px"
                placeholder="Return date"
                value={quoteData.return_date}
                onChange={(e) =>
                  setQuoteData({
                    ...quoteData,
                    return_date: e.target.value,
                  })
                }
              />
            </FormControl>

            <FormControl>
              <Input
                type="number"
                variant="filled"
                height="80px"
                placeholder="People"
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
              <Textarea
                resize="none"
                variant="filled"
                size="sm"
                placeholder="Transportation"
                value={quoteData.transportation}
                onChange={(e) =>
                  setQuoteData({ ...quoteData, transportation: e.target.value })
                }
              />
            </FormControl>

            <FormControl>
              <Textarea
                resize="none"
                variant="filled"
                size="sm"
                placeholder="Name"
                value={quoteData.contact_information}
                onChange={(e) =>
                  setQuoteData({
                    ...quoteData,
                    contact_information: e.target.value,
                  })
                }
              />
            </FormControl>

            <Button
              isLoading={loading}
              loadingText="Creating..."
              type="submit"
              colorScheme="teal"
              borderRadius="20px"
            >
              Create a quote
            </Button>
          </SimpleGrid>
        </CardBody>
      </Card>
    </form>
  );
};

export default QuoteForm;
