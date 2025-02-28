import { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const IsolatedHTML = ({ htmlString }: { htmlString: string }) => {
  const shadowHostRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);
  const rootRef = useRef<ReactDOM.Root | null>(null);

  useEffect(() => {
    const shadowHost = shadowHostRef.current;

    if (shadowHost && !shadowRootRef.current) {
      shadowRootRef.current = shadowHost.attachShadow({ mode: "open" });

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.snow.css";
      shadowRootRef.current.appendChild(link);

      const style = document.createElement("style");
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,700;1,700&display=swap');
      
        .ql-editor {
          padding: 0 !important;
        }
      
        .ql-editor * {
          font-family: 'Mulish', sans-serif;
          font-size: 16px;
        }
      
        .ql-editor p {
          font-size: 1.4rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
      
        .ql-editor h1, .ql-editor h2, .ql-editor h3, 
        .ql-editor h4, .ql-editor h5, .ql-editor h6 {
          font-weight: 700;
          font-style: italic;
          margin-bottom: 1rem;
          margin-top: 1.5rem;
        }
      
        .ql-editor h1 { font-size: 2.5rem; }
        .ql-editor h2 { font-size: 2rem; }
        .ql-editor h3 { font-size: 1.75rem; }
        .ql-editor h4 { font-size: 1.5rem; }
        .ql-editor h5 { font-size: 1.25rem; }
        .ql-editor h6 { font-size: 1.1rem; }
      
        .ql-editor ol {
        
          padding-left: 20px;
        }
        
        .ql-editor li {
          font-size: 1.2rem;
        }
          .ql-editor li[data-list="ordered"]{
            list-style-type: decimal;
          }
             .ql-editor li[data-list="bullet"]{
            list-style-type: disc;
          }
      
        .ql-editor ul {
        
          padding-left: 20px;
        }
      
        .ql-editor .ql-align-left, 
        .ql-editor .ql-align-center, 
        .ql-editor .ql-align-right {
          display: flex;
          flex-direction: column;
        }
      
        .ql-editor .ql-align-left {
          justify-content: start !important;
          text-align: left !important;
        }
      
        .ql-editor .ql-align-center {
          justify-content: center !important;
          text-align: center !important;
        }
      
        .ql-editor .ql-align-right {
          justify-content: flex-end;
          text-align: right !important;
        }
    
       
        .ql-editor img { width: 70%; height: 600px; margin: 0 auto }

        
        .ql-video {
          width: 70%;
          height: 500px;
          margin: 0 auto;
        }
      
        .ql-editor .ql-align-center ol {
          display: flex;
          flex-direction: column;
          text-align: center;
        }
      
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .ql-editor h1 { font-size: 2.2rem; }
          .ql-editor h2 { font-size: 1.8rem; }
          .ql-editor h3 { font-size: 1.6rem; }
          .ql-editor h4 { font-size: 1.4rem; }
          .ql-editor h5 { font-size: 1.2rem; }
          .ql-editor h6 { font-size: 1rem; }
          .ql-editor p, .ql-editor li { font-size: 1.2rem; }
          .ql-video {
       
          width: 100%;
          height: 415px;
          margin: 0 auto;
        }
           .ql-editor img { 
            width: 100%; 
            height: auto; 
            margin: 0 auto; 
          }
        }
      
        @media (max-width: 768px) {
          .ql-editor h1 { font-size: 2rem; }
          .ql-editor h2 { font-size: 1.6rem; }
          .ql-editor h3 { font-size: 1.4rem; }
          .ql-editor h4 { font-size: 1.3rem; }
          .ql-editor h5 { font-size: 1.1rem; }
          .ql-editor h6 { font-size: 1rem; }
          .ql-editor p, .ql-editor li { font-size: 1.1rem; }
          .ql-video {
       
          width: 100%;
          height: 415px;
          margin: 0 auto;
        }
           .ql-editor img { 
            width: 100%; 
            height: auto; 
            margin: 0 auto;
          }
         
        }
      
        @media (max-width: 480px) {
          .ql-editor h1 { font-size: 1.8rem; }
          .ql-editor h2 { font-size: 1.4rem; }
          .ql-editor h3 { font-size: 1.3rem; }
          .ql-editor h4 { font-size: 1.2rem; }
          .ql-editor h5 { font-size: 1rem; }
          .ql-editor h6 { font-size: 0.9rem; }
          .ql-editor p, .ql-editor li { font-size: 1rem; }
          .ql-video {
          width: 100%;
          height: 300px;
          margin: 0 auto;
        }
            .ql-editor img { 
            width: 100%; 
            height: auto; 
            margin: 0 auto;
          }
         
        }
      `;
      shadowRootRef.current.appendChild(style);
    }

    const shadowRoot = shadowRootRef.current;

    if (shadowRoot && !rootRef.current) {
      rootRef.current = ReactDOM.createRoot(shadowRoot);
    }

    const root = rootRef.current;

    if (root) {
      root.render(
        <div
          className="ql-editor"
          dangerouslySetInnerHTML={{ __html: htmlString }}
        />
      );
    }
  }, [htmlString]);

  return <div ref={shadowHostRef} />;
};

export default IsolatedHTML;
