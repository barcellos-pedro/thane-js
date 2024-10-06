export default function Error(err, req, res, next) {
  console.error(err)
  res.status(500).render("errors/500")
}
