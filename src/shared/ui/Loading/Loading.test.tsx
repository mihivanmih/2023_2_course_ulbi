
import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

describe('Loading test', () => {
    test('render', () => {
        render(<Loading />)
        expect(screen.getByTestId('loading')).toHaveClass('lds-ellipsis')
    })
})
