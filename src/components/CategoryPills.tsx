import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./Button"
import { useState, useRef } from "react"

type CategoryPillsProps = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void,
}

const TRANSLATE_AMOUNT = 250

export const CategoryPills = ({ categories, selectedCategory, onSelect }: CategoryPillsProps) => {
    const [translate, setTranslate] = useState(0)
    const translateRef = useRef<HTMLUListElement>(null)
    const [isLeftVisible, setIsLeftVisible] = useState(true)
    const [isRightVisible, setIsRightVisible] = useState(true)

    return (
        <section
            className="overflow-x-hidden relative"
            ref={translateRef}
        >
            <ul className="flex gap-3 w-[max-content] transition-transform"
                style={{ transform: `translateX(-${translate}px)` }}
            >
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
            {isLeftVisible && <span className="absolute left-0 top-1/2 -translate-y-1/2
                bg-gradient-to-r from-white from-50% to-transparent w-24 h-full
                flex justify-begin
            ">
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-full w-auto aspect-square p-1.5"
                    onClick={() => setTranslate(translate => {
                        const newTranslate = translate - TRANSLATE_AMOUNT
                        if (newTranslate <= 0) return 0
                        return newTranslate
                    })}
                >
                    <ChevronLeft strokeWidth={2} />
                </Button>
            </span>
            }
            {isRightVisible && <span className="absolute right-0 top-1/2 -translate-y-1/2
                bg-gradient-to-l from-white from-50% to-transparent w-24 h-full
                flex justify-end
            ">
                <Button
                    size="icon"
                    variant="ghost"
                    className="h-full w-auto aspect-square p-1.5"
                    onClick={() => setTranslate(translate => {
                        if (translateRef.current == null) return 0

                        const newTranslate = translate + TRANSLATE_AMOUNT
                        const { clientWidth, scrollWidth } = translateRef.current

                        if (newTranslate + clientWidth >= scrollWidth) return scrollWidth - clientWidth
                        return newTranslate
                    })}
                >
                    <ChevronRight strokeWidth={2} />
                </Button>
            </span >
            }
        </section >
    )
}

