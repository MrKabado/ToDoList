export const authController = (req, res) => {
  const { email, password } = req.body;

  console.log(email, password)
  return res.json({ success: true })
}