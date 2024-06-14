const User = require("../model/userModel");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    const exitUser = await User.findOne({ email });
    if (exitUser) {
      return res.json({ msg: "User already exist" });
    }
    const newUser = new User({ name, email, password });
    newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log("error", error.message);
    res.status(401).send("server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      existUser.password == password;
      res.status(200).json({ existUser });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json("server error");
  }
};

module.exports = { register, login };
