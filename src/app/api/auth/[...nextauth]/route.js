import NextAuth from "next-auth";
import User from "../../../../../models/user";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "../../../../../lib/mongoDB";
import bcrypt from "bcryptjs";
import { signOut } from "next-auth/react";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email });
                    if (!user) {
                        console.log('User not found');
                        return null;
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password);
                    if (!passwordMatch) {
                        console.log('Password does not match');
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.error('Authorize error:', error);
                    throw new Error('Authorize error');
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/',
        error: '/auth/error',
        signOut: '/',
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
