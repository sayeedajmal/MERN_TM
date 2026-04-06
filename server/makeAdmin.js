import dotenv from "dotenv";
import mongoose from "mongoose";
import readline from "readline";
import User from "./models/userModel.js";

// Load environment variables
dotenv.config();

// Check if MONGODB_URI exists
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in your .env file!");
  process.exit(1);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Database connected for Admin Provisioning.");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

const makeAdmin = async () => {
  await connectDB();

  console.log("\n--- PROMOTE USER TO ADMIN ---");
  rl.question("Enter the email address of the user to promote: ", async (email) => {
    
    // Quick validation
    if (!email || email.trim() === "") {
        console.log("❌ Email cannot be empty.");
        mongoose.connection.close();
        rl.close();
        return;
    }

    try {
      const user = await User.findOne({ email: email.trim().toLowerCase() });

      if (!user) {
        console.log(`\n❌ User with email '${email}' not found.`);
        console.log("Did you register this account on the frontend first?");
      } else if (user.isAdmin) {
        console.log(`\n⚠️ User '${email}' is already an Admin.`);
      } else {
        user.isAdmin = true;
        await user.save();
        console.log(`\n🌟 SUCCESS! User '${user.name}' (${email}) has been promoted to Admin rules.`);
      }
    } catch (error) {
      console.error("\n❌ Error promoting user:", error);
    } finally {
      mongoose.connection.close();
      rl.close();
    }
  });
};

makeAdmin();
