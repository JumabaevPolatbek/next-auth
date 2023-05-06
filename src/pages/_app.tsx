import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import AppBar from '@/components/Appbar';
function App({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider session={pageProps.session}>
			<AppBar>
				<Component {...pageProps} />
			</AppBar>
		</SessionProvider>
	);
}
export default App;
