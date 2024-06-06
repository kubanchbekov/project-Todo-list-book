import styled from "styled-components";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const QuoteItem = ({ quote, author, id }) => {
  const navigate = useNavigate();

  const navigateToQuote = () => {
    navigate(`${id}`);
  };
  return (
    <Container>
      <div>
        <QuoteText>{quote}</QuoteText>
        <AuthorText>{author}</AuthorText>
      </div>

      <div>
        <Button onClick={navigateToQuote}>View Fullscreen</Button>
      </div>
    </Container>
  );
};

export default QuoteItem;

const Container = styled.div`
  background-color: #c2e7f0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const QuoteText = styled.p`
  font-size: 24px;
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-wrap: nowrap;
`;

const AuthorText = styled.i`
  color: gray;
  font-size: 20px;
`;
