<script>
	import {
		Shield,
		Award,
		Leaf,
		Users,
		Handshake,
		Lightbulb,
		CheckCircle,
		Target
	} from '@lucide/svelte';

	const values = [
		{
			title: 'Integrity',
			desc: 'We conduct all business with honesty, transparency, and ethical practices across our across our supply chain.',
			icon: Shield
		},
		{
			title: 'Quality',
			desc: 'We are committed to delivering high-quality coffee and importing reliable, trusted products.',
			icon: Award
		},
		{
			title: 'Sustainability',
			desc: 'Supporting environmentally responsible farming, fair trade principles, and long-term ecological balance.',
			icon: Leaf
		},
		{
			title: 'Community Empowerment',
			desc: 'Uplifting local farmers, creating opportunities, and contributing to regional economic development.',
			icon: Users
		},
		{
			title: 'Partnership',
			desc: 'Building strong, respectful relationships with producers, suppliers, and international international buyers.',
			icon: Handshake
		},
		{
			title: 'Innovation',
			desc: 'Continuously improving processes, logistics, and services to remain efficient competitive.',
			icon: Lightbulb
		},
		{
			title: 'Accountability',
			desc: 'Taking responsibility for our actions and consistently delivering on our commitments.',
			icon: CheckCircle
		},
		{
			title: 'Customer Focus',
			desc: 'Prioritizing the needs of our clients and striving to exceed expectations in every service.',
			icon: Target
		}
	];
</script>

<section class="bg-[#f3f4f7] px-4 py-20 md:px-10">
	<div class="mx-auto max-w-7xl">
		<h2 class="mb-16 text-center text-3xl font-bold text-[#1a1a1a]">Our Core Values</h2>

		<div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
			<div class="pointer-events-none absolute inset-0 hidden lg:block">
				<div class="absolute left-1/4 h-full w-px bg-gray-300"></div>
				<div class="absolute left-2/4 h-full w-px bg-gray-300"></div>
				<div class="absolute left-3/4 h-full w-px bg-gray-300"></div>
			</div>

			<div
				class="absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gray-300 lg:block"
			></div>
			{#each values as v, i (v.title)}
				<div
					class={`flex flex-col items-start p-8 transition-all duration-300 ${i < 4 ? 'lg:pb-12' : 'lg:pt-12'} border-b border-gray-300 last:border-none lg:border-none`}
				>
					<div class="mb-6 rounded-lg bg-[#112131] p-3 text-white shadow-lg">
						<v.icon class="h-6 w-6" />
					</div>

					<h3 class="mb-3 text-xl leading-tight font-bold text-[#1a1a1a]">{v.title}</h3>
					<p class="max-w-60 text-sm leading-relaxed text-gray-600">{v.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
