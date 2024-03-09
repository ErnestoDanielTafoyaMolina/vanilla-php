export const HeaderStyles = () => {
    return `
    <style>

        header {
            background-color: black;
            color: aliceblue;
            padding: 5px;
        }
        header > nav {
            padding: 1em;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        header > nav > ul {
            list-style: none;
            display: flex;
            gap:1em;
        }
        
        header > nav > ul > li > a {
            text-decoration: none;
            color: aliceblue;
            transition: all 0.5s ease;
            padding:.5em;
            border-radius: 5px;
        }
        header > nav > ul > li > a:hover {
            background-color: aliceblue;
            color: black;
        }
    </style>
    
    `;
}
export const HeaderComponent = () => {
    return `
    <header>
        <nav>
            <img src="" alt="logo">
            <ul>
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
                <li><a href="#">item 3</a></li>
            </ul>
        </nav>
    </header>
    `;
};