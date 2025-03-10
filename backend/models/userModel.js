import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        "Invalid email format",
      ],
    },
    img: {
      type: String,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);
// const User = mongoose.model('User', userSchema);
// export default User;
//             OR
export default mongoose.model("User", userSchema);
