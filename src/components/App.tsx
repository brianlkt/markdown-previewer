// App.js
import { SetStateAction, useState } from 'react';
import Header from './Header';
import MarkdownGuide from './MarkdownGuide';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';
import '../App.css'; 
function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <Header onToggleGuide={() => setShowGuide(!showGuide)} />
      {showGuide && <MarkdownGuide />}
      <div className="Container">
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </div>
  );
}

export default App;
