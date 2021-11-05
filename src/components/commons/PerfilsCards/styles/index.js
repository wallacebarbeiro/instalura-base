import styled from 'styled-components';

export const PerfilsWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: ${({ isMain }) => (isMain ? '25px' : '16px')};

    a {
        display:flex;
        align-items: center;
        color: #FB7B6B;
        
        span {
            font-weight: 500;
        }

        img {
            margin-right: 10px;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 16px;
        color: #88989E;
    }
`;

export const PerfilImage = styled.img`
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    width: ${({ size }) => (size || 'auto')};
    object-fit: cover;
    margin-right: 16px;
`;

export const PerfilsInfo = styled.div`
    display:flex;
    flex-direction: column;
    font-weight: 500;
    font-size: ${({ isMain }) => (isMain ? '16px' : '14px')};
    line-height: 20px;
    color: #88989E;    

    span {
        color: #070C0E;
        font-weight: 500;
        font-size: ${({ isMain }) => (isMain ? '16px' : '14px')};
        line-height: 20px;
    }

    p {
        font-size: ${({ isMain }) => (isMain ? '16px' : '14px')};
        margin: 0px;
    }

`;
