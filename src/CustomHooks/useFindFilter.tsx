import { noteList } from '../@types/types'

export const useFindFilter = () => 
    (list: noteList[], stage: string, date: Date) =>
        list.filter(item => {
            switch (stage) {
                case 'Undone':
                    return (
                        item.stage === stage &&
                        date.getTime() ===
                            new Date(
                                item.date.getFullYear(),
                                item.date.getMonth(),
                                item.date.getDate()
                            ).getTime()
                    )
                case 'Consummation':
                    return item.stage === stage
                default:
                    return false
            }
        })
