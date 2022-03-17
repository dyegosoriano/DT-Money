import styled from 'styled-components'
import { transparentize, darken } from 'polished'

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

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  margin: 1rem 0;
`

interface IRadioBoxProps {
  activeColor: 'green' | 'red'
  isActive: boolean
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<IRadioBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${() => props => props.isActive ? transparentize(0.9, colors[props.activeColor]) : 'transparent'};
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  height: 4rem;

  transition: border-color 0.5s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    height: 2rem;
    width: 2rem;
  }

  span {
    color: var(--text-title);
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
  }
`
