<script>
	const companies = [
		{
			number: '01',
			title: 'Lalo Coffee Export',
			desc: 'Sourcing 100% premium, single-origin coffee directly from local farmers to your cup.',
			bullets: [
				'Target Audience: International coffee roasters, distributors, specialty cafes, and wholesale buyers in Europe and Asia.',
				'Flagship Product: Premium coffee beans sourced directly from farms.',
				'Specialty Products: Organic, fair-trade, and high-altitude coffee varieties.'
			]
		},
		{
			number: '02',
			title: 'Lalo Bakery Solutions',
			desc: 'Providing comprehensive solutions and top-grade ingredients to ensure your bakery products stand out.',
			bullets: [
				'Target Audience: Bakeries, cafes, hotels, and food companies/industries.',
				'Key Product Lines: Bulk and commercial supplies, food ingredients, and specialty ingredients.',
				'Specialty Items: Organic, gluten-free, and health-focused ingredients.'
			]
		},
		{
			number: '03',
			title: 'Lalo Power and Hand Tools',
			desc: 'Your one-stop destination for a wide range of tools from trusted global brands.',
			bullets: [
				'Target Audience: Wholesale suppliers, retailers, construction companies, workshops, and professional contractors.',
				'Key Product Lines: Hand tools, power tools, construction tools, industrial tools, and specialty tools.',
				'Flagship Product: Professional-grade power tools.'
			]
		},
		{
			number: '04',
			title: 'Lalo Cafe & Bakery',
			desc: 'A cozy spot offering freshly brewed coffee, specialty drinks, and artisan baked goods made with quality and consistency.',
			bullets: [
				'Target Audience: Coffee lovers, local residents, and professionals.',
				'Flagship Product: Our Signature Coffee Blend.',
				'Specialty Products: Artisan pastries made from freshly baked sourdough and seasonal specialty drinks.'
			]
		},
		{
			number: '05',
			title: 'Lalo Laundry',
			desc: 'Professional laundry and dry cleaning services with a focus on speed, reliability, and attention to detail.',
			bullets: [
				'Target Audience: Local residents, busy professionals, and families.',
				'Specialty Services: Express laundry, pickup & delivery, and advanced stain-removal treatments.'
			]
		},
		{
			number: '06',
			title: 'Lalo Apartments',
			desc: 'Lalo Apartments offers well-managed, modern residential spaces designed for comfort, security, and convenience. We provide quality living environments tailored for professionals, families, and long-term residents.',
			bullets: []
		}
	];
</script>

<section class="">
	<div class="mx-auto bg-[#142938] px-4 py-16">
		<h2 class="mb-2 text-center text-2xl font-semibold text-white md:text-5xl">Our Companies</h2>
		<p class="mb-8 text-center text-base text-white">
			Each subsidiary operates with its own specialized tone but remains under the Lalo parent
			brand.
		</p>
	</div>
	<div class="mx-auto max-w-5xl rounded-2xl bg-white px-6 py-12 md:px-10">
		<!-- Main Grid Container -->
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2">
			{#each companies as c (c.number)}
				<div
					class="group relative flex flex-col gap-4 rounded-xl border border-dashed border-[#c98e7a]/20 bg-gradient-to-b from-transparent to-[#c98e7a]/5 p-6 transition-all duration-300 hover:border-[#c98e7a]/50 hover:shadow-md"
				>
					<!-- Creative Corner Border Accent (Top Right) -->
					<div
						class="absolute top-0 right-0 h-8 w-8 rounded-tr-xl border-t-2 border-r-2 border-[#c98e7a]/0 transition-all duration-300 group-hover:border-[#c98e7a]/40"
					></div>

					<!-- Header Section -->
					<div class="relative flex items-center gap-4">
						<!-- Giant, stylized background number -->
						<span
							class="font-serif text-5xl leading-none font-black tracking-tighter text-[#c98e7a] opacity-90 select-none md:text-6xl"
						>
							{c.number}
						</span>

						<!-- Title -->
						<h3 class="text-xl font-bold tracking-tight text-[#142938] md:text-2xl">
							{c.title}
						</h3>
					</div>

					<!-- Content Divider Line -->
					<div
						class="h-[1px] w-12 bg-[#c98e7a]/40 transition-all duration-300 group-hover:w-full"
					></div>

					<!-- Description & Bullets -->
					<div class="flex h-full flex-col justify-between">
						<p class="mb-5 text-sm leading-relaxed text-[#142938]/80 md:text-base">
							{c.desc}
						</p>

						<!-- Elegant, clean custom bullet list -->
						<ul class="space-y-3">
							{#each c.bullets as b}
								<li class="flex items-start text-sm text-[#142938] md:text-base">
									<!-- Sleek minimal dot marker -->
									<span
										class="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c98e7a] transition-transform duration-300 group-hover:scale-125"
									></span>
									<span class="opacity-90">{b}</span>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
