import bcrypt from "bcryptjs";
import { hash } from "crypto";

export const passwordService = {
  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  },

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  },
};
