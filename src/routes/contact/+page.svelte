<script lang="ts">
	import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok } from '@tabler/icons-svelte';
	import { MailIcon, MessageCircleIcon, SendIcon, PhoneIcon, Loader } from '@lucide/svelte';

	import { superForm } from 'sveltekit-superforms/client';
	import { toast } from 'svelte-sonner';

	let { data } = $props();
	const { form, errors, enhance, delayed, message } = superForm(data.form, {
		dataType: 'json'
	});

	// Social links
	const socialLinks = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/lalobakerysolution?igsh=MTZ1eDNldHl3OW9iNw%3D%3D&utm_source=qr',
			icon: IconBrandInstagram,
			color: 'hover:text-pink-500'
		},
		{
			name: 'TikTok',
			url: 'https://www.tiktok.com/@lalobakerysolution?_r=1&_t=ZM-91WtG5hY5VY',
			icon: IconBrandTiktok,
			color: 'hover:text-black dark:hover:text-white'
		},
		{
			name: 'Facebook',
			url: 'https://facebook.com',
			icon: IconBrandFacebook,
			color: 'hover:text-blue-600'
		},
		{
			name: 'Telegram',
			url: 'https://t.me/LaloBakery',
			icon: MessageCircleIcon,
			color: 'hover:text-blue-400'
		}
	];

	// Contact info
	const contactInfo = [
		{
			icon: MailIcon,
			label: 'Email',
			value: 'info@mohammedlaloie.com',
			href: 'mailto:info@mohammedlaloie.com'
		},
		{
			icon: PhoneIcon,
			label: 'WhatsApp',
			value: 'Contact us on WhatsApp',
			href: 'https://wa.me/'
		}
	];

	$effect(() => {
		if ($message) {
			if ($message.type === 'error') toast.error($message.text);
			else {
				toast.success($message.text);
			}
		}
	});
</script>

<svelte:head>
	<title>Contact Lalo Exports & Imports | Global Partner Inquiries</title>
	<meta
		name="description"
		content="Get in touch with Lalo Exports & Imports. Partner with us for premium coffee sourcing, commodity trading, and international market distribution."
	/>
	<link rel="canonical" href="https://mohammedlaloie.com/contact" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mohammedlaloie.com/contact" />
	<meta property="og:title" content="Contact Lalo Exports & Imports | Global Partner Inquiries" />
	<meta
		property="og:description"
		content="Get in touch with Lalo Exports & Imports. Partner with us for premium coffee sourcing, commodity trading, and international market distribution."
	/>
	<meta property="og:image" content="https://mohammedlaloie.com/images/og-contact.jpg" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Contact Lalo Exports & Imports | Global Partner Inquiries" />
	<meta
		name="twitter:description"
		content="Get in touch with Lalo Exports & Imports for premium coffee sourcing and international trade."
	/>
</svelte:head>
{#snippet fe(
	label = '',
	name = '',
	type = '',
	placeholder = '',
	required = false,
	min = '',
	max = ''
)}
	<div class="flex w-full flex-col justify-start gap-2">
		<label for={name}>{label}</label>
		{#if type === 'textarea'}
			<textarea
				{name}
				{placeholder}
				{required}
				bind:value={$form[name]}
				class="resize-none rounded-md border border-gray-400 bg-transparent p-3 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-400 focus:outline-none"
				aria-invalid={$errors[name] ? 'true' : undefined}
			></textarea>
		{:else}
			<input
				{type}
				{name}
				{placeholder}
				{required}
				{min}
				class="rounded-md border border-gray-400 bg-transparent p-3 placeholder:text-gray-400 focus:ring-1 focus:ring-slate-400 focus:outline-none"
				{max}
				bind:value={$form[name]}
				aria-invalid={$errors[name] ? 'true' : undefined}
			/>
		{/if}
		{#if $errors[name]}
			<span class="text-red-500">{$errors[name]}</span>
		{/if}
	</div>
{/snippet}

<section class="relative w-full overflow-hidden">
	<div
		class="absolute inset-0 z-0 bg-slate-900"
		style="backgroundImage: url('/contact-hero.jpg');
					backgroundSize: 'cover';
					backgroundPosition: 'center';"
	></div>

	<div class="absolute inset-0 z-10 bg-black/40"></div>

	<div class="relative z-20 mx-auto w-full px-8 py-16 md:py-24 lg:py-32">
		<div
			class="flex flex-col items-center justify-center md:flex-row md:items-center md:gap-12 lg:gap-20"
		>
			<h2
				class="text-4xl font-bold tracking-tight whitespace-nowrap text-white sm:text-5xl lg:text-6xl"
			>
				Contact Us
			</h2>

			<p class="mt-4 max-w-sm text-lg leading-snug text-slate-200 md:mt-0 md:text-lg lg:text-lg">
				Let's discuss your needs and how we can work together.
			</p>
		</div>
	</div>
</section>

<div class="bg-background text-foreground min-h-dvh w-full transition-colors">
	<!-- Main Content -->
	<main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-4xl font-bold sm:text-5xl">Get in Touch</h2>
		</div>

		<div class="grid gap-8 lg:grid-cols-1">
			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<div class="rounded-xl border-2 bg-white shadow-sm">
					<div class="border-b p-6">
						<h2 class="text-2xl font-bold">Send us a Message</h2>
						<p class="mt-2 text-sm text-gray-500">
							Fill out the form below and we'll get back to you as soon as possible.
						</p>
					</div>

					<div class="p-6">
						<!-- Your form goes here -->

						<form class="space-y-6" action="?/contact" method="POST" use:enhance>
							{#if $message}
								<div
									class:success={$message.type === 'success'}
									class:error={$message.type === 'error'}
									class="message"
								>
									{$message.text}
								</div>
							{/if}

							{@render fe('Name', 'name', 'text', 'Enter Your Name', true)}
							{@render fe('Email Address', 'email', 'email', 'your@email.com', true)}
							{@render fe('Phone Number', 'phoneNumber', 'tel', '+251 901020304', true)}
							{@render fe('Subject', 'subject', 'text', 'What is this about?', true)}
							{@render fe(
								'Message',
								'contactMessage',
								'textarea',
								'Tell us more about your inquiry...',
								true
							)}

							<!-- Message -->

							<!-- Submit Button -->
							<button
								type="submit"
								class="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#1a2e3b] px-16 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#121f28] max-sm:w-full"
							>
								{#if $delayed}
									<Loader class="h-4 w-4 animate-spin" />
									Sening Message
								{:else}
									<SendIcon class="h-4 w-4" />
									Send Message
								{/if}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</main>
</div>

<style>
	.message {
		padding: 12px 16px;
		margin-top: 12px;
		border-radius: 8px;
		font-size: 14px;
		font-weight: 500;
		border: 1px solid transparent;
		transition: all 0.2s ease;
	}

	.success {
		background-color: #ecfdf3;
		color: #027a48;
		border-color: #abefc6;
	}

	.error {
		background-color: #fef3f2;
		color: #b42318;
		border-color: #fecdca;
	}
</style>
