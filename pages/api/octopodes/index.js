import octopodes from "../../../_data/octopodes.json";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(
        octopodes.map(octo => {
          return {id: octo.id, name: octo.name, email: octo.email};
        })
      );
    default:
      return res.status(405).json({error: "method not allowed"});
  }
}

export default handler;
