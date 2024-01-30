import { Button } from "./Button"

type CategoryPillsProps = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void,
}

export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {
    return (
        <section className="overflow-x-hidden">
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
        </section>
    )
}

