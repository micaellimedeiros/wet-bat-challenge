import React from "react";
import { useParams } from "react-router-dom";

const QuoteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Quote Details</h2>
      <p>Quote ID: {id}</p>
    </div>
  );
};

export default QuoteDetail;
