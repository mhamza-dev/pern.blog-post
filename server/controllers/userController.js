require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwtSecret = process.env.JWT_HASH;
const expiresIn = process.env.JWT_EXPIRE_IN;

const Register = async (req, resp) => {
  try {
    const hash = await getHashedPassword(req.body.password);
    const body = { ...req.body, password: hash };
    const user = await User.create(body);
    const jwtToken = await genJwtToken(user);
    resp
      .status(200)
      .json({ message: "User has been registered", token: jwtToken });
  } catch (err) {
    resp.status(500).json(err.message);
  }
};

const Login = async (req, resp) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (validPass) {
      const jwtToken = await genJwtToken(user);
      resp.status(200).header("auth-token", jwtToken).json({
        message: "User has been loggedin successfully",
        token: jwtToken,
      });
    } else {
      resp.status(401).json({ error: "email or password is wrong" });
    }
  } catch (err) {
    resp.status(500).json(err.message);
  }
};

const getHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const genJwtToken = async (user) => {
  const jwtToken = await jwt.sign(
    { data: { id: user.id, email: user.email } },
    jwtSecret,
    { expiresIn: expiresIn }
  );
  return jwtToken;
};

const verifyUserToken = async(req, resp, next) => {
    let token = req.headers.authorization;
    if (!token)
      return resp.status(401).json({error: "Access Denied / Unauthorized request"});

    try {
        token = token.split(" ")[1];
        if (token === "null" || !token)
          return resp.status(401).send("Unauthorized request");

        const verifiedUser = await jwt.verify(token, jwtSecret);
        if (!verifiedUser) return resp.status(401).send("Unauthorized request");
        req.user = verifiedUser
        next();
    } catch (error) {
        resp
        .status(401)
        .json({ error: error });
    }
}

module.exports = { Register, Login, verifyUserToken };
