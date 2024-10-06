export default class Route {
  path = ""
  method = ""
  controller = null
  middleware = "none"
  action = () => void 0

  constructor({ path, method, controller, middleware, action }) {
    this.path = path
    this.method = method
    this.controller = controller
    this.middleware = middleware
    this.action = action
  }

  static new(props) {
    return new this(props)
  }
}
