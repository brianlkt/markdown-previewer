import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Styled container for displaying the converted Markdown
const OutputContainer = styled.div`
  max-width: auto; 
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #000;
`;

// MarkdownOutput component
interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
