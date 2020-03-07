import styled from 'styled-components'

type Props = {
  completed: boolean
}

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

export const Li = styled.li`
  position: relative;
  font-size: 1.7rem;
  border-bottom: 1px solid #ededed;

  :hover ${Button} {
    display: block;
  }
`
