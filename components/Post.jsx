import React from 'react'
import Head from 'next/head'

const Post = ({ children, meta }) => (
    <>
        <Head>
            <title>{meta.title}</title>
            <meta name="Description" content={meta.description} />
            
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />

            <meta property="og:image" content={"http://yoursite.com/" + meta.coverImage} />
            <meta property="og:image:secure_url" content={"http://yoursite.com/" + meta.coverImage} />

            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="256" />
        </Head>

        <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20">
            {children}
        </div>
    </>
)

export default Post