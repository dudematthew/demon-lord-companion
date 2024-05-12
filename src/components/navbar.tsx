'use client';

import { Separator } from '~/components/ui/separator';
import User from './user/user';
import { ModeToggle } from './ui/mode-toggle';
import { Button } from './ui/button';
import { Settings, Hammer } from 'lucide-react';
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

export default function Navbar({ isCollapsed }: { isCollapsed: boolean }) {
	return (
		<>
			<div
				className={`flex flex-col gap-2 h-full p-3 justify-between text-sm`}
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
							className={`flex gap-3 w-full items-center ${isCollapsed ? 'flex-col' : ''}`}
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
													<Hammer className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
												</Button>
											</TooltipTrigger>
											<TooltipContent side='right'>
												<p>Tools</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
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
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-3'>
					<div
						className={`flex gap-3 w-full items-center ${isCollapsed ? 'flex-col' : ''}`}
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
												<Settings className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100' />
											</Button>
										</TooltipTrigger>
										<TooltipContent side='right'>
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
								<TooltipContent side='right'>
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
}
