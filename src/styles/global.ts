import styled, {createGlobalStyle} from "styled-components";


export const Global = createGlobalStyle`
body {
    align-items: center;
    text-align: center;
}
`


export const Container = styled.div`
width: 300px;
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem;
margin: 0 auto;
background: #cecece;
align-items: center;

button {
    width: 200px;
    height: 2rem;
    background: #f0f0f8;
    font-size: 15px;
    font-weight: 700;
    border: 0;
    border-radius: 5px;
    margin: 20px 0 0 0;
    line-height: 0;
    transition: 0.4s;

    &:hover {
        filter: brightness(0.9);
    }
}
`

export const ContainerData = styled.div`
width: 90%;
padding: 2rem;
margin: 0 auto;
background: #cecece;
margin-top: 200px;
display: flex;
flex-wrap: wrap;

div {
    width: 210px;
    background: #fff;
    margin: 0 auto;
    margin-top: 10px;
}
p {
margin-top: 10px;
}
`