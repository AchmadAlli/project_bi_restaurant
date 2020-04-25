import React from 'react';
import ColorGroup from '../../components/ColorGroup/ColorGroup.components';
import ColorItem from '../../components/ColorItem/ColorItem.components';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper.component';
import { ColorRole } from './Colors.styles';
import { main, secondary, shades, roles } from './Colors.data';

const Colors = () => {
  return (
    <div>
      <ContentWrapper>
        <h1> Colors Page </h1>
        <p> Color helps us to represent Come to Users. </p>
      </ContentWrapper>

      <ContentWrapper>
        <h2> Main Colors </h2>
        <p> 
          Come has some main colors for its seesntial element application. They are sky blue, black and white. <br/>
          Sky blue is represented in logo and branding content. Black is used to primarily text and white as background.
        </p>
        <ColorGroup data={main} />
      </ContentWrapper>

      <ContentWrapper>
        <h2> Secondary Colors </h2>
        <p> Secondary colors have a role to complete elements in the application, usually used for buttons. </p>
        <ColorGroup data={secondary} />
      </ContentWrapper>

      <ContentWrapper>
        <h2> Shades </h2>
        <p> These colors are a form of moving colors in each element, can be used in a variety of cases. </p>
        {
          shades.map((shade, index) => <ColorGroup key={index} data={shade} isMixSize />)
        }
      </ContentWrapper>

      <ContentWrapper>
        <h2> Color Roles </h2>
        <p> Each color has a spesific role in products. Let us Figure them out below. </p>
        {
          roles.map((role, index) => (
            <ColorRole key={index}>
              <ColorItem 
                name={role.name}
                code={role.code} 
                size={90}
                />
              <p> {role.description} </p>
            </ColorRole>

          ))
        }

      </ContentWrapper>

    </div>
  )
}

export default Colors;