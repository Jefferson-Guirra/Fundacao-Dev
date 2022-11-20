import styled from 'styled-components'

export const container = styled.div`
display:block;

.containerHeader{
  min-height: calc(100vh - 5rem);
  max-width:1120px;
  padding-inline:2rem;
  margin: 0 auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  
  .ctaText{
    max-width:600px;
    h1{
      font-size:3.5rem;
      line-height:4.5rem;
      font-weight:900;
      margin-top:2.5rem;
      color:var(--white)
    }
    span{
      font-size:1rem;
      line-height: 2.25rem;
      color:var(--white);
    }
    button{
      display:block;
      background-color:var(--blue-900);
      border:none;
      padding:1rem 1.8rem;
      margin-top:2.5rem;
      border-radius:7px;
      color:var(--white);
      font-weight:bold;
    }
  }
  img{
    max-width:640px;
  }
}
@media (max-width:1095px){
  .containerHeader{
    padding:0 2rem;

    .ctaText h1{
      font-size:3rem;
    }

    img{
      max-width:600px;
    }
  }
}

@media (max-width:950px){
  .containerHeader{
    flex-direction:column;

    button{
      width:100%;
      display:flex;
      align-items:center;
      justify:content:center;
    }
    img{
      max-width:500px;
    }
  }
}
`
export const divisor = styled.hr`
width:100%,
bottom:0;
height:1px;
border-color:var(--gray-200);
`

export const sectionContent = styled.div`
  margin: 5.5rem auto;
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    max-width: 670px;
  }

  img {
    max-width: 550px;
  }
  h2 {
    font-size: 2.2rem;
    font-weight: 900;
    margin-top: 2.2rem;
    line-height: 4.5rem;
    color: var(--white);
  }

  span {
    font-size: 1rem;
    line-height: 2.25rem;
    color: var(--white);
  }
  @media (max-width: 1095px) {
    padding: 0 2rem;
    h2{
      font-size:2.3rem
    }
  }
  @media (max-width:950px){
    flex-direction:column;
    img{
      margin-top:2rem;
      max-width:400px;
    }
  }
`

export const nextLevelContent = styled.div`
  margin: 6rem auto;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    font-size: 2.8rem;
    line-height: 4.5rem;
    font-weight: 900;
    color: var(--white);
  }
  .alunos {
    color: var(--blue-900);
    font-size: 2.8rem;
    line-height: 4.5rem;
    font-weight: 900;
  }
  span {
    font-size: 1rem;
    line-height: 2.25rem;
    color: var(--white);
  }
  button {
    background-color: var(--blue-900);
    border: none;
    padding: 1rem 1.8rem;
    margin-top: 2.5rem;
    border-radius: 6px;
    color: var(--white);
    font-weight: bold;
  }
  @media (max-width: 1095px) {
    padding: 0 2rem;
  }

`