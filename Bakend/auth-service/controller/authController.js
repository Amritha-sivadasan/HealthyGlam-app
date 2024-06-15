const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);

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
  console.log(req.body);
  try {
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.json({ msg: "user not found" });
    }
    if (!existUser.password == password) {
      return res.json({ msg: "Password is incorrect" });
    }
    const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    res.status(200).json({ existUser, token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("server error");
  }
};

module.exports = { register, login };
