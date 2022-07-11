import styled from 'styled-components'

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eee;
  margin: 0px auto;
  padding: 200px auto;
`

export const WorksWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  margin-bottom: 150px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
export const WorksH1 = styled.h1`
  letter-spacing: 0.5rem;
  font-size: 48px;
  line-height: 48px;
  color: #16454f;
  margin: 200px auto 100px auto;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 32px;
  }
`
