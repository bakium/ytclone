import { Button } from "./Button"

type CategoryPillsProps = {
    categories: string[],
}

export const CategoryPills = ({ categories }: CategoryPillsProps) => {
    return (
        <ul className="flex gap-3 w-[max-content]">
            {categories.map(category => (
                <li key={category}
                >
                    <Button
                        variant="dark"
                        className="whitespace-nowrap text-sm py-1 px-3 rounded-lg"
                    >
                        {category}
                    </Button>
                </li>))}
        </ul>
    )
}

