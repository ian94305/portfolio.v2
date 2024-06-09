document.addEventListener("DOMContentLoaded", function() {
    let isVersion1 = true;

    function loadData(file) {
        fetch(file)
            .then(response => response.json())
            .then(data => {
                document.getElementById('name').textContent = data.name;
                document.getElementById('title').textContent = data.title;
                document.getElementById('address').textContent = data.address;
                document.getElementById('phone').textContent = data.phone;
                document.getElementById('email').textContent = data.email;
                document.getElementById('website').textContent = data.website;
            })
            .catch(error => console.error('Error loading data:', error));
    }

    document.getElementById('toggleButton').addEventListener('click', function() {
        if (isVersion1) {
            loadData('data2.json');
        } else {
            loadData('data1.json');
        }
        isVersion1 = !isVersion1;
    });

    // 初始加载版本1的数据
    loadData('data1.json');
});
