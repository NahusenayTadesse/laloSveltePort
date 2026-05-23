<script>
	import { User, Sparkles, Globe } from '@lucide/svelte';

	const features = [
		{
			icon: User,
			title: 'Our Identity',
			desc: 'Lalo Import and Export (Lalo General Trading) operates as a unified identity across the diverse sectors, serving both B2B and B2C markets.'
		},
		{
			icon: Sparkles,
			title: 'The Lalo Difference',
			desc: 'We strive the need for quality, reliability, and convenience, helping businesses and individuals access top products that improve their daily operations and lives.'
		},
		{
			icon: Globe,
			title: 'Global Reach',
			desc: 'While rooted in Ethiopia, we serve both local and international markets with a robust distribution network.'
		}
	];
</script>

<section class="flex flex-col items-center bg-gray-50 py-20">
	<div class="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
		{#each features as f (f.title)}
			<div
				class="flex min-h-100 flex-col items-start rounded-xl bg-[#142938] p-8 text-white shadow-xl transition-transform hover:-translate-y-2"
			>
				<div class="mb-8 rounded-xl border border-white/30 bg-white/5 p-4"><f.icon /></div>

				<div class="grow">
					<h3 class="mb-4 text-xl leading-tight font-bold md:text-2xl">{f.title}</h3>
					<p class="mb-8 text-sm leading-relaxed font-light text-gray-300 md:text-base">
						{f.desc}
					</p>
				</div>

				<a
					href="/about"
					class="mt-auto rounded-md bg-[#c98e7a] px-8 py-3 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#b87c65]"
				>
					Learn More
				</a>
			</div>
		{/each}
	</div>
</section>
