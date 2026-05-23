<script lang="ts">
	import './layout.css';
	import { page, updated } from '$app/state';
	import { ProgressBar } from '@prgm/sveltekit-progress-bar';

	import { fly } from 'svelte/transition';
	import { Toaster } from 'svelte-sonner';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// This initializes the class and puts it into Svelte's context

	let { children } = $props();

	// async function requestNotificationPermission() {
	// 	if (!('Notification' in window)) return;
	// 	await Notification.requestPermission();
	// }
	// let iconify = $state('h-6 w-6 animate-ping');
	// $effect(() => {
	// 	if (!$flash) return;
	// 	if (page.data.flash?.type === 'success') toast.success($flash.message);
	// 	if (page.data.flash?.type === 'error') toast.error($flash?.message);

	// 	if (Notification.permission === 'granted') {
	// 		notifyBrowser(
	// 			page.data.flash?.type === 'success'
	// 				? 'Success'
	// 				: page.data.flash?.type === 'error'
	// 					? 'Error'
	// 					: 'Message',
	// 			$flash.message
	// 		);
	// 	}

	// 	$flash = undefined;
	// });
</script>

<svelte:head><link rel="icon" href="/logo.png" /></svelte:head>

<Toaster position="bottom-right" richColors closeButton />
<ProgressBar color="#bc3d00" zIndex={1000} />

{#if !page.url.pathname.startsWith('/dashboard')}
	<Header />
	{@render children()}
	<Footer />
{:else}
	{@render children()}
{/if}
