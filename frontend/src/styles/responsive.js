import { css } from "styled-components";

export const largeDesktop = (props) => {
    return css`
    @media (max-width:1440px) {
        ${props}
    }
    `
}
export const laptop = (props) => {
    return css`
    @media (max-width:1280px) {
        ${props}
    }
    `
}
export const tabletLandScape = (props) => {
    return css`
    @media (max-width:1024px) {
        ${props}
    }
    `
}
export const tablet = (props) => {
    return css`
    @media (max-width:768px) {
        ${props}
    }
    `
}
export const mobileLandScape = (props) => {
    return css`
    @media (max-width:480px) {
        ${props}
    }
    `
}
export const mobile = (props) => {
    return css`
    @media (max-width:350px) {
        ${props}
    }
    `
}