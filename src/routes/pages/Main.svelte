<script>
	import Button from '../components/Button.svelte';
    import Grid from '../components/Grid.svelte'

	import About from './About.svelte'

    import jpDataOne from '$lib/165_data.json'; 
    import jpDataTwo from '$lib/145_data.json'; 
    import globalData from '$lib/global_data.json'; 
    import starterData from '$lib/starter_data.json'; 

	import TransferData from './TransferData.svelte';
	import SaveData from './SaveData.svelte';
	import Payment from './Payment.svelte';

	let activePage = '0';
	function setActivePage(page) {
		activePage = page;
	}

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-10 md:py-20">
	<!-- <h1 class="mb-8 text-white font-semibold text-4xl">Preview</h1> -->

	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<Button
			label="Thông tin"
			active={activePage === '0'}
			onClick={() => setActivePage('0')} />
		<Button
			label="Thanh toán"
			active={activePage === '7'}
			onClick={() => setActivePage('7')} />
		<Button
			label="JP 165k+ đá"
			active={activePage === '1'}
			onClick={() => setActivePage('1')} />
		<Button
			label="JP 155k+ đá"
			active={activePage === '2'}
			onClick={() => setActivePage('2')} />
		<Button
			label="ENG 90k+ đá"
			active={activePage === '3'}
			onClick={() => setActivePage('3')} />
		<Button
			label="Starter limit hết đá"
			active={activePage === '6'}
			onClick={() => setActivePage('6')} />
		<Button
			label="Hướng dẫn đăng nhập"
			active={activePage === '4'}
			onClick={() => setActivePage('4')} />
		<Button
			label="Hướng dẫn tạo ID"
			active={activePage === '5'}
			onClick={() => setActivePage('5')} />
		
	</div>

	{#if activePage === '0'}
		<About/>

	{:else if activePage === '1'}
		<Grid imageData={jpDataOne} />

	{:else if activePage === '2'}
		<Grid imageData={jpDataTwo} />

	{:else if activePage === '3'}
		<Grid imageData={globalData} />

	{:else if activePage === '4'}
		<TransferData/>

	{:else if activePage === '5'}
		<SaveData/>

	{:else if activePage === '6'} 
		<Grid imageData={starterData} />

	{:else if activePage === '7'} 
		<Payment/>

	{/if}

</div>