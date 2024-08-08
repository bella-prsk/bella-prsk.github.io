<script>
	import "../app.css";
	import Footer from './pages/Footer.svelte';
	import Button from './components/Button.svelte';
	import { base } from '$app/paths';

	export let data;
	
</script>


<div class="bg-navy-900">
	<div class="bg-navy-800 max-w-6xl mx-auto">
		<div class="md:px-10 lg:px-20">
			<!-- <Presentation/> -->
			<div class="mx-4 sm:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl py-10 md:py-20">
				<div class="flex flex-wrap items-center gap-4 justify-start mb-4">
					<Button
						label="Bảng giá Reroll"
						url="{base}/about"
						currentUrl={data.url}/>
					<Button
						label="JP 165k+ đá"
						url="{base}/account/jp-xl"
						currentUrl={data.url}/>

					<Button
						label="JP 155k+ đá"
						url="{base}/account/jp-lg"
						currentUrl={data.url}/>
						
					<Button
						label="ENG 90k+ đá"
						url="{base}/account/global"
						currentUrl={data.url}/>
						
					<Button
						label="Starter limit hết đá"
						url="{base}/account/starter"
						currentUrl={data.url}/>
						
					<Button
						label="Starter limit còn đá"
						url="{base}/account/crystal"
						currentUrl={data.url}/>
						
					<Button
						label="Thanh toán"
						url="{base}/payment"
						currentUrl={data.url}/>
						
					<Button
						label="Hướng dẫn đăng nhập"
						url="{base}/guide/transfer"
						currentUrl={data.url}/>
						
					<Button
						label="Hướng dẫn tạo ID"
						url="{base}/guide/save"
						currentUrl={data.url}/>
						
				</div>

				<slot />
				
			</div>
			
			
			<Footer/>

		</div>
	</div>
</div>


