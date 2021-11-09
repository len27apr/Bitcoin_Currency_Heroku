
import styled from "styled-components/macro";

export const List=styled.ul`
padding:0;
list-style-type:none;;
margin-left:15px;
overflow:scroll;
overflow-x:hidden;
height:555px;
`

export const ListItem=styled.li`
display:flex;
margin-left:10px;

&:hover{
    background-color:blue;
}
`

export const ListItemData=styled.p`
margin-top:22px;
margin-left:10px;
`;

export const ListItemPhoto=styled.img`
width:30px;
height:30px;
margin:15px;
`;

export const ToolImage=styled.img`
width:30px;
height:30px;
margin-left:20px;
`;

export const ToolData=styled.p`
margin-right:65px;
font-size:20px;
@media(max-width:900px)
{
    margin-left:20px;
}

`;

export const Tools=styled.div`
display:flex;
border:2px solid green;
border-radius:12px;
padding:6px;
max-width:200px;
height:40px;
margin:auto;
justify-content:space-between;
align-items:center;
cursor:pointer;

@media(max-width:800px)
{
    display:none;
}
`;

export const Container=styled.div`
margin-top:40px;
max-width:300px;;
margin-left:-5px;
position:relative;
float:left;
@media(max-width:800px)
{
    display:none;
}
`;