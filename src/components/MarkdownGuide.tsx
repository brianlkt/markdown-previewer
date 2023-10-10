import styled from 'styled-components';

// Styled container for the Markdown guide
const GuideContainer = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  border: 1px solid #ddd;
  color: #000;
`;

// MarkdownGuide component
const MarkdownGuide = () => {
  return (
    <GuideContainer>
      <h2>Common Markdown Syntaxes:</h2>
      <ul>
        <li>
          <code># Heading 1</code> - Creates a heading.
        </li>
        <li>
          <code>**Bold Text**</code> - Makes text <strong>bold</strong>.
        </li>
        <li>
          <code>*Italic Text*</code> - Makes text <em>italic</em>.
        </li>
      </ul>
    </GuideContainer>
  );
};

export default MarkdownGuide;
