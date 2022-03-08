import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: var(--text-body);
      line-height: 1.5rem;
      padding: 1rem 2rem;
      font-weight: 400;
      text-align: left;
    }

    td {
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.25rem;
      padding: 1rem 2rem;
      border: 0;

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:first-child {
        color: var(--text-title);
      }
    }
  }
`
