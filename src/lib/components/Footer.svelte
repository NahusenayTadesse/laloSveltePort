<script>
	import { IconBrandFacebook, IconBrandX, IconBrandLinkedIn } from '@tabler/icons-svelte';
	import { Mail, Phone, MapPin } from '@lucide/svelte';

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'Our Company', href: '/company' },
		{ name: 'About', href: '/about' },
		{ name: 'Partners & Logistics', href: '/partners-logistics' },
		{ name: 'Contact', href: '/contact' }
	];

	const socials = [
		{
			name: 'Facebook',
			icon: IconBrandFacebook,
			link: '#'
		},
		{
			name: 'Twitter',
			icon: IconBrandX,
			link: '#'
		},
		{
			name: 'LinkedIn',
			icon: IconBrandLinkedIn,
			link: '#'
		}
	];
</script>

<footer class="relative bg-[#142938] py-16 text-white">
	<div class="absolute inset-0 h-full w-full">
		<img
			src="/footer-bg.jpg"
			alt="Footer background"
			class="h-full w-full object-cover object-center opacity-40"
		/>
	</div>

	<div class="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4">
		<div class="mb-6 flex w-full flex-col items-center justify-between gap-4 md:flex-row">
			<div class="flex flex-col items-center gap-6 md:flex-row">
				<div class="mb-2 text-lg font-light tracking-widest md:mb-0">LALO</div>
				<nav class="flex flex-wrap gap-4 text-xs">
					{#each navLinks as link (link.name)}
						<a href={link.href} class="hover:underline">
							{link.name}
						</a>
					{/each}
				</nav>
			</div>

			<div class="flex flex-col items-center gap-2 md:flex-row md:gap-4">
				<span class="mb-1 text-xs text-gray-300 md:mb-0">Stay Connected</span>
				<div class="flex gap-3">
					{#each socials as s (s.name)}
						<a
							href={s.link}
							class="bg-opacity-10 hover:bg-opacity-30 rounded-full bg-white p-2 transition-all"
							aria-label={s.name}
						>
							<s.icon class="h-4 w-4 " />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<div class="border-opacity-20 mb-6 w-full border-t border-white" />

		<div class="mb-2 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
			<div class="flex flex-col items-center gap-6 text-xs text-gray-200 md:flex-row">
				<span class="flex items-center gap-2">
					<Mail class="h-4 w-4 text-blue-400" />
					hello@lalo.com
				</span>
				<span class="flex items-center gap-2">
					<Phone class="h-4 w-4 text-blue-400" />
					+251 912 154 982
				</span>
				<span class="flex items-center gap-2">
					<MapPin class="h-4 w-4 text-blue-400" />
					Addis Ababa, Ethiopia
				</span>
			</div>
			<span class="text-xs text-gray-400"
				>© {new Date().getFullYear()} Lalo PLC. All rights reserved.</span
			>
		</div>
	</div>
</footer>
