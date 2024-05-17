'use client';

import { ScrollText, Skull, Sword, Users, Wand } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Button } from '../ui/button';
import { ReactNode } from 'react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '~/components/ui/tooltip';
import { ScrollArea } from '../ui/scroll-area';

export default function Library() {
	return (
		// <div className='flex flex-col gap-2 h-full items-center justify-center p-6'>
		// 	<span className='font-semibold'>Library</span>
		// 	<span className='text-center'>
		// 		This is where the resource library for selection and editing
		// 		will be located. It will include - NPCs - Monsters - Items -
		// 		Encounters - Spells
		// 	</span>
		// </div>
		// {/* <svg
		// 				xmlns='http://www.w3.org/2000/svg'
		// 				viewBox='0 0 476.415 476.415'
		// 				className='h-[1rem] w-[1rem] fill-muted-foreground'
		// 			>
		// 				<path d='M35.287 384.137c6.649-4.78 14.932-10.079 23.825-14.314-15.956 13.168-27.499 31.401-31.197 54.852-4.845 30.759 42.147 43.967 47.032 12.965 4.69-29.759 26.491-41.838 52.137-44.219 11.77 30.385 41.204 51.958 75.742 51.958h79.254c33.896 0 62.923-20.76 75.116-50.251 1.845 1.179 3.487 2.658 5.308 4.625 1.227 1.325 3.601 7.478 4.975 13.006 1.886 7.56 1.91 15.469 1.975 23.475.268 31.433 49.04 31.466 48.771 0-.163-18.858-2.495-36.896-10.144-53.218 11.209 9.543 16.282 27.401 20.159 40.399 8.982 30.059 56.063 17.241 47.032-12.965-8.633-28.873-21.175-54.982-46.512-72.491-18.85-13.03-42.789-14.266-65.394-11.762V136.451c21.24-3.138 61.176-15.582 43.691-64.988-21.045-59.477-14.916-4.43-44.658 14.534-5.763-39.245-39.48-69.402-80.318-69.402h-79.254c-44.894 0-81.286 36.392-81.286 81.286v4.641c-15.135-6.137-33.368-20.687-34.546-55.445-1.959-57.705-88.528 145.233 34.546 117.946v155.142c-35.928-14.68-78.839-1.171-110.866 21.85-25.289 18.183-.985 60.517 24.612 42.122zm280.826-120.189h-22.646l-23.589 29.019-26.028-29.019h-22.906l-18.257 41.212s-5.934-27.109-9.803-41.212h-21.573v-14.469h144.786v14.469h.016zM246.687 60.286c47.227 0 85.521 38.286 85.521 85.521s-38.286 85.521-85.521 85.521c-45.097 0-81.96-34.937-85.204-79.205-.154-2.089-.317-4.186-.317-6.316 0-12.884 2.934-25.06 8.039-36.018 13.599-29.206 43.13-49.503 77.482-49.503z' />
		// 				<path d='M232.47 157.106c.992 33.246 6.21 58.64 12.518 58.64 6.308 0 11.518-25.386 12.518-58.64 30.767-1.032 54.039-5.771 54.039-11.469s-23.272-10.445-54.039-11.469c-.992-33.246-6.21-58.64-12.518-58.64s-11.518 25.386-12.518 58.64c-17.98.602-33.384 2.471-43.098 5.064-6.153 1.642-9.966 3.577-10.722 5.649-.089.252-.219.504-.219.756.008 5.698 23.272 10.445 54.039 11.469z' />
		// 			</svg> */}
		<Tabs defaultValue='npcs' className='h-full w-full p-2'>
			<TabsList className='w-full'>
				<TabsTrigger value='npcs'>
					<LibraryTabButton name='NPCs'>
						<Users className='h-full w-full'></Users>
					</LibraryTabButton>
				</TabsTrigger>
				<TabsTrigger value='monsters' className='text-xs'>
					<LibraryTabButton name='Monsters'>
						<Skull className='h-full w-full'></Skull>
					</LibraryTabButton>
				</TabsTrigger>
				<TabsTrigger value='items' className='text-xs'>
					<LibraryTabButton name='Items'>
						<Sword className='h-full w-full'></Sword>
					</LibraryTabButton>
				</TabsTrigger>
				<TabsTrigger value='encounters' className='text-xs'>
					<LibraryTabButton name='Encounters'>
						<ScrollText className='h-full w-full'></ScrollText>
					</LibraryTabButton>
				</TabsTrigger>
				<TabsTrigger value='spells' className='text-xs'>
					<LibraryTabButton name='Spells'>
						<Wand className='h-full w-full'></Wand>
					</LibraryTabButton>
				</TabsTrigger>
			</TabsList>

			<TabsContent value='npcs'>
				<ScrollArea className='w-full h-full'>
					NPCs content goes here.
				</ScrollArea>
			</TabsContent>

			<TabsContent value='monsters'>
				<ScrollArea className='w-full h-full'>
					Monsters content goes here.
				</ScrollArea>
			</TabsContent>

			<TabsContent value='items'>
				<ScrollArea className='w-full h-full'>
					Items content goes here.
				</ScrollArea>
			</TabsContent>

			<TabsContent value='encounters'>
				<ScrollArea className='w-full h-full'>
					Encounters content goes here.
				</ScrollArea>
			</TabsContent>

			<TabsContent value='spells'>
				<ScrollArea className='w-full h-full'>
					Spells content goes here.
				</ScrollArea>
			</TabsContent>
		</Tabs>
	);
}

function LibraryTabButton({
	children,
	name = 'Sample Text',
}: {
	children: ReactNode;
	name: string;
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<span className='h-[1rem] w-[1rem]'>{children}</span>
				</TooltipTrigger>
				<TooltipContent side='bottom'>
					<p>{name}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
