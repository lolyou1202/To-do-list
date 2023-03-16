import { noteList } from '../@types/types'

export const useSearchFilter = () => 
    (list: noteList[], searchState: string) =>
        list.filter(item =>
            item.name.toLowerCase().includes(searchState.toLowerCase())
        )
