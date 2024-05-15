import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: '/',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              email: { label: "Email", type: "email"},
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials){
                    return null
                }
                if(credentials.email === 'thaisventura@gmail.com' && credentials.password === '123456'){
                    return {
                        id: '1',
                        name: 'Thais',
                        email: 'thaisventura@gmail.com'
                    }
                }
                   return null
            }
          })

    ]
})

export { handler as GET, handler as POST }