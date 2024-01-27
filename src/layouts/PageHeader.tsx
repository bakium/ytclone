import { ArrowLeft, Bell, Menu, Mic, Search, User, Video } from 'lucide-react'
import { Button } from '../components/Button'
import { useState } from 'react'

const PageHeader = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

    return (
        <header className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4">
            <section className={`flex flex-shrink-0 gap-2
                        ${showFullWidthSearch ? 'hidden' : 'flex'}
            `}>
                <Button variant="ghost" size="icon">
                    <Menu strokeWidth={1.5} />
                </Button>
                <a href="/">
                    <img src="/vite.svg" className="h-6" />
                </a>
            </section>
            <form className={`justify-center flex-grow gap-4
            ${showFullWidthSearch ? 'flex' : 'sm:flex hidden'}
            `}>
                {showFullWidthSearch && <Button variant="ghost" size="icon"
                    onClick={() => setShowFullWidthSearch(false)}
                >
                    <ArrowLeft strokeWidth={1.5} />
                </Button>
                }
                <section className="flex flex-grow max-w-[500px]">
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full border-1 rounded-l-full py-1 text-lg px-4
                         focus:border-blue-500 focus:outline-none
                         shadow-inner shadow-secondary
                         border border-secondary-border
                         "
                    />


                    <Button
                        className="
                            rounded-r-full border border-l-0 border-secondary-border
                            flex-shrink-0 py-2 px-4
                        "
                    >
                        <Search size="20" strokeWidth={1.3} />
                    </Button>
                </section>
                <Button type="button" size="icon" className="flex flex-shrink">
                    <Mic strokeWidth={1.5} />
                </Button>
            </form>
            <section className={`flex-row md:gap-2 flex-gap-4 flex-shrink-0
                ${showFullWidthSearch ? 'hidden' : 'flex'}
            `}>
                <Button
                    className="sm:hidden"
                    size="icon"
                    variant="ghost"
                    onClick={() => setShowFullWidthSearch(true)}
                >
                    <Search strokeWidth={1.5} />
                </Button>
                <Button className="sm:hidden" size="icon" variant="ghost"><Mic strokeWidth={1.5} /></Button>
                <Button size="icon" variant="ghost" ><Video strokeWidth={1.5} /></Button>
                <Button size="icon" variant="ghost"><Bell strokeWidth={1.5} /></Button>
                <Button size="icon" variant="ghost"><User strokeWidth={1.5} /></Button>
            </section>
        </header >
    )
}

export { PageHeader }
