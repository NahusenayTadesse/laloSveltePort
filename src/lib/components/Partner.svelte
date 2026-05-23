<script>
	import { Store, Truck } from '@lucide/svelte';

	const partners = [
		{ name: 'ECOM', img: '/spo1.png' },
		{ name: 'LDC', img: '/spo2.png' },
		{ name: 'T', img: '/spo3.png' },
		{ name: 'Falcon Coffees', img: '/spo4.png' }
	];

	const operations = [
		{
			icon: Store,
			title: 'Distribution',
			desc: 'Each brand operates through its own dedicated shop.'
		},
		{
			icon: Truck,
			title: 'Logistics',
			desc: 'We provide full delivery and logistics information to ensure a seamless customer experience.'
		}
	];
</script>

<section class="bg-[#f6f7fa] py-16">
	<div class="mx-auto px-4">
		<h2 class="mb-4 text-center text-2xl font-bold text-[#142938] md:text-3xl">
			Partners & Logistics
		</h2>
		<p class="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 md:text-base">
			We collaborate with industry leaders to ensure the highest standards of trade. Our major
			partners in the coffee sector include:
		</p>

		<div class="mb-10 flex justify-center">
			<a
				href="/about"
				class="transform rounded-full bg-[#142938] px-8 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1a364a] md:text-base"
			>
				Our Global Network
			</a>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-10 bg-white py-8 md:gap-20">
			{#each partners as p (p.name)}
				<div class="flex items-center justify-center grayscale transition-all hover:grayscale-0">
					<img src={p.img} alt={p.name} class="h-20 w-auto object-contain md:h-32" />
				</div>
			{/each}
		</div>
	</div>

	<div class="mx-auto mt-16 max-w-4xl px-4">
		<h3 class="mb-10 text-center text-2xl font-bold text-[#142938]">Operations</h3>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			{#each operations as op (op.title)}
				<div
					class="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
				>
					<div class="mb-4 rounded-full bg-blue-50 p-3 text-[#142938]"><op.icon /></div>
					<h4 class="mb-3 text-lg font-bold">{op.title}</h4>
					<p class="text-center text-sm leading-relaxed font-light text-gray-500 md:text-base">
						{op.desc}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
