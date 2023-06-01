// Write your code here
import './index.css'

const DestinationItemIs = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails
  return (
    <li className="destination-card">
      <img className="image" src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItemIs
