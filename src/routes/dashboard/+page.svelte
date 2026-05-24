<script lang="ts">
	import ContactMessages from './contact.svelte';

	let { data } = $props();

	const messages = $derived(data?.messages);
</script>

<ContactMessages readForm={data?.readForm} deleteForm={data?.deleteForm} {messages} />
