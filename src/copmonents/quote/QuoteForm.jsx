import styled from "styled-components";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFeatch";
import { addQuote } from "../../store/quote/quoteThunk";

const QuoteForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { castimFetch } = useFetch();

  const [authorText, setAuthorText] = useState("");
  const [quoteText, setQuoteText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newQuote = {
      author: authorText,
      quote: quoteText,
    };

    dispatch(addQuote({ castimFetch, quotesData: newQuote, navigate }));
  };

  return (
    <Container onSubmit={submitHandler}>
      <Input
        label={"Author"}
        onChange={(e) => setAuthorText(e.target.value)}
        value={authorText}
      />
      <Input
        label={"Text"}
        onChange={(e) => setQuoteText(e.target.value)}
        value={quoteText}
      />
      <ButtonContainer>
        <Button type="submit">Add Quote</Button>
      </ButtonContainer>
    </Container>
  );
};

export default QuoteForm;

const Container = styled.form`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  width: 600px;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  text-align: end;
`;
