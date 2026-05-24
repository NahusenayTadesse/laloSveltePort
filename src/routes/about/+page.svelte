<script>
	import AboutHero from '$lib/components/AboutHero.svelte';
	import HowWeOperate from '$lib/components/HowWeOperate.svelte';
	import MissionVision from '$lib/components/MissionVision.svelte';
	import OurStory from '$lib/components/OurStory.svelte';
	import WhoWeAre from '$lib/components/WhoWeAre.svelte';
	import AboutCoreValues from '$lib/components/AboutCoreValues.svelte';
</script>

<svelte:head>
	<title>About Lalo | Our Journey from Coffee Trading to Global Logistics</title>
	<meta
		name="description"
		content="Rooted in coffee trading, Lalo has grown into a diversified trading company building consistent, long-term partnerships between producers and international markets."
	/>
	<link rel="canonical" href="https://mohammedlaloie.com/about" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mohammedlaloie.com/about" />
	<meta
		property="og:title"
		content="About Lalo | Our Journey from Coffee Trading to Global Logistics"
	/>
	<meta
		property="og:description"
		content="Rooted in coffee trading, Lalo has grown into a diversified trading company building consistent, long-term partnerships."
	/>
	<meta property="og:image" content="https://mohammedlaloie.com/images/og-about.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta
		name="twitter:title"
		content="About Lalo | Our Journey from Coffee Trading to Global Logistics"
	/>
	<meta
		name="twitter:description"
		content="Rooted in coffee trading, Lalo has grown into a diversified trading company building consistent, long-term partnerships."
	/>
</svelte:head>
<div>
	<AboutHero />
	<WhoWeAre />
	<OurStory />
	<MissionVision />
	<AboutCoreValues />
	<HowWeOperate />
</div>
