import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import type {AuthOptions} from 'next-auth'
export const authOptions:AuthOptions = {
	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: 'd65170dd9918118f7cc4',
			clientSecret:
				'beaf7301c6c06c5374b356485eee92a260ce2947',
		}),
		// ...add more providers here
	],
	// secret: 'f97c215b445c6747df0099a6c7d56a18',
    pages:{
        signIn:'/login'
    }
};
export default NextAuth(authOptions);
