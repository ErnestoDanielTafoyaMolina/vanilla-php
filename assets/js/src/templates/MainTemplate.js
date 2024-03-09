import { ArticleComponent } from "./ArticleTemplate.js";

export const MainStyles = () => {
return `
    <style>
        main {
            display: flex;
            gap:1em;
            flex-direction: column;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding:1em 0;
        }
        article {
            display: flex;
            flex-direction: column;
            gap: 1em;
            padding: 0 1em;
        }
        h2 {
            align-self: flex-start;
        }
        p {
            text-align: justify;
        }
        btn-hello {
            align-self: flex-end;
        }
    </style>
`;
};

export const MainComponent = () => {
    return `
        <main>
            <h1>First page on php</h1>
            ${ ArticleComponent() }
            ${ ArticleComponent() }
            ${ ArticleComponent() }
            ${ ArticleComponent() }
            ${ ArticleComponent() }
        </main>
    `;
};
