function getPosts(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\.mdx$/, ""),
        module: r(fileName)
    }))
}

export const posts = getPosts(
    require.context("./pages/blog/", false, /\.mdx$/)
)