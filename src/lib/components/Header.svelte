<script>
	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About us', href: '/about' },

		{ name: 'Subsidiaries', href: '/company' },
		{ name: 'Contact us', href: '/contact' }
	];

	let menuOpen = $state(false);
</script>

<header class="fixed top-0 left-0 z-50 w-full bg-[#142938] text-white">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
		<a href="/" class="text-2xl font-light tracking-widest">
			<img src="/logo.png" class="h-10 invert" alt="Lalo" />
		</a>

		<nav class="hidden space-x-8 text-sm md:flex">
			{#each navLinks as link (link.name)}
				<a href={link.href} class="hover:underline">
					{link.name}
				</a>
			{/each}
		</nav>

		<button
			class="focus:outline-none md:hidden"
			onclick={() => (menuOpen = true)}
			aria-label="Open menu"
		>
			<svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<div class="bg-opacity-95 fixed inset-0 z-50 flex flex-col bg-[#142938]">
			<div class="flex items-center justify-between px-6 py-4">
				<div class="text-lg font-light tracking-widest">LALO</div>
				<button
					class="focus:outline-none"
					onclick={() => (menuOpen = false)}
					aria-label="Close menu"
				>
					<svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path d="M6 6l12 12M6 18L18 6" />
					</svg>
				</button>
			</div>
			<nav class="mt-4 flex flex-col items-end space-y-4 px-10 text-xs">
				{#each navLinks as link (link.name)}
					<a href={link.href} class="hover:underline">
						{link.name}
					</a>
				{/each}
			</nav>
		</div>
	{/if}
</header>
