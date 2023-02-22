import "./App.css";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import theme from "./theme.js";

export default function App() {
  const initText = `---
  # h1 Heading
  ## h2 Heading
  ### h3 Heading
  > Some quote
  ---
  \`\`\` js
  var foo = function (bar) {
    return bar++;
  };
  
  console.log(foo(5));
  \`\`\`

  > a blockquote here

  - a list item
  - one more list item

  **bolded text!**

  \`inline code\`

  ![Tux, the Linux mascot](https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Tux%2C_gray%EF%BC%8Fgrey_background.png/220px-Tux%2C_gray%EF%BC%8Fgrey_background.png)

  My favorite search engine is [Duck Duck Go](https://duckduckgo.com)


  `
  const [text, setText] = useState(initText);

  return (
    <div className="flex flex-col h-screen ">
      <header className="bg-cornflower-blue-600 space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <h1 className="font-semibold text-white text-xl"> Markdown Editor</h1>
      </header>
      <div className="m-7 flex-grow md:w-3xl md:mx-auto" >
        <textarea
          id="editor"
          className="outline outline-2 rounded-xl outlineColor-cornflower-blue-600 w-full p-4  sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6"
          name="textarea"
          
          rows="10"
          required
          placeholder="Type in some markdown"
          onChange={(e) => setText(e.target.value)}
        > 
        {initText}

        </textarea>
      
        <h1 className="font-bold mt-4 text-cornflower-blue-600 text-2xl">
          Output:
        </h1>

        <article id = "preview" className=" max-w-4xl m-auto prose-code prose prose-cornflower-blue p-5 ">
          <ReactMarkdown
            children={text}
            remarkPlugins={[remarkGfm]}
            skipHtml
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={theme}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </article>
      </div>
      <footer className=" bottom-0 w-full bg-cornflower-blue-600 p-4 ">
        <h1 className="font-base text-sm text-white text-center ">
          {" "}
          Built by TC, with React and TailwindCSS.
        </h1>
      </footer>
    </div>
  );
}
