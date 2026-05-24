<script>
	import About from '$lib/components/About.svelte';
	import CoreValues from '$lib/components/CoreValues.svelte';
	import Feature from '$lib/components/Feature.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import OurCompany from '$lib/components/OurCompany.svelte';
	import Partner from '$lib/components/Partner.svelte';
</script>

<svelte:head>
	<title>Lalo Trading | Premium Coffee & Global Trade Solutions</title>
	<meta
		name="description"
		content="Lalo Exports & Imports connects the world with the finest local coffee and premium global goods. Discover our sustainable producer-to-market trading partnerships."
	/>
	<link rel="canonical" href="https://mohammedlaloie.com/" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mohammedlaloie.com/" />
	<meta property="og:title" content="Lalo Trading | Premium Coffee & Global Trade Solutions" />
	<meta
		property="og:description"
		content="Lalo Exports & Imports connects the world with the finest local coffee and premium global goods. Discover our sustainable producer-to-market trading partnerships."
	/>
	<meta property="og:image" content="https://mohammedlaloie.com/images/og-home.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://mohammedlaloie.com/" />
	<meta name="twitter:title" content="Lalo Trading | Premium Coffee & Global Trade Solutions" />
	<meta
		name="twitter:description"
		content="Lalo Exports & Imports connects the world with the finest local coffee and premium global goods."
	/>
	<meta name="twitter:image" content="https://mohammedlaloie.com/images/og-home.jpg" />
</svelte:head>
<div>
	<Hero />
	<Feature />
	<About />
	<CoreValues />
	<OurCompany />
	<Partner />
</div>
