import Link from 'next/link'

const Preview = ({ post }) => (
    <Link href={'/blog' + post.link}>
        <a className="flex flex-col my-2 p-4 cursor-pointer">
            <h4 className="mb-2 text-2xl">
                {post.module.meta.title}
            </h4>
            <img className="w-full" src={post.module.meta.coverImage} />
            <span className="my-4">
                {post.module.meta.description}
            </span>
            <span className="text-gray-500">
                {post.module.meta.date}
            </span>
        </a>
    </Link>
)

export default Preview