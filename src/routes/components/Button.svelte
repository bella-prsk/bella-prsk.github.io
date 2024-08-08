<script>
	export let label = 'Button';
	export let url = '';
	export let currentUrl = '';

	let active = false;
	
	$: if (currentUrl === url) {
		active = true;
	} else {
		active = false;
	}
	
</script>

<style>
</style>

<a
	class="flex items-center transition duration-300 ease-in-out font-normal py-2 px-4 text-white text-sm lg:text-base
         {active ? 'bg-navy-700' : 'bg-navy-900'} hover:bg-navy-700" href={url}>
	{label}
</a>
