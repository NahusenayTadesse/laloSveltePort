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

<svelte:head>
	<title>Lalo Subsidiaries | Diversified Global Trade Portfolio</title>
	<meta
		name="description"
		content="Explore Lalo's network of subsidiaries spanning coffee production, premium goods sourcing, and regional distribution networks across international markets."
	/>
	<link rel="canonical" href="https://mohammedlaloie.com/subsidiaries" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mohammedlaloie.com/subsidiaries" />
	<meta property="og:title" content="Lalo Subsidiaries | Diversified Global Trade Portfolio" />
	<meta
		property="og:description"
		content="Explore Lalo's network of subsidiaries spanning coffee production, premium goods sourcing, and regional distribution networks."
	/>
	<meta property="og:image" content="https://mohammedlaloie.com/images/og-subsidiaries.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Lalo Subsidiaries | Diversified Global Trade Portfolio" />
	<meta
		name="twitter:description"
		content="Explore Lalo's network of subsidiaries spanning coffee production, premium goods sourcing, and regional distribution networks."
	/>
</svelte:head>
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
						class="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl border border-[#c98e7a]/20 bg-gradient-to-br from-[#c98e7a]/10 to-[#c98e7a]/30 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#142938]/5"
					>
						<div
							class="absolute top-0 left-0 h-1.5 w-0 bg-[#142938] transition-all duration-500 group-hover:w-full"
						></div>

						<div>
							<div class="mb-4 flex items-center justify-between">
								<h3 class="text-2xl font-bold tracking-tight text-[#142938]">
									{s.title}
								</h3>
								<span
									class="font-serif text-4xl text-[#142938] opacity-20 transition-opacity select-none group-hover:opacity-40"
									>/</span
								>
							</div>

							<p class="mb-6 text-sm leading-relaxed font-normal text-[#142938]/80">
								{s.desc}
							</p>

							<ul class="mb-8 space-y-3">
								{#each s.bullets as b (b)}
									<li class="flex items-start text-sm text-[#142938]/90">
										<span
											class="mt-1.5 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#142938] opacity-70"
										></span>
										<span>{b}</span>
									</li>
								{/each}
							</ul>
						</div>

						<a
							href="/about"
							class="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#142938] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#1a364a] hover:shadow-lg hover:shadow-[#142938]/20"
						>
							<span class="relative z-10 flex items-center gap-2">
								Learn More
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2.5"
									stroke="currentColor"
									class="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
									/>
								</svg>
							</span>
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
