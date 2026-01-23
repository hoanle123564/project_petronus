
document.addEventListener('DOMContentLoaded', function () {
    // nút lọc 
    const filterLinks = document.querySelectorAll('.section-6 .project-nav a');
    // item hiển thị mỗi nút lọc
    const projectItems = document.querySelectorAll('.section-6 .project-col');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // chặn reload trang do thẻ a
            e.preventDefault();

            // loại bỏ tất cả các class active ra khỏi các nút lọc ( đường link )
            filterLinks.forEach(l => l.classList.remove('active'));

            // Thêm class active vào nút lọc được click
            this.classList.add('active');

            // Lấy giá trị filter
            const filterValue = this.getAttribute('data-filter');

            // Lọc các item dựa trên giá trị filter
            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                    item.style.display = ''; // sử dụng mặc định display của css 
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none';
                }
            });

            // Refresh AOS animations
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
    });
});
