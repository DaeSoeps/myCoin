import styled from 'styled-components'

export const HeaderBox = styled.div`
  height: 7.55vh;
  width: 95%;
  top: 0;
  padding: 0 5.67vw;
  position: fixed;
  z-index: 10;
  display: flex;

  align-items: center;
  background: #093687;
  border-bottom: 2px solid #eeeeee;
`

export const HeaderMenu = styled.button`
  width: 100%;
  height: 37px;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > p {
    margin-top: 8px;
    font-size: 14px;
  }
`

export const Container1 = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const ImageContainer = styled.div`
  flex-direction: column;
  display: flex;
`
export const ImageText = styled.a`
  color: white;
  flex-direction: column;
  display: flex;
`
