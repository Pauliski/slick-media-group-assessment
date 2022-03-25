import styled from 'styled-components'

export const NavbarWrapper = styled.div`
width: 100vw;
height: 4.1875rem;
background: #292929;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media  (min-width: 834px){
    height: 8.75rem;
}
@media  (min-width: 1440px){
    padding-left: 4.8125rem;
}
`
export const NavbarTextContainer = styled.div`
border: 1px solid #FFF;
width: 6.75rem;
height: 2.09875rem;
display: flex;
align-items: center;
justify-content: center;
@media  (min-width: 834px){
    height: 3.75rem;
    width: 12.0625rem;
}
@media  (min-width: 1440px){
    align-self: flex-start;
}

`
export const NavbarSvgContainer = styled.div`
height: 1.151875rem;
width: 5.48rem;
@media  (min-width: 834px){
    height: 2.05875rem;
    width: 9.79375rem;
}

`