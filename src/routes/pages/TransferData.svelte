<script>
	import Card from "../components/Card.svelte";
	import bvbank from '$lib/assets/bvbank.png'

</script>

<div class="text-white flex flex-col justify-center grid gap-4">

    <Card
        title="Hướng dẫn đăng nhập bằng ID"
        description="ID chỉ sử dụng được 1 lần.
                    Sau khi đăng nhập, ID sẽ hết hạn trong vòng 48 tiếng. ID hết hạn sẽ không đăng nhập lại được nữa. Để chuyển đổi tài khoản giữa các thiết bị cần tạo ID mớI."
        opt='3'
    />

    <Card
        title="Bước 1"
        description="Ấn vô nút menu."
        image={{ url: 'tutorial/screenshot_1.png', alt: `1` }}
        opt='4'
    />

    <Card
        title="Bước 2"
        description="Dịch sơ sơ từng nút:
        1. Truyền dữ liệu giữa các thiết bị
        2. Liên hệ hỗ trợ
        3. Xóa bộ nhớ đệm (cache)
        4. Xóa dữ liệu game (xóa luôn tài khoản đang ở trong máy)"
        image={{ url: 'tutorial/screenshot_2.png', alt: `2` }}
        opt='4'
    />

    <Card
        title="Bước 3"
        description="Dịch sơ sơ từng nút:
        1. Đăng nhập cùng hệ điều hành bằng tài khoản GooglePlay (Android) hoặc Game Center (iOS)
        2. Đăng nhập khác hệ điều hành bằng ID chuyển đổi"
        image={{ url: 'tutorial/screenshot_3.png', alt: `3` }}
        opt='4'
    />

    <Card
        title="Bước 4"
        description="Nhập ID vào từng dòng:
        1. Dòng trên là ID chuyển đổi
        2. Dòng dưới là mật khẩu"
        image={{ url: 'tutorial/screenshot_4.png', alt: `4` }}
        opt='4'
    />

    <Card
        title="Bước 5"
        description="Định dạng ID:
        ID chuyển đổi: chuỗi 16 ký tự và không có khoảng trắng
        Mập khẩu: chuỗi từ 8-16 ký tự"
        image={{ url: 'tutorial/screenshot_5.png', alt: `5` }}
        opt='4'
    />

    <Card
        title="Bước 6"
        description="Hiện lên bảng thông tin tài khoản, nếu không hiện có nghĩa là ID không hợp lệ.
        ID không hợp lệ có thể là:
        1. ID chuyển đổi hoặc mật khẩu sai định dạng
        2. ID hết hạn"
        image={{ url: 'tutorial/screenshot_6.png', alt: `6` }}
        opt='4'
    />

    <Card
        title="Bước 7"
        description='Hiện lên bảng nhắc nhở. Dịch sơ sơ là:

        "Chuyển đổi dữ liệu thành công.
        ID và mật khẩu trong lần đăng nhập này không được sử dụng thêm lần nữa. Nếu bạn muốn chuyển đổi dữ liệu lần nữa, vui lòng thực hiện việc chuyển đổi trong mục chuyển dữ liệu (ở trong game)"
        
        Ấn vô game là được rồi nha.'
        image={{ url: 'tutorial/screenshot_7.png', alt: `7` }}
        opt='4'
    />
            
	
</div>


