import styled from 'styled-components/macro';

export const Image = styled.img`
 ${({ height }) => height && `height:${height};`}   
 ${({ width }) => width && `width:${width};`}
 ${({ borderRadius }) => borderRadius && `border-radius:${borderRadius};`}
 
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
margin-top:-7px;
display:none;

@media(max-width:800px)
{
    display:block;
    margin-top:30px;
    margin-left:40px;
    position:absolute;
}

`;

export const NavbarItem = styled.div`
width:45px;
height:5px;
background-color: blue;
margin:8px;
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
      :first-of-type{
          display:block;
          margin-left:27%;
          margin-top:30px;
      }
      :last-of-type{
        display:block;
        margin-top:20px;
        margin-right:30px;
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