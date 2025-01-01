const { z } = require('zod');

// Define the Zod schema for admin signup validation
const signupSchema = z.object({
    email: z.string().email(),            // Validate email format
    password: z.string().min(6),          // Validate password length (e.g., minimum 6 characters)
    firstName: z.string().min(1),         // Validate first name is not empty
    lastName: z.string().min(1)           // Validate last name is not empty
});

// Export the schema
module.exports = { signupSchema };

