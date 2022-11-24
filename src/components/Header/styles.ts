import styled from "styled-components";

export const headerContainer = styled.header`
  height: 6rem;
  border-bottom: 1px solid var(--gray-200);
  background-color: var(--gray-700);
  .headerContent {
    max-width: 1120px;
    height: 6rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;

    img {
      cursor: pointer;
    }
    .logo {
      display: flex;
      align-items: center;
      p {
        font-weight: bold;
        color: var(--yellow-500);
        font-size: 1.5rem;
        span {
          top: 50%;
          color: #d91a1a;
        }
      }
    }

    nav {
      margin-left: 5rem;
      height: 6rem;

      a {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 6rem;
        line-height: 6rem;
        color: var(--gray-100);
        transition: color 0.3s;

        &:hover {
          color: var(--white);
        }

        &.active {
          color: var(--yellow-500);
          font-weight: bold;
        }
      }
    }

    nav a:not(a:nth-child(1)) {
      margin-left: 2rem;
    }

    .readyButton {
      margin-left: auto;
      height: 3rem;
      border-radius: 3rem;
      background-color: var(--blue-900);
      color: var(--white);
      font-weight: bold;
      border: none;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justiry-content: center;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }
  @media (max-width: 870px) {
    height: 11rem;
    padding: 0 0.5rem;

    .headerContent {
      flex-direction: column;
      margin: 0 auto;

      nav {
        margin: 0 auto;
      }

      .readyButton {
        display: none;
      }
    }
  }
`