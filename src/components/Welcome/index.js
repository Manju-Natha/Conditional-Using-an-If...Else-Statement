// import './index.css'

// const Welcome = props => {
//   const {name, greeting} = props
//   return (
//     <h1 className="message">
//       {greeting}, {name}
//     </h1>
//   )
// }

// export default Welcome

import './index.css'

const Welcome = props => {
  const {greeting, name} = props
  return <h1 className="message">{(greeting, name)}</h1>
}

export default Welcome
