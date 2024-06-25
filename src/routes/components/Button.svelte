<script>
	export let label = 'Button';
	export let active = false;
	export let onClick = () => {};
</script>

<style>
</style>

<button
	class="flex items-center transition duration-300 ease-in-out text-white font-normal py-4 px-6 text-xl
         {active ? 'bg-navy-700' : 'bg-navy-900'} hover:bg-navy-700" on:click={onClick}>
	{label}
</button>