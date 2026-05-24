<script lang="ts">
	type ContactMessage = {
		id: number;
		name: string;
		email: string;
		phone?: string;
		subject?: string;
		message?: string;
		address?: string;
		seen?: boolean;
		createdAt?: Date | number | string;
	};

	import type { DeleteTestimonial as schema, MarkRead as readSchema } from './schema';
	import type { Infer, SuperValidated } from 'sveltekit-superforms';

	import Read from './read.svelte';
	import Delete from './delete.svelte';

	let {
		messages = [],
		deleteForm,
		readForm
	}: {
		messages: ContactMessage[];
		deleteForm: SuperValidated<Infer<schema>>;
		readForm: SuperValidated<Infer<readSchema>>;
	} = $props();
</script>

<div class="min-h-screen bg-[#0f1f2c] p-6 text-white">
	<div class="mx-auto max-w-7xl">
		<!-- Header -->
		<div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<h1 class="text-3xl font-bold tracking-tight">Contact Messages</h1>

				<p class="mt-1 text-sm text-slate-400">Customer inquiries and support requests</p>
			</div>

			<div class="flex gap-4">
				<div class="rounded-2xl bg-[#142938] px-5 py-3 shadow-lg">
					<p class="text-xs text-slate-400">Total</p>
					<p class="text-2xl font-bold">{messages.length}</p>
				</div>

				<div class="rounded-2xl bg-[#1a2e3b] px-5 py-3 shadow-lg">
					<p class="text-xs text-slate-400">Unread</p>
					<p class="text-2xl font-bold">
						{messages.filter((m) => !m.seen).length}
					</p>
				</div>
			</div>
		</div>

		<!-- Cards -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
			{#each messages as message (message.id)}
				<div
					class={`group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
						message.seen ? 'border-slate-700 bg-[#142938]' : 'border-cyan-500/30 bg-[#1a2e3b]'
					}`}
				>
					<!-- unread glow -->
					{#if !message.seen}
						<div
							class="absolute top-4 right-4 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
						></div>
					{/if}

					<div class="p-6">
						<!-- Top -->
						<div class="mb-5 flex items-start gap-4">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-700 text-lg font-bold text-white uppercase"
							>
								{message.name.charAt(0)}
							</div>

							<div class="min-w-0 flex-1">
								<div class="flex items-center gap-2">
									<h2 class="truncate text-lg font-semibold text-white">
										{message.name}
									</h2>

									{#if message.seen}
										<span
											class="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400"
										>
											Seen
										</span>
									{:else}
										<span
											class="rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-300"
										>
											New
										</span>
									{/if}
								</div>

								<p class="truncate text-sm text-slate-400">
									{message.email}
								</p>

								{#if message.phone}
									<p class="mt-1 text-xs text-slate-500">
										{message.phone}
									</p>
								{/if}
							</div>
						</div>

						<!-- Subject -->
						<div class="mb-4">
							<p class="mb-1 text-xs tracking-wider text-slate-500 uppercase">Subject</p>

							<h3 class="text-base font-semibold text-slate-100">
								{message.subject}
							</h3>
						</div>

						<!-- Message -->
						<div class="mb-5">
							<p class="line-clamp-5 text-sm leading-relaxed text-slate-300">
								{message.message}
							</p>
						</div>

						<!-- Footer -->
						<div class="flex items-center justify-between border-t border-slate-700 pt-4">
							<div>
								{#if message.address}
									<p class="truncate text-xs text-slate-500">
										📍 {message.address}
									</p>
								{/if}
							</div>

							<p class="text-xs text-slate-500">
								{new Date(message?.createdAt).toLocaleString()}
							</p>
						</div>
					</div>
					<div class="flex flex-row gap-4 p-4">
						<Read data={readForm} id={message.id} />
						<Delete action="?/delete" data={deleteForm} id={message.id} />
					</div>

					<!-- hover effect -->
					<div
						class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:bg-white/2"
					></div>
				</div>
			{/each}
		</div>

		<!-- Empty State -->
		{#if messages.length === 0}
			<div
				class="mt-20 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-[#142938] py-20 text-center"
			>
				<div class="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#1a2e3b]">
					📭
				</div>

				<h3 class="text-xl font-semibold text-white">No Messages Yet</h3>

				<p class="mt-2 text-sm text-slate-400">New contact inquiries will appear here.</p>
			</div>
		{/if}
	</div>
</div>
