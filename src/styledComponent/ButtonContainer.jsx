import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: uppercase;
font-size: 1rem;
background: transparent;
color: var(--mainBlack);
border: 0.08rem solid transparent;
border-color: transparent;
padding: 0.8rem 0.5rem;
margin: 0rem 0 0 0;
cursor: pointer;
&:hover{
  color: var(--mainOrange);
}
&:focus{
  outline: none;
  border-top: 0.3rem solid var(--mainOrange);
  background: rgb(242,158,56);
  background: linear-gradient(180deg, rgba(242,158,56,0.4234068627450981) 38%, rgba(0,212,255,0) 100%);
  
  color: var(--mainOrange);
}
`;