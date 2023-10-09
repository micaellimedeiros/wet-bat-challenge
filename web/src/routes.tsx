import { Route, Routes as RoutesLib } from "react-router-dom";

import QuoteDetail from "./components/QuoteDetail";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";

const Routes = () => (
  <RoutesLib>
    <Route path="/" element={<QuoteList />} />
    <Route path="/create" element={<QuoteForm />} />
    <Route path="/quote/:id" element={<QuoteDetail />} />
  </RoutesLib>
);

export default Routes;
