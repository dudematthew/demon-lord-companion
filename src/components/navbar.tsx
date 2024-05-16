'use client';

import { Separator } from '~/components/ui/separator';
import User from './user/user';
import { ModeToggle } from './ui/mode-toggle';
import { Button } from './ui/button';
import {
	Settings,
	Hammer,
	CirclePlay,
	Eraser,
	View,
	SkipForward,
	Save,
	LucideIcon,
} from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from './ui/tooltip';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '~/components/ui/dialog';
import { ReactNode } from 'react';

export default function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
	return (
		<>
			<div
				className={`flex flex-col gap-2 h-full py-3 px-1 justify-between text-sm`}
			>
				<div
					className={`flex flex-col gap-1 ${isCollapsed ? 'items-center' : ''}`}
				>
					<div className='flex gap-2 w-full items-center my-1'>
						<img
							src='/logoBlack.png'
							alt='Logo'
							className='w-12 block dark:hidden'
						/>
						<img
							src='/logoWhite.png'
							alt='Logo'
							className='w-12 hidden dark:block'
						/>
						{isCollapsed || (
							<span className='font-semibold text-ellipsis'>
								Demon Lord Companion
							</span>
						)}
					</div>
					<Separator className='my-2'></Separator>
					<div className='flex flex-col gap-3'>
						<div
							className={`flex gap-2 w-full items-center flex-wrap ${isCollapsed ? 'flex-col' : ''}`}
						>
							<Dialog>
								<DialogTrigger className='w-full'>
									<NavbarButton
										name='Start Encounter'
										isCollapsed={isCollapsed}
									>
										<Hammer className='h-full w-full'></Hammer>
									</NavbarButton>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>
											Are you absolutely sure?
										</DialogTitle>
										<DialogDescription>
											This action cannot be undone. This
											will permanently delete your account
											and remove your data from our
											servers.
										</DialogDescription>
									</DialogHeader>
								</DialogContent>
							</Dialog>
							<TooltipProvider>
								<NavbarButton
									name='Start Encounter'
									isCollapsed={isCollapsed}
								>
									<CirclePlay className='h-full w-full'></CirclePlay>
								</NavbarButton>
							</TooltipProvider>
							<NavbarButton
								name='Next Turn'
								isCollapsed={isCollapsed}
							>
								<SkipForward className='h-full w-full' />
							</NavbarButton>
							<NavbarButton
								name='Clean Encounter'
								isCollapsed={isCollapsed}
							>
								<Eraser className='h-full w-full' />
							</NavbarButton>
							<NavbarButton
								name='Save Encounter'
								isCollapsed={isCollapsed}
							>
								<Save className='h-full w-full' />
							</NavbarButton>
							<Dialog>
								<DialogTrigger className='w-full'>
									<NavbarButton
										name='Launch Player View'
										isCollapsed={isCollapsed}
									>
										<View className='h-full w-full'></View>
									</NavbarButton>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>
											Work in progress
										</DialogTitle>
										<DialogDescription>
											We are currently working on this
											feature. Please come back someday.
										</DialogDescription>
									</DialogHeader>
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<div
						className={`flex gap-2 w-full items-center ${isCollapsed ? 'flex-col' : ''}`}
					>
						<Dialog>
							<DialogTrigger>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<Button
												variant='outline'
												size='icon'
											>
												<Settings className='h-[1.2rem] w-[1.2rem]' />
											</Button>
										</TooltipTrigger>
										<TooltipContent
											side={isCollapsed ? 'right' : 'top'}
										>
											<p>Settings</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Settings</DialogTitle>
									<DialogDescription>
										Here will be the settings for the app.
									</DialogDescription>
								</DialogHeader>
							</DialogContent>
						</Dialog>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<ModeToggle />
								</TooltipTrigger>
								<TooltipContent
									side={isCollapsed ? 'right' : 'top'}
								>
									<p>Theme</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<Separator></Separator>
					<User isCollapsed={isCollapsed}></User>
				</div>
			</div>
		</>
	);

	function NavbarButton({
		children,
		name = 'Sample Text',
		isCollapsed,
	}: {
		children: ReactNode;
		name: string;
		isCollapsed: boolean;
	}) {
		if (isCollapsed)
			return (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Button variant='outline' size='icon'>
								<span className='h-5 w-5'>{children}</span>
							</Button>
						</TooltipTrigger>
						<TooltipContent side='right'>
							<p>{name}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			);
		else
			return (
				<Button
					variant='outline'
					size='lg'
					className='w-full text-xs px-2 flex gap-2 text-start justify-start'
				>
					<span className='h-[1.2rem] w-[1.2rem]'>{children}</span>
					{name}
				</Button>
			);
	}
}
