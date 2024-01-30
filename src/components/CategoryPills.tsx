import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./Button"

type CategoryPillsProps = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void,
}

export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {
    return (
        <section className="overflow-x-hidden relative">
            <ul className="flex gap-3 w-[max-content]">
                {categories.map(category => (
                    <li key={category}
                    >
                        <Button
                            variant={selectedCategory === category ? "dark" : "default"}
                            className="whitespace-nowrap text-sm py-1 px-3 rounded-lg"
                            onClick={() => onSelect(category)}
                        >
                            {category}
                        </Button>
                    </li>))}
            </ul>
            <span className="absolute left-0 top-1/2 -translate-y-1/2">
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-full w-auto aspect-square p-1.5"
                >
                    <ChevronLeft />
                </Button>
            </span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2">
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-full w-auto aspect-square p-1.5"
                >
                    <ChevronRight />
                </Button>
            </span >
        </section >
    )
}

