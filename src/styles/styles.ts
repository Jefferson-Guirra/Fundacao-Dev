import styled from "styled-components";

export const container = styled.main`
  display: block;
  .containerHeader {
    min-height: calc(100vh - 6rem);
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 1120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      max-width: 490px;
    }
  }
  @media (max-width: 1110px) {
    .containerHeader {
      flex-direction: column;

      img{
        max-width:390px;
        padding:1.5rem 0;
      }
    }
  }
`

export const ctaText = styled.section`
max-width:600px;

h1{
  font-size:3rem;
  font-weight:900;
  color:var(--white);
  margin:2.5rem 0;
}
p{
  color:var(--white);
  font-size:1rem;
  line-height:2.25rem;
  white-space:pre-wrap;
}

a svg{
  margin-top:15px;
}
svg{
  color #FFF;
  cursor: pointer;
  margin-left:15px;
}

svg:hover{
color:var(--blue-900);
}

@media (max-width:1110px){
  h1{
    font-size:2.5rem;
  }
}
`
