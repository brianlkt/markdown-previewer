import styled from 'styled-components';

// Styled container for the textarea
const InputContainer = styled.div`
    display: flex;
  align-items: center;
    margin: 0 auto;
`;

// Styled textarea for Markdown input
const StyledTextArea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 20vh;
  width:100%;
`;

// MarkdownInput component
interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea
        placeholder="Type your Markdown here..."
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default MarkdownInput;
