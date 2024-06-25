<script>
	import Button from '../components/Button.svelte';
    import Grid from '../components/Grid.svelte'
    import imageData from '$lib/165_data.json'; // your data source


	let activePage = 'Games';
	function setActivePage(page) {
		activePage = page;
	}

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-10 md:py-20">
	<h1 class="mb-8 text-white font-semibold text-4xl">Projects</h1>

	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<Button
			label="Games"
			active={activePage === 'Games'}
			onClick={() => setActivePage('Games')} />
		<Button
			label="Websites"
			active={activePage === 'Websites'}
			onClick={() => setActivePage('Websites')} />
		<Button
			label="Tools"
			active={activePage === 'Tools'}
			onClick={() => setActivePage('Tools')} />
	</div>

    <Grid {imageData} />


	<!-- {#if activePage === 'Websites'}
		<Websites/>
	{:else if activePage === 'Games'}
		<Games/>
	{:else if activePage === 'Tools'}
		<Tools/>
	{/if} -->
</div>
