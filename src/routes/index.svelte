<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import PacketEncapsulationViz from '$lib/PacketEncapsulationViz.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<PacketEncapsulationViz />
</section>

<style>

</style>
