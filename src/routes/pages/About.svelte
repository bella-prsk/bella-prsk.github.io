<script>
	import Card from '../components/Card.svelte'
	
	import price from '$lib/assets/PJSK Reroll 2024.png'
	import bvbank from '$lib/assets/bvbank.png'
	import momo from '$lib/assets/momo.png'

</script>

<div class="text-white flex flex-col justify-center">
	<img src={price} alt='price list' class="w-full h-full"/>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">


		<Card
			title="Tài khoản ngân hàng"
			description="Tài khoản: 0687041147289 hoặc bella
						Tên tài khoản: VU NGUYEN PHUONG VY
						Ngân hàng Bản Việt (BVBank)"
			image={{ url: bvbank, alt: `bvbank` }}
			opt='4'
		/>

		<Card
			title="Tài khoản MOMO"
			description="Tài khoản: 0905124616
						Tên tài khoản: VŨ NGUYỄN PHƯƠNG VY
						Ví điện tử MOMO"
			image={{ url: momo, alt: `momo` }}
			opt='4'
		/>


	</div>

	
</div>


