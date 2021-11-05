import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

export const UserInfo = styled.ul`
  display: grid;
  ${breakpointsMedia({
    xs: css`
        gap: 0px 0.8rem;
            `,
    lg: css`
        gap: 0px 40px;
            `,
  })}    
  
   ${breakpointsMedia({
    xs: css`
    padding:0px;  
    
    `,
    md: css`
    padding-right: 16px;
    padding-left: 16px;
    `,
    lg: css`
    padding-right: 0;
    padding-left: 0;
    
    `,
  })}
  ${propToStyle('margin')}
  ${propToStyle('maxWidth')}
  ${propToStyle('gridTemplateColumns')}
  ${propToStyle('gridTemplateRows')}

  > li {
    display: flex;
    align-items: center;
    ${breakpointsMedia({
    xs: css`
        justify-content: center;
        `,
    lg: css`
       
    `,
  })};
    
    span {
      display: block;
      font-weight: 500;
      ${breakpointsMedia({
    xs: css`
                font-size: 16px;
                line-height: 20px;
                 `,
    lg: css`
                 font-size: 24px;
                 line-height: 40px;
            `,
  })};
      
      color: #070C0E;
      
    }

    span:last-child{
      ${breakpointsMedia({
    xs: css`
                font-size: 12px;
                 `,
    lg: css`
                 font-size: 16px;
            `,
  })};
     
      font-weight: 400;
      color: #88989E;
      line-height: 20px;
    }

    img {
      border-radius: 50%;
      aspect-ratio: 1 / 1;
      ${breakpointsMedia({
    xs: css`
            width: 88px;
                        `,
    lg: css`
            width: 188px;
                        `,
  })}    
            
        object-fit: cover;
        }
    }

  > li:nth-child(1) {
    ${breakpointsMedia({
    xs: css`
          grid-area: 1 / 1 / 2 / 1;
          margin-right: 10px;
        `,
    lg: css`
            margin-right: 0px;
            grid-area: 1 / 1 / 4 / 1;
            margin-right: 30px;
        `,
  })}        
    
  }

  li:last-child {
    ${breakpointsMedia({
    xs: css`
          grid-area: 2 / 1 / 4 / 4;
          p {
              margin-bottom: 0px;
              span:last-child {
                font-size: 14px;
              }
          }
        `,
    lg: css`
            p {
              margin-bottom: 1em;              
              span:last-child {
                font-size: 16px;
              }
            }
            grid-area: 2 / 2 / 4 / 5;
        `,
  })}
    
  }
`;

export const ListaPhotos = styled.ul`
  list-style: none;
  padding:0px;
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  ${breakpointsMedia({
    xs: css`
    gap: 0.3rem;
    `,
    lg: css`
     gap:2rem;
    `,
  })}

  li {
    overflow:hidden;
    aspect-ratio: 1/1;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
        }   
    }  
`;
