import React from 'react';
import { Container, Frame, Group, HeaderText, Image, Select, Option, Footer  } from './styles/feature';

export default function Feature({children, ...restProps})
{
    return <Container>
        {children}
    </Container>
}

Feature.Frame=function FeatureFrame({children,...restProps})
{
   return <Frame>
       {children}
   </Frame>
}

Feature.Group=function FeatureGroup({children,...restProps})
{
    return <Group>
        {children}
    </Group>
}

Feature.HeaderText=function FeatureHeaderText({children,...restProps})
{
    return <HeaderText>
        {children}
    </HeaderText>
}

Feature.Image=function FeatureImage({children,...restProps})
{
    return <Image {...restProps}/>
}

Feature.DropDown=function FeatureDropDown({children,...restProps})
{
    return <Select {...restProps}>
        {children}
    </Select>
}

Feature.Option=function FeatureOption({children,...restProps})
{
    return <Option {...restProps}>
        {children}
    </Option>
}

Feature.Footer=function FeatureFooter({children,...restProps})
{
   return <Footer>
       {children}
   </Footer>
}