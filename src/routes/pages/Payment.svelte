<script>
	import Card from '../components/Card.svelte'
</script>

<div class="text-white flex flex-col justify-center">

	<Card
		title="Thanh toán bằng thẻ điện thoại"
		description="Inbox facebook mình để biết giá chiết khấu, với lại mình thường ưu tiên thẻ Vinaphone hơn."
		opt='3'
	/>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
		<Card
			title="Tài khoản ngân hàng"
			description="Tài khoản: 0687041147289 hoặc bella
						Tên tài khoản: VU NGUYEN PHUONG VY
						Ngân hàng Bản Việt (BVBank)"
			image={{ url: 'assets/bvbank.png', alt: `bvbank` }}
			opt='4'
		/>

		<Card
			title="Tài khoản MOMO"
			description="Tài khoản: 0905124616
						Tên tài khoản: VŨ NGUYỄN PHƯƠNG VY
						Ví điện tử MOMO"
			image={{ url: 'assets/momo.png', alt: `momo` }}
			opt='4'
		/>
	</div>

	
</div>


