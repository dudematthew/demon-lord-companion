'use client';

import { Payment, columns } from './columns';
import { DataTable } from './data-table';

function getData() {
	const payments: Payment[] = [
		{
			id: '728ed52f',
			name: 'Goblin',
			page: '167 Shadow',
		},
		{
			id: '489e1d42',
			name: 'Orc',
			page: '247 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Troll',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Ogre',
			page: '412 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Harpy',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Harvester',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Killing Mist',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Large Spider',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Lash Crawler',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Leshy',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Living Tar',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Manticore',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Mimic',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Minotaur',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Mummy',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Naga',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Ooze',
			page: '412 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Owlbear',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Peryton',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Phantom',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Pixie',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Rat Swarm',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Revenant',
			page: '312 Shadow',
		},
		{
			id: 'e3a4d0d8',
			name: 'Rust Monster',
			page: '412 Shadow',
		},
		{
			id: 'f1c7e3c7',
			name: 'Sahuagin',
			page: '312 Shadow',
		},
	];

	return payments;
}

export default function NPCs() {
	const data = getData();
	return (
		<div className='h-full'>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
