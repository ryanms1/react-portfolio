import React, { useEffect } from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

    const {
        tabs = [],
        currentTab,
        setCurrentTab
    } = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentTab.name)
    }, [currentTab])

    return (
        <header>
            <h1>
                <a data-testid='link' href='/'>
                    Ryan
                </a>
            </h1>
            <nav>
                <ul className='tabs'>
                    {tabs.map(tab => (
                        <li className={`${currentTab.name === tab.name && 'navActive'}`} key={tab.name}>
                            <span onClick={() => { setCurrentTab(tab) }}>{capitalizeFirstLetter(tab.name)}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}

export default Nav