import './index.css'

const TabItems = props => {
  const {tabDetails, selectedTab, className} = props
  const {tabId, displayText} = tabDetails

  const onSelectTab = () => {
    selectedTab(tabId)
  }

  return (
    <li>
      <button
        testid="selectTab"
        className={className ? 'selectTabBtn' : 'tabBtn'}
        type="button"
        onClick={onSelectTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
