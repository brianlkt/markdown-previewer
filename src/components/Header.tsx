import styled from 'styled-components';

// Styled container for the header
const HeaderContainer = styled.div`
  background-color: #333;
  padding: 16px;
  color: white;
  display: flex;
  align-items: center;
`;

// Styled component for the title
const Title = styled.h1`
  font-size: 24px;
  color: #fff;
`;

// Styled component for the button
const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 10px;
  margin: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

// Define the interface for HeaderProps
interface HeaderProps {
  onToggleGuide: () => void;
}

// Header functional component
const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>MarkDown App</Title>
      <Button onClick={onToggleGuide}>Guideline</Button>
    </HeaderContainer>
  );
};

export default Header;
