<script>
	import { Router, Route } from 'svelte-routing';
	
	import Button from '../components/Button.svelte';
    import Grid from '../components/Grid.svelte'

	import About from './About.svelte'

    import jpDataOne from '$lib/165_data.json'; 
    import jpDataTwo from '$lib/145_data.json'; 
    import globalData from '$lib/global_data.json'; 
    import starterData from '$lib/starter_data.json'; 
	import TransferData from './TransferData.svelte';
	import SaveData from './SaveData.svelte';

</script>

<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-10 md:py-20">
	<!-- <h1 class="mb-8 text-white font-semibold text-4xl">Preview</h1> -->

	<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
		<Button label="Thông tin" to="/" />
		<Button label="JP 165k+ đá" to="/jp-1" />
		<Button label="JP 154k+ đá" to="/jp-2" />
		<Button label="ENG 90k+ đá" to="/eng-1" />
		<Button label="Starter limit hết đá" to="/starter" />
		<Button label="Hướng dẫn đăng nhập" to="/transfer" />
		<Button label="Hướng dẫn tạo ID" to="/create" />
	</div>

	<Router>
		<Route path="/">
			<About/>
		</Route>

		<Route path="/jp-1">
			<Grid imageData={jpDataOne} />
		</Route>

		<Route path="/jp-2">
			<Grid imageData={jpDataTwo} />
		</Route>

		<Route path="/eng-1">
			<Grid imageData={globalData} />
		</Route>

		<Route path="starter">
			<Grid imageData={starterData} />
		</Route>

		<Route path="/transfer">
			<TransferData/>
		</Route>

		<Route path="/create">
			<SaveData/>
		</Route>
	</Router>

</div>
