import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  input {
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: #e7e9ee;
    padding: 0 1.5rem;
    font-weight: 400;
    font-size: 1rem;
    height: 4rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    background: var(--green);
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    height: 4rem;
    border: none;
    width: 100%;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
