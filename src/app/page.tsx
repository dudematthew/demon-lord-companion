'use client';

import ClientComponent from '~/components/ClientComponent';
import ServerComponent from '~/components/ServerComponent';
import { ModeToggle } from '~/components/ui/mode-toggle';
import { Button } from '~/components/ui/button';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { auth, authOptions } from './api/auth/[...nextauth]/route';
import {
	ResizablePanel,
	ResizablePanelGroup,
	ResizableHandle,
} from '~/components/ui/resizable';
import Navbar from '~/components/navbar';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '~/components/ui/dialog';
import Calculators from '~/components/calculators/calculators';
import { useState } from 'react';
import Library from '~/components/library/library';

// export default async function Home() {
//   const session = await getServerSession(authOptions);
//   return (
//     <main className="flex flex-col items-center justify-center w-full h-screen gap-y-5">
//       {/* <h1 className="font-bold text-xl">Welcome {session?.user?.name ?? 'Guest'}.</h1> */}
//       <code>{JSON.stringify(session)}</code>
//       <ClientComponent/>
//       <ServerComponent />
//       <ModeToggle />
//     </main>
//   );
// }

export default function Index() {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const togglePanel = (collapsed: boolean) => {
		setIsCollapsed(collapsed);
	};

	return (
		<>
			<ResizablePanelGroup direction='horizontal' className='w-screen'>
				<ResizablePanel
					defaultSize={4}
					minSize={12}
					maxSize={12}
					collapsedSize={4}
					onExpand={() => togglePanel(false)}
					onCollapse={() => togglePanel(true)}
					collapsible
					className='h-screen overflow-y-auto'
				>
					<Navbar isCollapsed={isCollapsed}></Navbar>
				</ResizablePanel>

				<ResizableHandle withHandle />

				<ResizablePanel
					defaultSize={20}
					minSize={17}
					className='h-screen w-full'
				>
					<Library />
				</ResizablePanel>

				<ResizableHandle withHandle />

				<ResizablePanel
					defaultSize={40}
					minSize={25}
					className='h-screen max-w-full overflow-y-auto'
				>
					<div className='flex flex-col gap-2 h-full items-center justify-center p-6'>
						<span className='font-semibold'>Initiative</span>
						<span className='text-center'>
							This is where the initiative tracker will be
							located. It will have many cool features such as
							tracking queue, states, hit points, etc.
						</span>
					</div>
				</ResizablePanel>

				<ResizableHandle withHandle />

				<ResizablePanel
					defaultSize={25}
					minSize={10}
					className='h-screen max-w-full overflow-y-auto'
				>
					<div className='flex flex-col h-full items-center justify-center p-6'>
						<span className='font-semibold'>
							Information about the entity.
						</span>
						<span className='text-center'>
							This is where all the control buttons related to the
							currently selected entity will be located. Below
							will be the detailed statistics and description.
						</span>
						<Calculators></Calculators>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</>
	);
}
