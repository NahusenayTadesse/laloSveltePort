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
	<div
		class="mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-t-2xl bg-white px-4 py-10 md:grid-cols-2"
	>
		{#each companies as c (c.number)}
			<div class="flex flex-col gap-2">
				<div class="mb-2 flex items-center gap-4">
					<span class="text-7xl font-bold text-[#c98e7a]">{c.number}</span>
					<span class="text-2xl font-semibold text-[#142938]">{c.title}</span>
				</div>
				<p class="mb-2 text-base text-[#142938]">{c.desc}</p>
				<ul class="list-disc pl-6 text-base text-[#142938]">
					{#each c.bullets as b}<li>{b}</li>{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
