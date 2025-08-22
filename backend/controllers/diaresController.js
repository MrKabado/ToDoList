export const diaresController = (req, res) => {
  const { title, date, message } = req.body;

  console.log(title, date, message);
  return res.json({success: true})
}