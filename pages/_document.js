// pages/_document.jsx
import Document, { HTML, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps({ ctx }) {
    const sheet = new ServerStyleSheet()

    const originalRenderPage =  ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              (<App {...props} />),
            ),
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
  

  render() {
    return (
      <HTML>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {/* {this.props.styleTags} */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </HTML>
    )
  }
}
