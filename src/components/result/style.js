import styled from 'styled-components'

export const ResultWrapper = styled.div`
width: 100%;
padding-left: 1.75rem;
padding-bottom: 1.0625rem;
@media (min-width: 834px){
   padding-left: 4.1825rem;
   padding-bottom: 1.1875rem;
}
`
export const ResultCategory = styled.p`
margin-bottom: 1.625rem;
font-weight: 400;
font-size: 1.125rem;
line-height: 1.277777778;
text-transform: capitalize;
@media (min-width: 834px){
   font-size: 1.5rem;
   margin-bottom: 1.125rem;
}
`
export const ResultUnorderList = styled.ul`
display: flex;
`
export const ResultList = styled.li`
background: #000000;
border-radius: 12px;
margin-right: 0.8125rem;
padding: 0.625rem;
margin-bottom: 2.0625rem;
@media (min-width: 834px){
  margin-bottom: 3rem;
}
`
export const ResultListHolder = styled.div`
width: 12.5rem;
height: 12.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.125rem;
line-height: 1.2777778;
color: #FFF;
@media (min-width: 834px){
   width: 18.75rem;
   height: 18.75rem;
   font-size: 1.5rem;
   line-height: 1.29166667;
   font-weight: 400;
}
`
export const ResultDefaultText = styled.p`
font-size: 1.125rem;
font-weight: bold;
`