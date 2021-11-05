import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';
import { TextStyleVariants } from '../../../foundation/Text';

const MenuWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${propToStyle('marginTop')};
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: ${(props) => (props.marginTop ? props.marginTop : '32px')};
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

${breakpointsMedia({
    xs: css`

    .logo--mobile {
      svg {
        width: 82px;
        height: 20px;        
      } 
      text-align:center;
      padding-right: 0px;
    }

    .menu--mobile {
        display: flex;
        justify-content: center;
        align-items:center;
        position: fixed;
        bottom: 0px;
        background: #FFFFFF;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
        border-radius: 24px 24px 0px 0px;
        width: 100%;
        left: 0px;
        height:64px;
        z-index:20;
    }
   `,
    lg: css`

      .logo--mobile {
        svg {
          width: auto;
          height: auto;        
        } 
        text-align:left;
        padding-right: 16px;
      }
    
       div.menu--mobile {
        position: relative;
        width: auto;
        height:auto;
        justify-content: flex-end;
        align-items:center;
        box-shadow: none;
        border-radius:0px;
      }
    `,
  })} 
`;

MenuWrapper.LeftSide = styled.div`
  padding: 0;
  margin: 0;
  order: 1;
  ${breakpointsMedia({
    md: css`
        width: 131px;
        height: ${(props) => (props.profileImage ? 'auto' : '32px')};
      `,
  })}
  ${breakpointsMedia({
    md: css`
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuWrapper.CentralSide = styled.div`
  padding: 0;
  margin: 0;
  order: 3;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
  border-top: 1px solid #88989E;
  border-bottom: 1px solid #88989E;
  padding: 12px;
  
  ${breakpointsMedia({
    md: css`
      max-width: 332px;
      justify-content: space-between;
      flex: 1;
      order: initial;
      border: none;
      margin: 0;
      padding-top: 0;
      padding-bottom: 0;
    `,
  })}
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      ${TextStyleVariants.paragraph1}
    `,
  })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;

MenuWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: flex-end;
  ${breakpointsMedia({
    md: css`
      order: initial;
    `,
  })}
`;

MenuWrapper.AlignMenuItems = styled.ul`
  margin: 0px;
  padding-left: 0px;
  list-style:none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
         width:100%;         
      `,
    lg: css`
         width:auto;
         justify-content: flex-start;
      `,
  })} 

  form {       
    display: flex;
    align-items:center;
    border-radius: 12px;
    ${breakpointsMedia({
    lg: css`
         padding: 6px 8px;
         border: 1px solid #88989E;
      `,
  })} 
    
    ${breakpointsMedia({
    xs: css`
         input[type=text] {
          display:none;
         };
      `,
    lg: css`
         width: 288px;
         input[type=text] {
          display:inline-block;
         };
      `,
  })} 

    input {
      color: #88989E;
      border:0px;
    }
  }

  button {
    border:0px;
    background-color: transparent;
  }

  li {
    display: flex;
    justify-content: center;
    align-items:center;
    margin:0px 17.5px;
  }

  ${breakpointsMedia({
    xs: css`
        li {
          img {
            height: 20px;
          }
        }

        li:nth-child(1) {           
           img {
            filter:brightness(0%);
           }
         }
        li:nth-child(3) {
           order: -1;

           img {
            filter:brightness(0%);
           }
         }

        
      `,
    lg: css`
        li:nth-child(3) {
           order: 0;
         }
      `,
  })} 

  li {
    img {     
      ${breakpointsMedia({
    lg: css`         
          width: auto;
          height: auto;
          filter: none !important;
      `,
  })}    
  }
}
  
li:last-child {
    ${breakpointsMedia({
    lg: css`
          margin-right:0px;
    `,
  })};
    img {
      ${breakpointsMedia({
    xs: css`
        width: 20px;
        border: 2px solid #D7385E;
      `,
    lg: css`
        border:0px;
        width: 32px !important;
        height: 32px !important;
      `,
  })};
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      width: 32px;
      object-fit: cover;
    }
  }

  .cadastrarFoto {
    width:32px;
    height: 32px;
    background-color: #FB7B6B;
    color: white;
    border-radius: 50%;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    cursor: pointer;
  }

`;

export default MenuWrapper;
