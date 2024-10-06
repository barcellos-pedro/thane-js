// Possible Actions
// Index | Show | Create | Store | Edit | Update | Destroy

export default class TodosController {
  index(req, res) {
    res.render("todos/index", {
      title: "Todos - Home",
      tasks: [],
    })
  }
}
