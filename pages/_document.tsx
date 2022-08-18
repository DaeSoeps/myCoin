import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

// https://wonit.tistory.com/369 Styled Compnent 이슈

/*
  타입스크립트는 타입에러 떄문에 이렇게 해줘야함 
  https://www.angularfix.com/2021/09/how-to-properly-type-documenttsx-file.html
*/

export default class MyDocument extends Document {

  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error('##############', error);
    } finally {
      sheet.seal();
    }
  }
  

  render(): ReactElement {
    return (
      <Html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {/* {this.props.styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
