import styled, { css } from "styled-components";
import get from 'lodash/get';
import { TextStyleVariantsMap } from "../../foundation/Text";

const ButtonGhost = css`
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    background-color: transparent;
`;

const ButtonDefault = css`
    background-color: ${({ theme, variant }) => get(theme, `colors.${variant}.color`)};
    color: ${({ theme, variant }) => get(theme, `colors.${variant}.contrastText`)};
`;

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding:12px 26px;
    font-weight: bold;
    opacity: 1;
    ${TextStyleVariantsMap.smallestException}
    ${function(props) {
        if(props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault
    }}
    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

