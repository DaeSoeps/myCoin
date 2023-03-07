import React from 'react'
import * as ST from './style'
const ExchangeA = () => {
  return (
    <>
      <ST.MainDiv>
        <ST.SectionLeft>
          <ST.ArtA.Art>
            <ST.ArtA.Title>비트코인</ST.ArtA.Title>
            <ST.ArtA.DivA>
              <ST.ArtA.DivAStrong>30,970,000KRW</ST.ArtA.DivAStrong>
              <ST.ArtA.DivASpan>
                <ST.ArtA.DivAP>
                  전일대비
                  <ST.ArtA.DivASpanStrongA>-1.29%</ST.ArtA.DivASpanStrongA>
                  <ST.ArtA.DivASpanStrongB>-394,000</ST.ArtA.DivASpanStrongB>
                </ST.ArtA.DivAP>
              </ST.ArtA.DivASpan>
            </ST.ArtA.DivA>

            <ST.ArtA.BodyB></ST.ArtA.BodyB>
            <ST.ArtA.BodyC></ST.ArtA.BodyC>
          </ST.ArtA.Art>
          <ST.ArtB></ST.ArtB>
        </ST.SectionLeft>
        <ST.SectionRight>

        </ST.SectionRight>
      </ST.MainDiv>
    </>

  )
}

export default ExchangeA
