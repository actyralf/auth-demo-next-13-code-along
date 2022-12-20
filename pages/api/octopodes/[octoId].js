import octopodes from "../../../_data/octopodes.json";

async function handler(req, res) {
  const {octoId} = req.query;
  switch (req.method) {
    case "GET":
      try {
        const octopus = octopodes.find(octo => octo.id === octoId);
        if (!octopus) {
          return res.status(404).json({message: "octopus not found"});
        }
        return res.status(200).json(octopus);
      } catch (error) {
        console.log(error);
        return res.status(500).json({error: "error"});
      }
    default:
      return res.status(405).json({error: "method not allowed"});
  }
}

export default handler;
