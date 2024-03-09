export const AsideStyles = () => {
    return `
    <style>
    aside {
        display: flex ;
        flex-direction: column;
        /* gap: 1em; */
        padding: 1em;
        justify-content: center;
        align-items: center;
        text-align: justify;
    }
    h3 {
        justify-self: flex-end;
        align-self: center;
    }
    p {
        margin-top: auto; 
        margin-bottom: auto;
        text-align: justify;
    }
    </style>
    `;
};

export const AsideComponent = () => {
    return `
    <aside>
        <h3>Aside</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At commodi magnam voluptatibus qui nisi. Quasi, voluptas facilis
            vitae voluptatibus hic quis voluptate, itaque illo, excepturi tenetur doloribus! Quidem, quos itaque?</p>
    </aside>
    `;
};