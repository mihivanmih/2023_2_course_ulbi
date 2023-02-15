import { classNames } from 'shared/lib/classNames/classNames'
import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button test', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
    test('class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        // screen.debug()
    })
})
