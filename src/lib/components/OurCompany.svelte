<script>
	import {
		Coffee,
		Microwave,
		Croissant,
		Globe,
		WashingMachine,
		Utensils,
		Building
	} from '@lucide/svelte';

	let partners = [
		{
			name: 'Lalo Coffee Exports',
			description:
				'Global commodity supply chain coordination and international logistics management.',
			icon: Coffee,
			short: 'LAL_EXP'
		},

		{
			name: 'Lalo Laundry',
			description:
				'Commercial-scale linen and textile services for major hospitality and industrial clients.',
			icon: WashingMachine,
			short: 'LAL_LAU'
		},
		{
			name: 'Lalo Bakery Solutions',
			description:
				'Advanced commercial equipment, ingredients, and operational workflows for high-volume bakeries.',
			icon: Microwave,
			short: 'LAL_BAK'
		},
		{
			name: 'Lalo Bakery',
			description:
				'A bakery experience focused on handcrafted pastries, expertly brewed coffee, and high-quality ingredients sourced with care.',
			icon: Croissant,
			short: 'LAL_BAK'
		},
		{
			name: 'Lalo Cafe',
			description:
				'Curated beverage and food services integrated within corporate and commercial environments.',
			icon: Utensils,
			short: 'LAL_CAF'
		},
		{
			name: 'Lalo Apartments',
			description:
				'Comprehensive residential property management services encompassing leasing, maintenance, and daily administrative operations.',
			icon: Building,
			short: 'LAL_APT'
		},
		{
			name: 'Fahem General Trading',
			description:
				'Diversified international trade operations across key industrial and material sectors.',
			icon: Globe,
			short: 'FAH_GEN'
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
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:gap-8">
			{#each partners as p (p)}
				<div
					class="group border-border bg-card hover:border-primary/30 relative flex flex-col gap-5 overflow-hidden rounded-2xl border p-8 transition-all duration-300 ease-in-out hover:shadow-xl"
				>
					<div
						class="bg-primary absolute inset-x-0 top-0 h-1 opacity-0 transition group-hover:opacity-100"
					></div>

					<div class="flex items-center justify-between">
						<div
							class="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-full"
						>
							<p.icon class="size-7" />
						</div>
					</div>

					<div class="grow space-y-2">
						<p class="text-foreground text-2xl font-semibold tracking-tight">{p.name}</p>
						<p
							class="text-muted-foreground line-clamp-2 text-sm leading-relaxed group-hover:line-clamp-none"
						>
							{p.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
