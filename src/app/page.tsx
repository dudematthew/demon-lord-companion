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
import { Settings } from 'lucide-react';

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
			<ResizablePanelGroup
				direction='horizontal'
				className='h-screen max-h-screen w-screen max-w-screen'
			>
				<ResizablePanel
					defaultSize={4}
					minSize={10}
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
					minSize={15}
					className='h-screen max-w-full overflow-y-auto'
				>
					<div className='flex flex-col gap-2 h-full items-center justify-center p-6'>
						<span className='font-semibold'>Biblioteka</span>
						<span className='text-center'>
							Tutaj znajdować się będzie biblioteka zasobów do
							wybrania i edytowania. Zawierać będzie - NPC -
							Potwory - Przedmioty - Encountery - Zaklęcia
						</span>
					</div>
				</ResizablePanel>

				<ResizableHandle withHandle />

				<ResizablePanel
					defaultSize={40}
					minSize={25}
					className='h-screen max-w-full overflow-y-auto'
				>
					<div className='flex flex-col gap-2 h-full items-center justify-center p-6'>
						<span className='font-semibold'>Inicjatywa</span>
						<span className='text-center'>
							Tutaj znajdować się będzie tracker inicjatywy. Wiele
							różnych fajnych możliwości takich jak trackowanie
							kolejki, stanów, punktów życia, itp.
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
							Informacje na temat bytu.
						</span>
						<span className='text-center'>
							Tutaj znajdować się będą wszelkie przyciski
							kontrolne dotyczące aktualnie wybranego bytu.
							Poniżej pokazane będą dokładne statystyki i opis.
						</span>
						<Calculators></Calculators>
					</div>
				</ResizablePanel>
			</ResizablePanelGroup>
		</>
	);
}
