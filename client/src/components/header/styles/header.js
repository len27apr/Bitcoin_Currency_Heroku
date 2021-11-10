import styled from 'styled-components/macro';

export const Image = styled.img`
 ${({ height }) => height && `height:${height};`}   
 ${({ width }) => width && `width:${width};`}
 ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius};`}

 @media(max-width:800px)
{
    ${({resize})=> resize && 'width:110px;' }
    ${({resize})=> resize && 'height: 36px;' }
}
`;

export const SearchIcon = styled(Image)`
filter: brightness(0) invert(1);
padding:6px;


`;

export const Select = styled.select`
border:0;
padding:10px;
color:blue;
width:100%;

`;

export const SearchInput = styled.input`
border:0;
width:100%;
height:40px;
border-radius:10px;

`;

export const Option = styled.option`
margin-top:0;
`;

export const Navbar = styled.div`
width:55px;
height:52px;
border:2px solid blue;
display:flex;
padding:4px;
flex-direction:column;

display:none;

@media(max-width:800px)
{
    width:27px;
    height:25px;
    display:block;
    margin-right:24px;
}

`;

export const NavbarItem = styled.div`
width:45px;
height:5px;
background-color: blue;
margin:8px;

@media(max-width:800px)
{
    width:22px;
    height:2.6px;
    display:block;
    margin:4px;
}
`;

export const Group = styled.div`
    padding:2px;
    border:3px solid black;
    border-radius:20px;
    display:flex;
    max-width:250px;
    height:40px;
    ${({ marginLeft }) => marginLeft && `margin-left:${marginLeft}`};

    @media(max-width:800px)
    {
      display:none;
      :first-of-type
      {
          display:block;
          margin-left:50px;
          margin-top:30px;
          display:flex;
          m
      }
      :last-of-type
      {
        display:block;
        margin-top:30px;
        margin-right:50px;
        margin-left:150px;
        display:flex;
        
      }
    }
`;


export const Container = styled.div`
    display:flex;
    max-width:100%;
    margin:auto;    
    justify-content:space-between;
    padding:9px;
    >${Group}:first-of-type{
           padding:none;
            border:0;
    }
    >${Group}:last-of-type{
        padding:2px;
        border:0;
        width:140px;
    }
        
`;