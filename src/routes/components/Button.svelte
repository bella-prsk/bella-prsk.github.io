<script>
	import { navigate } from 'svelte-routing';

	export let label = 'Button';
	export let active = false;
	export let to = '';

	function handleClick() {
    if (to) {
      navigate(to); 
    }

    if (typeof onClick === 'function') {
      onClick();
    }
  }
</script>

<style>
</style>

<button
	class="flex items-center transition duration-300 ease-in-out text-white font-normal py-4 px-6 text-xl
         {active ? 'bg-navy-700' : 'bg-navy-900'} hover:bg-navy-700" on:click={handleClick}>
	{label}
</button>