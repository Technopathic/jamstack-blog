import Link from 'next/link'

const Header = () => (
    <header className="h-16 w-full flex justify-center fixed top-0 left-0 right-0 z-50 bg-white">
        <section className="w-full max-w-screen-lg flex justify-between items-center mx-4">
            <Link href="/">
                <a className="text-2xl cursor-pointer">Blog Name</a>
            </Link>
            <section className="flex items-center">
                <a target="_blank" href="#" className="mx-2 hover:opacity-70">NavLink</a>
            </section>
        </section>
    </header>
)

export default Header