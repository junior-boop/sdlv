import {Html, Head, Main, NextScript} from "next/document";

export default function Document(){
    return(
        <Html>
            <Head>
                {/* google adsense */}
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    (adsbygoogle = window.adsbygoogle || []).push({
                        google_ad_client: '1899219914731834',
                        enable_page_level_ads: true
                        });
                        `,
                        }} />
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    )
}