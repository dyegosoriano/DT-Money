import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  margin-top: -7.5rem;

  div {
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;
    padding: 1.5rem 2rem;

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      line-height: 3rem;
      font-weight: 500;
      margin-top: 1rem;
      font-size: 2rem;
      display: block;
    }
  }
`
