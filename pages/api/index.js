export default function handler(req, res) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const uri = process.env.MONGO_URI;
  res.status(200).send({
    clientId,
    clientSecret,
    uri,
  });
}
