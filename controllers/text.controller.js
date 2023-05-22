class TextController {
  test = async (req, res) => {
    const { data } = req.body;
    console.log("req.body", req.body);
    console.log("data", data);
    return res.status(200).json({ data });
  };
}

module.exports = TextController;
