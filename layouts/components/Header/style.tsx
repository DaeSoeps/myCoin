import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: #093687;
`

export const ImgMenu = styled.div`
  padding: 10px;
  margin: 0px 20px;
  cursor: pointer;
  & a {
    display: flex;
    flex-direction: column;
    color: #000;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const HeadMenu = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0px 20px;
  cursor: pointer;
  & a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`
