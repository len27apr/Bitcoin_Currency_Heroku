import React from 'react';
import Select from 'react-select';
import user1 from '../UserImages/user1.png';
import user2 from '../UserImages/user2.png';
import user3 from '../UserImages/user3.png';
import { Header } from '../components';

export function HeaderDropDown(props) {
    const options = [
        {
            value: 'user1',
            label: <Header>
                <Header.Image src={user1} height={props.height} width={props.width} borderRadius='50%' />
            </Header>
        },
        {
            value: 'user2',
            label: <Header>
                <Header.Image src={user2} height={props.height} width={props.width} borderRadius='50%' />
            </Header>
        },
        {
            value: 'user3',
            label: <Header>
                <Header.Image src={user3} height={props.height} width={props.width} borderRadius='50%' />
            </Header>
        }
    ]

    return (
        <Select options={options} border={0} borderRadius={10} />
    )
}