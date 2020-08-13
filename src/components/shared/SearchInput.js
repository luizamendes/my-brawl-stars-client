import styled from "styled-components";
import { colors } from "../../colors";

const SearchInput = styled.input`
  width: 80%;
  /* max-width: 400px; */
  background: white;
  border: 2px solid ${colors.blue};
  padding: 2rem;
  box-sizing: border-box;
  color: black;
  font-size: 1.5em;
  border-radius: 10px;
`;

export { SearchInput };
