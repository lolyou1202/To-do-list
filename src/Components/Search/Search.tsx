import { FC, useContext, useState } from 'react'
import { ReactSVG } from 'react-svg'
import { ContextSearch, SearchContext } from '../../Context/Context'

export const Search: FC = () => {
    const [inputState, setInputState] = useState<string>('')

    const { setSearchState } = useContext(SearchContext) as ContextSearch

    const changeInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => setInputState(event.target.value)
    
    const saveSearchResult = () => setSearchState(inputState)
    
    return (
        <div className='search'>
            <input
                type='text'
                className='search-input'
                onChange={changeInputSearch}
            />
            <ReactSVG
                className='search-ico'
                src={require('../../Image/search-ico.svg').default}
                onClick={saveSearchResult}
            />
        </div>
    )
}
