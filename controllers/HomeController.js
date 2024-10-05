// Possible Actions
// Index | Show | Create | Store | Edit | Update | Destroy

export default class HomeController {
  index(req, res) {
    res.render("index", {
      title: "Home",
      author: "barcellos-pedro",
    })
  }
}
