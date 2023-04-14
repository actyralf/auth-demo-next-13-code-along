import fishData from "../../../_data/fish.json";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(
        fishData.map(fish => {
          return {id: fish.id, name: fish.name};
        })
      );
    default:
      return res.status(405).json({error: "method not allowed"});
  }
}

export default handler;
