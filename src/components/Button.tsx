import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonStyles = cva(["hover:bg-gray-300"] /* Button base style array*/,
    {
        variants: {
            variant: {
                default: ["bg-gray-200"],
                transparent: []
            },
            size: {
                default: ["rounded", "p-2"],
                icon: ["rounded-full", "p-2.5"]
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
