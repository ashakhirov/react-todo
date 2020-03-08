import styled, { css } from 'styled-components'

type Props = {
  completed: boolean
}

export const Button = styled.button`
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  cursor: pointer;

  ::after {
    content: '×';
  }
`

export const EditInput = styled.input`
  display: none;
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  outline: none;
`

export const Wrapper = styled.div`
  display: block;
`

export const Li = styled.li<{ editable: boolean }>`
  position: relative;
  font-size: 1.7rem;
  border-bottom: 1px solid #ededed;

  :hover ${Button} {
    display: block;
  }

  :last-child {
    border-bottom: none;
  }

  ${({ editable }) =>
    editable &&
    css`
      border-bottom: none;
      margin-bottom: -1px;
      padding: 0;

      & ${Wrapper} {
        display: none;
      }

      & ${EditInput} {
        display: block;
        margin: 0 0 0 43px;
        width: 506px;
      }
    `}
`

export const Input = styled.input<Props>`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2.9rem;
  height: 2.9rem;
  margin: auto 0;
  border: none;
  text-align: center;
  background: none;
  opacity: 0;

  &:checked + label,
  & + label {
    background-image: ${({ completed }) =>
      completed &&
      'url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E")'};
  }
`

export const Label = styled.label<Props>`
  display: block;
  line-height: 1.2;
  padding: 1.07rem 1.07rem 1.07rem 4.3rem;
  transition: color 0.4s;
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
  word-break: break-all;

  color: ${({ completed }) => completed && '#d9d9d9'};
  text-decoration: ${({ completed }) => completed && 'line-through'};
`
