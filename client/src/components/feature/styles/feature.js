import styled from 'styled-components/macro';

export const HeaderText=styled.h2`
@media(max-width:800px)
{
    font-size:15px;
}
`;

export const Image=styled.img`
width:50px;
height:50px;
padding:4px;
margin:10px;
`;

export const Select=styled.select`
height:40px;
width:125px;
margin:20px;
border-radius:10px;
${({bgcolor})=> bgcolor && `background-color:${bgcolor}`};
`;

export const Option=styled.option`
`;

export const Group=styled.div`
display:flex;
padding:9px;
max-width:500px;
margin-left:40px;

`;

export const Frame=styled.div`
display:flex;
justify-content:space-between;
margin-bottom: 100px;
:first-of-type{
    margin-top:-20px;
}
:last-of-type{
    margin-top:-50px;
    margin-left:20px;
    padding-left:10px;
    margin-right:-20px;
}

>${Group}:last-of-type{
    margin-right:0px;
    justify-content:space-between;
}
`;

export const Container=styled.div`
display:flex;
flex-direction:column;
margin-left:290px;
margin-top:40px;

@media(max-width:800px)
{
    margin-top:120px;
    margin-left:0px;
    
    >${Frame}:last-of-type{
        margin-right:-20px;
    }

}`;