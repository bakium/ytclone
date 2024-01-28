import { Button } from "./Button"

type CategoryPillsProps = {
    categories: string[],
    selectedCategory: string,
}

export const CategoryPills = ({ categories, selectedCategory }: CategoryPillsProps) => {
    return (
        <ul className="flex gap-3 w-[max-content]">
            {categories.map(category => (
                <li key={category}
                >
                    <Button
                        variant={selectedCategory === category ? "dark" : "default"}
                        className="whitespace-nowrap text-sm py-1 px-3 rounded-lg"
                    >
                        {category}
                    </Button>
                </li>))}
        </ul>
    )
}

