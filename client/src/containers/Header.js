import React from 'react';
import { Header } from '../components';
import { HeaderDropDown } from './HeaderDropDown';

export function HeaderContainer() {

    return <Header>
        <Header.Group>
            <Header.Image src='/Images/bitcoin_header3.png' alt='Bitcoin' width='220px' height='65px' />
        </Header.Group>
         <Header.Navbar />
        <Header.Group>
            <Header.Dropdown >
                <Header.Option value='1' defaultvalue='selected'>Activity</Header.Option>
                <Header.Option value='2'>Sports</Header.Option>
                <Header.Option value='3'>Entertainment</Header.Option>
            </Header.Dropdown>
            <Header.Dropdown>
                <Header.Option value='1' defaultvalue='selected'>Tool Guide</Header.Option>
                <Header.Option value='2'>View</Header.Option>
                <Header.Option value='3'>Help</Header.Option>
            </Header.Dropdown>
        </Header.Group>
        <Header.Group marginLeft='100px'>
            <Header.Search></Header.Search>
        </Header.Group>
        <Header.Group>
            <Header.Image src='/Images/bell.jpg' alt='Bell' width='60px' height='40px'/>
            <HeaderDropDown height="20px" width="20px" />
        </Header.Group>
    </Header>

}