<script>
	import Card from "../components/Card.svelte";

</script>

<div class="text-white flex flex-col justify-center grid gap-4">

    <Card
        title="Hướng dẫn tạo ID mới"
        description="ID mới nếu chưa được sử dụng sẽ không bị hết hạn."
        opt='3'
    />

    <Card
        title="Bước 1"
        description="Ấn vô nút menu."
        image={{ url: 'tutorial/screenshot_10.jpg', alt: `10` }}
        opt='4'
    />

    <Card
        title="Bước 2"
        description="Ấn vô nút chuyển dữ liệu."
        image={{ url: 'tutorial/screenshot_11.jpg', alt: `2` }}
        opt='4'
    />

    <Card
        title="Bước 3"
        description="Dịch sơ sơ từng nút:
        1. Liên kết vô tài khoản GooglePlay (Android) hoặc Game Center (iOS)
        2. Tạo ID chuyển dữ liệu mới nếu khác hệ điều hành."
        image={{ url: 'tutorial/screenshot_12.jpg', alt: `12` }}
        opt='4'
    />

    <Card
        title="Bước 4"
        description="Nhập mật khẩu từ 8-16 ký tự."
        image={{ url: 'tutorial/screenshot_13.jpg', alt: `13` }}
        opt='4'
    />

    <Card
        title="Bước 5"
        description="Ấn nút để tạo ID mới."
        image={{ url: 'tutorial/screenshot_14.jpg', alt: `14` }}
        opt='4'
    />

    <Card
        title="Bước 6"
        description="Nếu hiện lên nút này có nghĩa là tài khoản này đang liên kết với một ID khác (vẫn còn hạn để xài lại mà đã xài để đăng nhập nên chắc chắn sẽ hết hạn nha), ấn OK để tạo ID mới."
        image={{ url: 'tutorial/screenshot_15.jpg', alt: `15` }}
        opt='4'
    />

    <Card
        title="Bước 7"
        description='ID mới đã được tạo, ấn nút để copy ra ngoài. Lưu lại để tránh mất tài khoản.'
        image={{ url: 'tutorial/screenshot_16.jpg', alt: `16` }}
        opt='4'
    />



            
	
</div>


