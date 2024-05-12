'use client';

import { trpc } from '~/app/_lib/_trpc/client';
import { Button } from './ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';

const ClientComponent: React.FC = () => {
	const [helloResult] = trpc.useQueries(t => [t.getHello()]);

	const { data: session, status } = useSession();

	return (
		<div className='flex flex-row justify-center w-full'>
			<h1>
				{helloResult.isLoading ? 'Loading...' : helloResult.data}
				{session ? (
					<Button onClick={() => signOut()}>Logout</Button>
				) : (
					<Button onClick={() => signIn('google')}>
						Zaloguj się przez Google
					</Button>
				)}
			</h1>
			<br />
		</div>
	);
};

export default ClientComponent;
