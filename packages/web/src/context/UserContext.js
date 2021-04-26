import React from 'react'

const UserContext = React.createContext()

class UserProvider extends React.Component {
  state = { isAuth: false, loggedInUser: {}, order: {} }

  constructor() {
    super()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  login = (data) => {
    debugger;
    this.setState({ isAuth: true, loggedInUser: data.user })
  }

  logout = () => {
    this.setState({ isAuth: false })
  }
  setOrder = (order) => {
    this.setState({ order: order })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout,
          setOrder: this.setOrder,
          order: this.state.order,
          loggedInUser: this.loggedInUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer, UserContext };