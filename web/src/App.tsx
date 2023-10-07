import React from "react";

import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <QuoteForm />
      <QuoteList />
    </Layout>
  );
};

export default App;
