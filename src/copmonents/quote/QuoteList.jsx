import styled from "styled-components";
import QuoteItem from "./QuoteItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getQuotes } from "../../store/quote/quoteThunk";
import { useFetch } from "../../hooks/useFeatch";

const QuoteList = () => {
  const { quotes } = useSelector((state) => state.quote);

  const { castimFetch } = useFetch();

  const dispach = useDispatch();
  useEffect(() => {
    dispach(getQuotes(castimFetch));
  }, []);

  console.log(quotes);

  return (
    <QuoteContainer>
      {quotes.map((item) => (
        <QuoteItem key={item.id} {...item} />
      ))}
    </QuoteContainer>
  );
};

export default QuoteList;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
