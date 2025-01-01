<script lang="ts">
	import Footer from '~/components/layout/Footer.svelte';
	import Navbar from '~/components/layout/Navbar.svelte';

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />
