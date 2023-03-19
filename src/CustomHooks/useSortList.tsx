import { noteList } from '../@types/types'

export const useSortList = () => (list: noteList[]) =>
    list.sort((item, nextItem) => item.priority.value - nextItem.priority.value)
