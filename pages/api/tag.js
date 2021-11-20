import User from "modals/User";
import DB from "lib/db";
import { getSession } from "next-auth/react";

export default async function tag(req, res) {
  await DB();
  const session = await getSession({ req });
  const userId = session.user._id;
  if (req.method === "POST") {
    await User.findOneAndUpdate(
      { _id: userId },
      { $push: { tags: req.body.tag } }
    );
    res.send("OK");
  } else {
    const tags = await User.findOne({ _id: userId }, { tags: 1 }).then(
      (user) => user.tags
    );
    res.send(tags);
  }
}



