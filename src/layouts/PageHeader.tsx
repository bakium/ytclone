import { Menu } from 'lucide-react'
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
                    <img src="../../public/vite.svg" className="h-6" />
                </a>
            </section>
            <section>Middle section</section>
            <section>Right section</section>
        </header>
    )
}

export { PageHeader }
