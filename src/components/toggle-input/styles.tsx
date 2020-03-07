import styled from 'styled-components'

export const Input = styled.input`
  position: absolute;
  text-align: center;
  border: none;
  opacity: 0;
  background: none;
`

export const Label = styled.label`
  position: absolute;
  top: -3.71rem;
  left: -0.93rem;
  width: 4.29rem;
  height: 2.43rem;
  font-size: 0;
  transform: rotate(90deg);
  cursor: pointer;

  ::before {
    content: '❯';
    padding: 0.71rem 1.93rem;
    font-size: 1.57rem;
    color: #a6a6a6;
  }
`
