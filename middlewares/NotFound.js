export default function NotFound(req, res, next) {
  res.status(404).render("errors/404")
}
