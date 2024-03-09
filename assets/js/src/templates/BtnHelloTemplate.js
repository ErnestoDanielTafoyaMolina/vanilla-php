export const BtnHelloStyles = () => {
    return `
    <style>
        button {
            padding:10px 20px;
            background-color: rgb(0,128,0);
            border:none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        button:active {
            background-color: rgba(0,128,0,0.9);
        }
    </style>
    `
}
export const BtnHelloTemplate = ( title='' ) => {
    return `
    <button> ${ title } </button>
    `;
};