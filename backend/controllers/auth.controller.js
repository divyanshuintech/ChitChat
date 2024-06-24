import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (!fullName || !userName || !password || !confirmPassword || !gender) {
      return res.status(400).json({
        error: "Please enter complete details!",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        error: "Passwords don't match!",
      });
    }

    const user = await User.findOne({ userName });

    if (user) {
      return res.status(400).json({
        error: "username already exists!",
      });
    }

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //profile picture
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "Invalid User Data!",
      });
    }
  } catch (error) {
    console.log("Error in signup controller\n", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!userName || !password) {
      res.status(400).json({
        error: "Please enter complete details",
      });
    }

    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({
        error: "Invalid username or password!",
      });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller\n", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in logout controller\n", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
