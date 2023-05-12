import styled from "styled-components";

const Wrapper = styled.main`
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    margin-top: 10rem;

    span {
      color: var(--primary-600);
    }
  }
  p {
    color: var(--grey-600);
  }
  .img {
    margin-top: 10rem;
    width: 25%;
    transform: rotate(25deg);
    position: absolute;
    right: 20%;

    height: 450px;
    border-radius: 25%;
  }
  button {
    padding: 0.6rem 1.4rem;
    background-color: var(--primary-600);
    border: none;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    transition: all 0.5s;
  }
  button:hover {
    padding: 0.6rem 1.4rem;
    background-color: var(--primary-700);
  }
  @media (min-width: 900px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
