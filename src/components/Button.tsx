import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

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

const Button = ({ variant, size, ...props }: ButtonProps) => {
    return (
        <button {...props} className={buttonStyles({ variant, size })} />
    )
}

export { Button }
