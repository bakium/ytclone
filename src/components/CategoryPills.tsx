import { Button } from "./Button"

type CategoryPillsProps = {
    categories: string[],
}

export const CategoryPills = ({ categories }: CategoryPillsProps) => {
    return (
        <ul className="flex gap-2">
            {categories.map(category => (
                <li key={category}>
                    <Button>
                        {category}
                    </Button>
                </li>))}
        </ul>
    )
}

