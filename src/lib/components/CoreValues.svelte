<script>
	import { Users, ShieldCheck, Target } from '@lucide/svelte';

	const values = [
		{
			icon: Users,
			title: 'Customer Focus',
			desc: 'Putting partners and clients at the center of what we do'
		},
		{
			icon: ShieldCheck,
			title: 'Integrity',
			desc: "Doing what's right, reliably and honestly."
		},
		{
			icon: Target,
			title: 'Practical Impact',
			desc: 'Delivering tangible, meaningful results'
		}
	];
</script>

<section class="mx-auto max-w-5xl bg-white px-4 py-20">
	<h2 class="mb-12 text-center text-3xl font-bold text-[#142938] md:text-4xl">Our Core Values</h2>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
		{#each values as v (v.title)}
			<div
				class="group flex flex-col items-start rounded-2xl border border-gray-400 bg-white p-8 transition-all hover:border-blue-100"
			>
				<div class="mb-6 rounded-xl bg-blue-50 p-3 text-[#142938] transition-colors duration-300">
					<v.icon class="h-6 w-6" />
				</div>

				<h3 class="mb-3 text-xl font-bold text-[#142938]">{v.title}</h3>

				<p class="leading-relaxed font-light text-gray-600">{v.desc}</p>
			</div>
		{/each}
	</div>
</section>
