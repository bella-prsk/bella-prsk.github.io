<script>
	export let label = 'Button';
	export let active = false;
	export let onClick = () => {};
</script>

<style>
    .icon {
		width: 50px;
		height: auto;
        transition: filter 0.3s ease-in-out;
    }

    .icon-inactive {
        filter: grayscale(100%); /* Gray filter for inactive state */
    }
</style>

<button
	class="flex items-center transition duration-300 ease-in-out text-white font-normal py-4 px-6 text-xl
         {active ? 'bg-navy-700' : 'bg-navy-900'} hover:bg-navy-700" on:click={onClick}>
	{label}
</button>