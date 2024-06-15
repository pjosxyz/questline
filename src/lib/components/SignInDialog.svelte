<script lang="ts">
	import { createDialog } from 'svelte-headlessui';
	import Transition from 'svelte-transition';
	import { signInWithGoogle } from '$lib/supabase';

	const dialog = createDialog({ label: 'Payment Success' });


</script>

<button
	type="button"
	class="max-h-18 flex items-center rounded-3xl bg-indigo-500 px-12 py-6 text-lg font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
	on:click={dialog.open}>Get started</button
>

<div class="relative z-10">
	<Transition show={$dialog.expanded}>
		<Transition
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<button class="fixed inset-0 bg-black bg-opacity-25" on:click={dialog.close} />
		</Transition>

		<div class="fixed inset-0 overflow-y-auto">
			<div class="flex min-h-full items-center justify-center p-4 text-center">
				<Transition
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<div
						class="flex w-full max-w-md transform flex-col overflow-hidden rounded-2xl bg-neutral-800 p-6 shadow-xl transition-all"
						use:dialog.modal
					>
						<h3 class="mb-14 text-2xl font-medium leading-6 text-neutral-200">
							Sign in and start questin'
						</h3>
						<button
							type="button"
							class="max-h-18 flex items-center justify-center rounded-3xl bg-indigo-500 px-12 py-6 text-lg font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
							on:click={signInWithGoogle}>Sign in with Google</button
						>
						<div class="mt-4">
							<button type="button" class="text-neutral-400" on:click={dialog.close}>
								Cancel
							</button>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	</Transition>
</div>
