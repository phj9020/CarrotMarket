import Head from 'next/head';

interface HeadProps {
    title: string;
    descriptionContent: string;
    keywordContent: string;
}

export default function HeadInfo({title, descriptionContent, keywordContent} : HeadProps) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={descriptionContent} />
            <meta name="keywords" content={keywordContent} />
            <link rel="icon" href="/carrot.png" />
        </Head>
    )
}