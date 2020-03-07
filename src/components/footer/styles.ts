import styled from 'styled-components'

export const StyledFooter = styled.footer`
  min-height: 2.93rem;
  padding: 0.7rem 1.07rem;
  text-align: center;
  color: #777;

  ::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3.57rem;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`
