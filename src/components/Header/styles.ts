import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 1rem 12rem;
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;

  button {
    background: var(--blue-light);
    border-radius: 0.25rem;
    font-size: 1rem;
    padding: 0 2rem;
    height: 3rem;
    color: #fff;
    border: 0;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
