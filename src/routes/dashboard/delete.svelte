<script lang="ts">
	import { Loader, Trash } from '@lucide/svelte';

	import type { DeleteTestimonial as schema } from './schema';

	import type { Infer, SuperValidated } from 'sveltekit-superforms';
	import { superForm } from 'sveltekit-superforms';

	let {
		data,
		action = '/dashboard/customers?/addCustomer',
		id
	}: {
		data: SuperValidated<Infer<schema>>;
		action: string;
		id: number;
	} = $props();

	const { form, enhance, delayed, message } = superForm(data, {
		resetForm: false
	});
	import { toast } from 'svelte-sonner';

	$effect(() => {
		if ($message) {
			if ($message.type === 'error') {
				toast.error($message.text);
			} else {
				toast.success($message.text);
			}
		}
	});

	$form.id = id;

	let open = $state(false);
</script>

<button
	onclick={() => (open = !open)}
	class="text-whitetransition rounded-md border border-white/20 bg-red-500 p-1 hover:bg-zinc-200"
>
	<Trash class="size-5" />
</button>

<!-- Popover -->
{#if open}
	<div
		class="absolute right-0 z-50 mt-3 w-80 rounded-xl border border-white/10 bg-white p-5 text-black shadow-2xl"
	>
		<h3 class="text-lg font-semibold">Delete</h3>

		<p class="mt-2 text-sm text-zinc-600">
			Are you sure you want to delete this item? This action is irreversible.
		</p>

		<div class="mt-5 flex items-center justify-end gap-3">
			<button
				type="button"
				onclick={() => (open = false)}
				class="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
			>
				Cancel
			</button>

			<form method="post" id="delete" action="?/delete" use:enhance>
				<input bind:value={$form.id} name="id" type="hidden" />

				<button
					type="submit"
					class="flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800"
				>
					{#if $delayed}
						<Loader class="size-4 animate-spin" />
						Deleting...
					{:else}
						<Trash class="size-4" />
						Delete
					{/if}
				</button>
			</form>
		</div>
	</div>
{/if}
