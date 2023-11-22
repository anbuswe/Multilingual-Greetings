import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onCLickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : 'tab-btn'

  return (
    <li className="tab-item-con">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onCLickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Tabs
