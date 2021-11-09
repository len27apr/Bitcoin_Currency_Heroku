import React,{useState} from 'react';

import {Container,Image, Group, Select, Option, SearchIcon, SearchInput, Navbar, NavbarItem} from './styles/header';

export default function Header({children,...restProps})
{
    return <Container>
        {children}
    </Container>
}

Header.Group=function HeaderGroup({children, ...restProps})
{
   return <Group {...restProps}>
      {children}
   </Group>
}

Header.Image=function HeaderImage({children, ...restProps})
{
    return <Image {...restProps} />
}

Header.Dropdown=function HeaderDropdown({children, ...restProps})
{
    return <Select {...restProps}>
        {children}
    </Select>
}

Header.Option=function HeaderOption({children, ...restProps})
{
    return <Option {...restProps}>
        {children}
    </Option>
}

Header.Search=function HeaderSearch({children, ...restProps})
{
    const [value, setValue]=useState('');

    return (<> 
     <SearchIcon src='/Images/search.png' width='20px' height='20px' />
     <SearchInput value={value} placeholder='Search...' onChange={(event)=> setValue(event.target.value)}/>
    </>)

}

Header.Navbar=function HeaderNavbar()
{
    return <Navbar>
         <NavbarItem ></NavbarItem>
         <NavbarItem ></NavbarItem>
         <NavbarItem ></NavbarItem>
    </Navbar>
}
