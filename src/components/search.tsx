import { Search } from 'lucide-react';

export function SearchField() {
	return (
		<div className='mt-10 max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='relative'>
				<input
					type='text'
					className='p-4 block w-full border border-gray-400 rounded-full text-sm text-gray-500 placeholder-gray-500 bg-zinc-100 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-400 dark:text-neutral-400 dark:placeholder-neutral-400 dark:focus:ring-neutral-600'
					placeholder='Informe a sua localização...'
				/>
				<div className='absolute top-1/2 end-2 -translate-y-1/2'>
					<button
						type='button'
						className='size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-white dark:bg-neutral-800'
					>
						<Search className='w-5 h-5' />
					</button>
				</div>
			</div>
		</div>
	);
}
