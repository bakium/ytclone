import { Bell, Menu, Mic, Search, User, Video } from 'lucide-react'
import { Button } from '../components/Button'

const PageHeader = () => {
    return (
        <header className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4
          >:border-2 >:border-sky-500
        ">
            <section className="flex flex-shrink-0 gap-2">
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
                <a href="/">
                    <img src="/vite.svg" className="h-6" />
                </a>
            </section>
            <form>
                <section>
                    <input
                        type="search"
                        placeholder="Search"
                    />
                    <Button>
                        <Search />
                    </Button>
                </section>
                <Button type="button" size="icon">
                    <Mic />
                </Button>
            </form>
            <section className="flex flex-row md:gap-2 flex-gap-4 flex-shrink-0">
                <Button size="icon" variant="ghost"><Video /></Button>
                <Button size="icon" variant="ghost"><Bell /></Button>
                <Button size="icon" variant="ghost"><User /></Button>
            </section>
        </header>
    )
}

export { PageHeader }
