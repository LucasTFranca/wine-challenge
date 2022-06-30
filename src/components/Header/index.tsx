import HeaderLeft from 'components/HeaderLeft'
import HeaderRight from 'components/HeaderRight'
import SearchBar from 'components/SearchBar'
import { useState } from 'react'

import { Section, Div } from './headerStyle'

export default function Header () {
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false)

  const headerRightProps = {
    searchBarVisible,
    setSearchBarVisible
  }

  return (
    <Section>
      <Div>
        <HeaderLeft />
        <HeaderRight { ...headerRightProps } />
      </Div>
      {
        searchBarVisible && <SearchBar />
      }
    </Section>
  )
}
