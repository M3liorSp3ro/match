import { FC } from 'react'
import { Loader, StyledButton } from './Button.styles'
import { IButtonProps } from './Button.types'

export const Button: FC<IButtonProps> = (props) => {

    const { children, isLoading } = props

    return (
        <StyledButton disabled={isLoading}>
            {children}
            {isLoading && <Loader />}
        </StyledButton>
    )
}
