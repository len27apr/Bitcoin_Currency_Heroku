import React from 'react';
import {Sidebar} from '../components';
import SideBarData from '../sideBarData.json';

export function SideBarContainer() {
    console.log('sidebar data is: ', SideBarData);
    return (
        <Sidebar>
            <Sidebar.Tools />
            <Sidebar.List>
                {
                    SideBarData.map((data,index) => (
                        <Sidebar.ListItem key={index}>
                             <Sidebar.ListItemPhoto src={data.photo} alt='photo'/>
                             <Sidebar.ListItemData>{data.name}</Sidebar.ListItemData>
                        </Sidebar.ListItem>
                    ))
                 }
            </Sidebar.List>
        </Sidebar>
    )
}