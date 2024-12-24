import jwt from "jsonwebtoken";

const generateWebToken = (
  payload: { id: string; name: string; email: string },
  duration?: string
) => {
  try {
    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "default_secret_key",
      {
        expiresIn: duration || "1h",
      }
    );
    return token;
  } catch {
    return false;
  }
};

export default generateWebToken;
