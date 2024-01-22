import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(["hover:bg-gray-300"] /* Button base style array*/,
    {
        variants: {
            variant: {
                default: ["bg-neutral-200 hover:bg-neutral-300"],
                ghost: ["bg-neutral-100"]
            },
            size: {
                default: ["rounded", "p-2"],
                icon: [
                    "flex", "justify-center", "items-center",
                    "rounded-full",
                    "w-10", "h-10",
                    "p-2.5"
                ]
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)

/* Custom Button types with React Button props extention */
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
    return (
        /* <button {...props} className={buttonStyles({ variant, size, className })} />
        This will conflict with already present tailwind css
        twMerge solve this issue
        */
        <button {...props} className={twMerge(buttonStyles({ variant, size }), className)} />
    )
}

export { Button }
