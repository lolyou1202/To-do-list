import { FC } from "react"
import { ReactSVG } from "react-svg"

export const Search: FC = () => {
    return (
        <div className='search'>
            <input type='text' className='search-input' placeholder='Search' />
            <ReactSVG
                className='search-ico'
                src={require("../../Image/search-ico.svg").default}
            />
        </div>
    )
}
