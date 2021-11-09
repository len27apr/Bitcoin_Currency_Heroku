import React from 'react';
import { Container, List, ListItem, ListItemPhoto, ListItemData, Tools, ToolImage, ToolData } from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Sidebar.List = function SidebarList({ children, ...restProps }) {
    return <List {...restProps}>
        {children}
    </List>
}

Sidebar.ListItem = function SidebarListItem({ children, ...restProps }) {
    return (
        <ListItem {...restProps}>
            {children}
        </ListItem>
    )
}

Sidebar.ListItemData = function SidebarListItemData({ children, ...restProps }) {
    return (
        <ListItemData {...restProps}>
            {children}
        </ListItemData>
    )
}

Sidebar.ListItemPhoto = function SidebarListItemPhoto({ children, ...restProps }) {
    return (
        <ListItemPhoto {...restProps} />
    )
}

Sidebar.Tools = function SidebarTools({ children, ...restProps }) {
    return (
        <Tools>
            <ToolImage src='/Images/Tools.jpeg' alt='Tool'/>
            <ToolData>Tools</ToolData>
        </Tools>
    )
}