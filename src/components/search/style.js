import styled from 'styled-components'

export const SearchWrapper = styled.div`
padding: 3.5rem 8.4375% 2.0625rem 1.75rem;
@media (min-width: 834px){
    padding: 3.5rem 4.8125rem 3rem 4.8125rem;
}
@media (min-width: 1440px){
    padding-right:  3.958333%;
}
`
export const SearchTitle = styled.p`
margin-bottom: 0.25rem;
font-family: 'DM Sans';
font-weight: 400;
font-size: 1rem;
line-height: 1.3125;
color: #000000;
@media (min-width: 834px){
   font-size: 1.5rem;
   line-height: 1.2916667;
}
`
export const SearchField = styled.input`
width: 100%;
height: 2.125rem;
border-radius: 0px;
border: 1px solid #000000;
box-sizing: border-box;
padding-left: 0.625rem;
font-size: 1.125rem;
@media (min-width: 834px){
   height: 3.375rem;
}
`