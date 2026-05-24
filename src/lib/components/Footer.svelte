<script>
	import { IconBrandFacebook, IconBrandX, IconBrandLinkedin } from '@tabler/icons-svelte';
	import { Mail, Phone, MapPin } from '@lucide/svelte';

	const navLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About us', href: '/about' },

		{ name: 'Subsidiaries', href: '/company' },
		{ name: 'Contact us', href: '/contact' }
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
			icon: IconBrandLinkedin,
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
							class="bg-opacity-10 hover:bg-opacity-30 rounded-full p-2 transition-all"
							aria-label={s.name}
						>
							<s.icon class="h-4 w-4 " />
						</a>
					{/each}
				</div>
				<div>
					<h4 class="mb-4 flex gap-2 font-semibold"><MapPin /> Location</h4>
					<section class="relative h-32 w-full">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6989163918774!2d38.74450221007991!3d8.999827389408697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8513494db273%3A0x88235dbe171c4224!2sDiplomat%20Building!5e0!3m2!1sen!2set!4v1772532021053!5m2!1sen!2set"
							style="border:0;"
							class="w-full rounded-3xl"
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="Map"
						></iframe>
					</section>
				</div>
			</div>
		</div>

		<div class="border-opacity-20 mb-6 w-full border-t border-white"></div>

		<div class="mb-2 flex w-full flex-col items-center justify-between gap-6 md:flex-row">
			<div class="flex flex-col items-center gap-6 text-xs text-gray-200 md:flex-row">
				<a href="mailto:hello@mohammedlaloie.com" class="flex items-center gap-2">
					<Mail class="h-4 w-4 text-blue-400" />
					hello@mohammedlaloie.com
				</a>
				<a href="tel:+251912154982" class="flex items-center gap-2">
					<Phone class="h-4 w-4 text-blue-400" />
					+251 912 154 982
				</a>
				<a href="https://maps.app.goo.gl/HdGXRftoF6cJrZm26" class="flex items-center gap-2">
					<MapPin class="h-4 w-4 text-blue-400" />
					Addis Ababa, Ethiopia
				</a>
			</div>
			<span class="text-xs text-gray-400"
				>© {new Date().getFullYear()} Lalo PLC. All rights reserved.</span
			>
		</div>
	</div>
</footer>
