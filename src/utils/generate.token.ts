import jwt from "jsonwebtoken";

const generateWebToken = (
  payload: { name: string; email: string },
  duration?: string
): string | false => {
  try {
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "default_secret_key",
      {
        expiresIn: duration || "1h",
      }
    );
    return token;
  } catch (error) {
    console.log("error");
    return false;
  }
};

export default generateWebToken;
