import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;

    ${breakpointsMedia({
    xs: css`
            margin-top: ${({ isFirst }) => (isFirst ? '0px' : '25px')};
            `,
    lg: css`
            margin-top:25px;
         `,
  })}; 
   
    
    img {
        max-width: 100%;
    }
`;

export const CardHeader = styled.header`
    background-color: white; 
    ${breakpointsMedia({
    xs: css`
            padding:1.2rem 1.8rem;`,
    lg: css`
              padding:1.2rem 2.8rem;
            `,
  })};  
   
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        align-items:center;
        ${breakpointsMedia({
    xs: css`
            gap: 1rem; `,
    lg: css`
            gap: 1.3rem; 
            `,
  })};   
        
        span {
            ${breakpointsMedia({
    xs: css`
                font-size: 14px;
                `,
    lg: css`
                font-size: 24px;
                `,
  })};            
            color: #070C0E;
            font-weight:500;
        }
    }

    div:last-child {
        font-size: 18px;
        color: #070C0E;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    img {
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        ${breakpointsMedia({
    xs: css`
            width: 32px;`,
    lg: css`
             width: 51px;
            `,
  })};       
        object-fit: cover;
    }

    button {
        background-color: transparent;
        border:0px;
        text-indent: -999px;
        overflow: hidden;
        ${breakpointsMedia({
    xs: css`
            width: 21px;
             background-image: url('../../images/icon-moresmall.svg');`,
    lg: css`
                width: 38px;
              background-image: url('../../images/icon-more.svg');
            `,
  })};       
       
        background-repeat: no-repeat;
        background-position: center center;
        
        cursor: pointer;
    }
  
`;

export const CardBody = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 100%;
    position:relative;
    

    img {
        aspect-ratio: 1 / 1;
        width: 100%;
        height:100%;
        object-fit: cover;
        max-width: 100%;
    }

    button {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        background-color: rgba(255,255,255, 0.6);
        border:0px;

        img {
            width: 50%;
            height: 50%;
            object-fit: contain;
        }
    }

    &:hover button {        
        opacity: 1;        
    }
`;

export const CardFooter = styled.footer`
    background-color: white;
    padding:1.9rem 2.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${breakpointsMedia({
    xs: css`
            padding:1.2rem 1.5rem;`,
    lg: css`
              padding:1.9rem 2.8rem;
            `,
  })}; 

    > div {
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            border:0px;
            background-color: transparent;
            padding:0px;

            img {
                ${breakpointsMedia({
    xs: css`
                    height : 20px;
                   `,
    lg: css`
                    height : auto;
                    `,
  })};  
            }
        }
    }

    > div:last-child {
        ${breakpointsMedia({
    xs: css`
                margin-top: 15px;
                `,
    lg: css`
                margin-top: 20px;
            `,
  })};
       
        button {
            cursor: pointer;
           
            background-color: #F1F1F1;
            color: #88989E;
            ${breakpointsMedia({
    xs: css`
                    border-radius: 5.7631px;
                    font-size:14px;
                    padding: 4px 12px;
                   `,
    lg: css`
                    font-size: 19px;
                    border-radius: 12.7631px;
                    padding: 8px 20px;
                    `,
  })};
            
            text-align: center;            
           
        }
    }

    > div:last-child > div {
        display: flex;
        justify-content: center;
        align-items:center;

        span {
            margin-left: 5px;
            ${breakpointsMedia({
    xs: css`
                    font-size:14px;
                   `,
    lg: css`
                    font-size:21.34px;
                    `,
  })};
            
        }  
        
        img {
                ${breakpointsMedia({
    xs: css`
                    height : 24px;
                   `,
    lg: css`
                    height : auto;
                    `,
  })};  
            }
    }

    ul {
        list-style:none;
        padding:0px;
        margin: 0px;
        display: flex;
        justify-content: space-around;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;

            span {
                font-weight: 500;
                margin-left: .8rem;
                ${breakpointsMedia({
    xs: css`
                    font-size: 14px;
                   `,
    lg: css`
                    font-size: 22px;
                    `,
  })}; 
                
            }
        }

        li + li {
            margin-left: 31px;
        }

        li {
            img {
                ${breakpointsMedia({
    xs: css`
                    height : 20px;
                   `,
    lg: css`
                    height : auto;
                    `,
  })};  
            }
        }

        li:nth-child(3) {
            img {
                ${breakpointsMedia({
    xs: css`
                    height : 25px;
                   `,
    lg: css`
                    height : auto;
                    `,
  })};  
            }
        }
    }
`;
