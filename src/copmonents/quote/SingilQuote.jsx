import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getQuoteById } from "../../store/quote/quoteThunk";
import { useFetch } from "../../hooks/useFeatch";

const SingilQuote = () => {
  const dispach = useDispatch();
  const { quote } = useSelector((state) => state.quote);
  const { quoteId } = useParams();
  const { castimFetch } = useFetch();

  useEffect(() => {
    dispach(getQuoteById({ castimFetch, id: quoteId }));
  }, []);
  console.log(quote);
  return (
    <Conteiner>
      <QuoteInfo>
        <Quotext>{quote?.quote}</Quotext>
        <Author>{quote?.Author}</Author>
      </QuoteInfo>
      <div>
        <button>Load comments</button>
      </div>
    </Conteiner>
  );
};

export default SingilQuote;

const Conteiner = styled("div")(() => ({
  padding: "30px 0",
  margin: "0 auto",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
}));

const QuoteInfo = styled("div")(() => ({
  backgroundColor: "#162b2b",
  padding: "50px 20px 30px",
  borderRadius: "6px",
  width: "500px",
}));

const Quotext = styled("p")(() => ({
  fontSize: "40px",
  margin: "40px 0",
}));

const Author = styled("p")(() => ({
  fontSize: "24px",
  fontStyle: "italic",
  color: "#a1e0e0",
  textAlign: "right",
}));
