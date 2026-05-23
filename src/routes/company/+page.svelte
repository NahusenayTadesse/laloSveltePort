<script>
	import { Store, Truck } from '@lucide/svelte';

	const subsidiaries = [
		{
			title: 'Lalo Coffee Export',
			desc: 'Sourcing 100% premium, single-origin coffee directly from local farmers to your cup.',
			bullets: ['Export', 'Coffee', 'Local Farmers']
		},
		{
			title: 'Lalo Bakery Solutions',
			desc: 'High-quality bakery solutions and top-grade sourced ingredients.',
			bullets: ['Bakery', 'Solutions', 'Food Industry']
		},
		{
			title: 'Lalo Power & Hand Tools',
			desc: 'A wide range of professional hand and power tools from trusted brands.',
			bullets: ['Hand Tools', 'Power Tools', 'Construction']
		},
		{
			title: 'Lalo Cafe & Bakery',
			desc: 'Fresh coffee and artisan baked goods, served with quality and consistency.',
			bullets: ['Cafe', 'Bakery', 'Signature Blend']
		},
		{
			title: 'Lalo Laundry',
			desc: 'Reliable laundry & delivery, so you’re always at your best.',
			bullets: ['Laundry', 'Delivery', 'Care']
		},
		{
			title: 'Lalo Apartments',
			desc: 'Modern, managed residential living designed for comfort and security.',
			bullets: ['Apartments', 'Living', 'Comfort']
		}
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

<div class="min-h-screen bg-[#f6f7fa]">
	<section class="relative flex h-[70vh] w-full items-center justify-center">
		<img
			src="/hero-bg.jpg"
			alt="Our Companies"
			class="absolute inset-0 z-0 h-full w-full object-cover object-center"
		/>
		<div class="absolute inset-0 z-10 bg-black/50" />
		<div
			class="relative z-20 flex w-full flex-col items-center justify-center px-4 text-center md:flex-row md:gap-10 md:text-left"
		>
			<h1 class="mb-2 text-3xl font-bold text-white md:text-7xl">Our Companies</h1>
			<p class="max-w-2xl text-lg font-light text-white md:text-2xl">
				A diversified group of specialized businesses operating under one trusted brand.
			</p>
		</div>
	</section>

	<section class="bg-white py-10">
		<div class="mx-auto max-w-5xl px-4">
			<h2 class="mb-2 text-center text-xl font-bold md:text-5xl">Our Subsidiaries</h2>
			<p class="mx-auto mb-8 max-w-2xl text-center text-xs md:text-lg">
				Lalo operates through five specialized subsidiaries, each designed to serve a distinct
				market segment. We bring the best of local and global expertise to every operation.
			</p>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each subsidiaries as s (s.title)}
					<div
						class="flex min-h-45 flex-col items-start justify-center rounded-lg bg-[#c98e7a] px-8 py-8 shadow"
					>
						<h3 class="mb-2 text-xl font-semibold text-[#142938]">
							{s.title}
						</h3>
						<p class="mb-2 text-base font-light text-[#142938]">
							{s.desc}
						</p>
						<ul class="mb-4 list-disc pl-5 text-base text-[#142938]">
							{#each s.bullets as b (b)}
								<li>{b}</li>
							{/each}
						</ul>
						<a
							href="/about"
							class="mt-auto rounded bg-[#142938] px-6 py-2 text-xs font-medium text-white transition-colors hover:bg-[#1a364a]"
						>
							Learn More
						</a>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="bg-white py-10">
		<div class="mx-auto max-w-4xl px-4">
			<h3 class="mb-8 text-center text-3xl font-semibold">Operations</h3>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				{#each operations as op (op.title)}
					<div class="flex flex-col items-center rounded-lg border bg-white p-6 shadow">
						<div class="mb-4 text-[#142938]"><op.icon class="h-6 w-6" /></div>
						<h4 class="mb-2 text-lg font-semibold">{op.title}</h4>
						<p class="text-center text-base font-light">{op.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
