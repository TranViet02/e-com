const allProducts = [
    // iPhone Products (20 items)
    {
        name: "iPhone 14 Pro Max",
        price: "33.990.000đ",
        image: "../assets/images/Iphone-1.png",
        category: "iphone",
        description: "iPhone 14 Pro Max với màn hình Super Retina XDR 6.7 inches, chip A16 Bionic, camera 48MP giúp bạn chụp ảnh chất lượng cao."
    },
    {
        name: "iPhone 14",
        price: "23.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 14 với màn hình 6.1 inches, chip A15 Bionic, camera 12MP, thiết kế đẹp mắt và hiệu năng mạnh mẽ."
    },
    {
        name: "iPhone 13",
        price: "29.990.000đ",
        image: "../assets/images/Iphone-3.png",
        category: "iphone",
        description: "iPhone 13 với màn hình OLED 6.1 inches, chip A15 Bionic, camera kép 12MP giúp bạn có những bức ảnh tuyệt đẹp."
    },
    {
        name: "iPhone SE 2022",
        price: "12.990.000đ",
        image: "../assets/images/Iphone-4.png",
        category: "iphone",
        description: "iPhone SE 2022 với màn hình 4.7 inches, chip A15 Bionic, camera 12MP và hiệu năng mạnh mẽ trong thiết kế nhỏ gọn."
    },
    {
        name: "iPhone 12 Mini",
        price: "20.990.000đ",
        image: "../assets/images/Iphone-5.png",
        category: "iphone",
        description: "iPhone 12 Mini với màn hình 5.4 inches, chip A14 Bionic, camera 12MP và thiết kế nhỏ gọn, dễ sử dụng."
    },
    {
        name: "iPhone 12",
        price: "24.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 12 với màn hình OLED 6.1 inches, chip A14 Bionic, camera kép 12MP, mang lại trải nghiệm vượt trội."
    },
    {
        name: "iPhone 11 Pro Max",
        price: "33.490.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 11 Pro Max với màn hình OLED 6.5 inches, camera ba 12MP giúp bạn chụp ảnh tuyệt vời trong mọi điều kiện ánh sáng."
    },
    {
        name: "iPhone XS Max",
        price: "31.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone XS Max với màn hình 6.5 inches, chip A12 Bionic và camera kép 12MP mang đến hiệu suất mạnh mẽ."
    },
    {
        name: "iPhone XR",
        price: "19.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone XR với màn hình Liquid Retina 6.1 inches, camera 12MP và hiệu năng ấn tượng với chip A12 Bionic."
    },
    {
        name: "iPhone X",
        price: "18.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone X với màn hình OLED 5.8 inches, camera 12MP và nhận diện khuôn mặt Face ID cực kỳ an toàn."
    },
    {
        name: "iPhone 8 Plus",
        price: "17.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 8 Plus với màn hình 5.5 inches, camera 12MP và sạc không dây tiện lợi."
    },
    {
        name: "iPhone 8",
        price: "14.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 8 với màn hình Retina 4.7 inches, camera 12MP và hiệu năng mạnh mẽ với chip A11 Bionic."
    },
    {
        name: "iPhone 7 Plus",
        price: "13.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 7 Plus với màn hình 5.5 inches, camera kép 12MP và khả năng chống nước IP67."
    },
    {
        name: "iPhone 7",
        price: "12.490.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 7 với màn hình Retina 4.7 inches, camera 12MP và chip A10 Fusion cho hiệu suất ổn định."
    },
    {
        name: "iPhone 6S Plus",
        price: "11.490.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 6S Plus với màn hình 5.5 inches, camera 12MP và hiệu suất tốt với chip A9."
    },
    {
        name: "iPhone 6S",
        price: "9.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 6S với màn hình Retina 4.7 inches, camera 12MP và cảm biến vân tay Touch ID."
    },
    {
        name: "iPhone 6 Plus",
        price: "8.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 6 Plus với màn hình 5.5 inches, camera 8MP và khả năng chụp ảnh ổn trong mọi điều kiện ánh sáng."
    },
    {
        name: "iPhone 6",
        price: "7.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone 6 với màn hình Retina 4.7 inches, camera 8MP và hiệu suất ổn định với chip A8."
    },
    {
        name: "iPhone SE",
        price: "5.990.000đ",
        image: "../assets/images/Iphone-2.png",
        category: "iphone",
        description: "iPhone SE với màn hình 4 inches, camera 8MP và chip A9 cho hiệu suất nhanh chóng."
    },

    // Samsung Products (20 items)
    {
        name: "Samsung Galaxy S23",
        price: "25.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy S23 với màn hình Dynamic AMOLED 6.1 inches, camera 50MP, hiệu năng mạnh mẽ với chip Snapdragon."
    },
    {
        name: "Samsung Galaxy Z Fold 5",
        price: "55.990.000đ",
        image: "../assets/images/samsung-1.png",
        category: "samsung",
        description: "Samsung Galaxy Z Fold 5 với màn hình gập 7.6 inches, camera 108MP và thiết kế cao cấp."
    },
    {
        name: "Samsung Galaxy A54",
        price: "9.990.000đ",
        image: "../assets/images/samsung-2.png",
        category: "samsung",
        description: "Samsung Galaxy A54 với màn hình Super AMOLED 6.5 inches, camera 50MP và hiệu năng ổn định cho nhu cầu sử dụng hàng ngày."
    },
    {
        name: "Samsung Galaxy Note 20 Ultra",
        price: "40.990.000đ",
        image: "../assets/images/samsung-3.png",
        category: "samsung",
        description: "Samsung Galaxy Note 20 Ultra với màn hình Dynamic AMOLED 6.9 inches, camera 108MP và S Pen thông minh."
    },
    {
        name: "Samsung Galaxy A34",
        price: "8.490.000đ",
        image: "../assets/images/samsung-4.png",
        category: "samsung",
        description: "Samsung Galaxy A34 với màn hình Super AMOLED 6.5 inches, camera 48MP và viên pin 5000mAh giúp bạn sử dụng cả ngày dài."
    },
    {
        name: "Samsung Galaxy S22 Ultra",
        price: "45.990.000đ",
        image: "../assets/images/samsung-5.png",
        category: "samsung",
        description: "Samsung Galaxy S22 Ultra với màn hình Dynamic AMOLED 6.8 inches, camera 108MP và khả năng zoom 100x."
    },
    {
        name: "Samsung Galaxy A04s",
        price: "5.490.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy A04s với màn hình PLS LCD 6.5 inches, camera 50MP và hiệu năng tốt cho các nhu cầu cơ bản."
    },
    {
        name: "Samsung Galaxy M54",
        price: "10.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy M54 với màn hình Super AMOLED 6.7 inches, camera 64MP và viên pin 6000mAh cho thời gian sử dụng lâu dài."
    },
    {
        name: "Samsung Galaxy Z Flip 4",
        price: "33.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy Z Flip 4 với màn hình gập 6.7 inches, camera kép 12MP và thiết kế thời trang."
    },
    {
        name: "Samsung Galaxy S21 FE",
        price: "20.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy S21 FE với màn hình Dynamic AMOLED 6.4 inches, camera 12MP và hiệu năng mạnh mẽ."
    },
    {
        name: "Samsung Galaxy A13",
        price: "6.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy A13 với màn hình PLS LCD 6.6 inches, camera 50MP và hiệu năng tốt cho các nhu cầu sử dụng hàng ngày."
    },
    {
        name: "Samsung Galaxy M32",
        price: "7.490.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy M32 với màn hình Super AMOLED 6.4 inches, camera 64MP và viên pin 5000mAh cho thời gian sử dụng lâu dài."
    },
    {
        name: "Samsung Galaxy Z Fold 4",
        price: "48.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy Z Fold 4 với màn hình gập 7.6 inches, camera 108MP và trải nghiệm đa nhiệm vượt trội."
    },
    {
        name: "Samsung Galaxy S21 Ultra",
        price: "40.490.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy S21 Ultra với màn hình Dynamic AMOLED 6.8 inches, camera 108MP và khả năng zoom 100x."
    },
    {
        name: "Samsung Galaxy M51",
        price: "9.490.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy M51 với màn hình Super AMOLED 6.7 inches, camera 64MP và viên pin 7000mAh cho thời gian sử dụng cực dài."
    },
    {
        name: "Samsung Galaxy A72",
        price: "12.990.000đ",
        image: "../assets/images/samsung.png",
        category: "samsung",
        description: "Samsung Galaxy A72 với màn hình Super AMOLED 6.7 inches, camera 64MP và viên pin 5000mAh."
    },

    // Xiaomi Products (20 items)
    {
        name: "Xiaomi 13T Pro",
        price: "16.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi 13T Pro với màn hình AMOLED 6.73 inches, camera 50MP và chip Snapdragon 8 Gen 2, mang lại hiệu suất vượt trội."
    },
    {
        name: "Xiaomi Redmi Note 12",
        price: "6.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Redmi Note 12 với màn hình 6.67 inches, camera 48MP và hiệu năng ổn định cho các nhu cầu cơ bản."
    },
    {
        name: "Xiaomi Mi 11",
        price: "14.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi 11 với màn hình AMOLED 6.81 inches, camera 108MP và chip Snapdragon 888 mạnh mẽ, mang lại trải nghiệm mượt mà."
    },
    {
        name: "Xiaomi Mi Mix 4",
        price: "25.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi Mix 4 với màn hình 6.67 inches, camera 108MP và công nghệ sạc nhanh 120W, cho phép bạn trải nghiệm công nghệ tiên tiến."
    },
    {
        name: "Xiaomi Redmi K40 Pro",
        price: "9.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Redmi K40 Pro với màn hình AMOLED 6.67 inches, camera 48MP và hiệu suất mạnh mẽ với chip Snapdragon 888."
    },
    {
        name: "Xiaomi 12 Pro",
        price: "21.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi 12 Pro với màn hình AMOLED 6.73 inches, camera 50MP và hiệu suất mượt mà với chip Snapdragon 8 Gen 1."
    },
    {
        name: "Xiaomi Poco F3",
        price: "8.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Poco F3 với màn hình AMOLED 6.67 inches, camera 48MP và chip Snapdragon 870."
    },
    {
        name: "Xiaomi Mi 10",
        price: "15.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi 10 với màn hình AMOLED 6.67 inches, camera 108MP và chip Snapdragon 865."
    },
    {
        name: "Xiaomi Mi 11 Lite",
        price: "10.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi 11 Lite với màn hình AMOLED 6.55 inches, camera 64MP và thiết kế mỏng nhẹ."
    },
    {
        name: "Xiaomi Mi 9T",
        price: "8.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi 9T với màn hình AMOLED 6.39 inches, camera 48MP và hiệu suất mạnh mẽ với chip Snapdragon 730."
    },
    {
        name: "Xiaomi Redmi Note 10 Pro",
        price: "7.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Redmi Note 10 Pro với màn hình AMOLED 6.67 inches, camera 108MP và viên pin 5020mAh."
    },
    {
        name: "Xiaomi Mi 10T Pro",
        price: "12.990.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi 10T Pro với màn hình IPS LCD 6.67 inches, camera 108MP và hiệu suất mạnh mẽ."
    },
    {
        name: "Xiaomi Poco X3 Pro",
        price: "7.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Poco X3 Pro với màn hình IPS LCD 6.67 inches, camera 48MP và chip Snapdragon 860."
    },
    {
        name: "Xiaomi Mi A3",
        price: "5.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Mi A3 với màn hình AMOLED 6.08 inches, camera 48MP và hệ điều hành Android One."
    },
    {
        name: "Xiaomi Redmi 10",
        price: "4.490.000đ",
        image: "../assets/images/xiaomi.png",
        category: "xiaomi",
        description: "Xiaomi Redmi 10 với màn hình LCD 6.5 inches, camera 50MP và hiệu năng ổn định cho các nhu cầu cơ bản."
    },

    {
        name: "Huawei P50 Pro",
        price: "28.990.000đ",
        image: "../assets/images/huawei.png",
        category: "huawei",
        description: "Huawei P50 Pro với màn hình OLED 6.6 inches, camera 50MP và chip Kirin 9000, mang lại hiệu suất vượt trội và trải nghiệm tuyệt vời."
    },
    {
        name: "Huawei Mate 40 Pro",
        price: "39.990.000đ",
        image: "../assets/images/huawei.png",
        category: "huawei",
        description: "Huawei Mate 40 Pro với màn hình OLED 6.76 inches, camera 50MP và chip Kirin 9000E, thiết kế sang trọng và hiệu suất mạnh mẽ."
    },
    {
        name: "Huawei Nova 9",
        price: "11.990.000đ",
        image: "../assets/images/huawei.png",
        category: "huawei",
        description: "Huawei Nova 9 với màn hình OLED 6.57 inches, camera 50MP và chip Snapdragon 778G, là lựa chọn tốt trong phân khúc tầm trung."
    },

    {
        name: "Oppo Find X5 Pro",
        price: "32.990.000đ",
        image: "../assets/images/oppo.png",
        category: "oppo",
        description: "Oppo Find X5 Pro với màn hình AMOLED 6.7 inches, camera 50MP và chip Snapdragon 8 Gen 1, mang lại hiệu suất vượt trội và khả năng chụp ảnh tuyệt vời."
    },
    {
        name: "Oppo Reno 7 Pro",
        price: "15.990.000đ",
        image: "../assets/images/oppo.png",
        category: "oppo",
        description: "Oppo Reno 7 Pro với màn hình AMOLED 6.55 inches, camera 50MP và chip MediaTek Dimensity 1200-Max, phù hợp với nhu cầu giải trí và chụp ảnh."
    },
    {
        name: "Oppo A76",
        price: "7.490.000đ",
        image: "../assets/images/oppo.png",
        category: "oppo",
        description: "Oppo A76 với màn hình LCD 6.56 inches, camera 13MP và chip Snapdragon 680, đáp ứng nhu cầu sử dụng cơ bản và chơi game nhẹ."
    }
];

let currentCategory = "all";
let currentPage = 1;
const productsPerPage = 12;

function filterByCategory(category) {
    currentCategory = category;
    currentPage = 1;
    renderProducts();
}

function logout() {
    localStorage.removeItem("userToken");
    window.location.href = "login.html";
}

function renderProducts() {
    const filtered = currentCategory === "all"
        ? allProducts
        : allProducts.filter(p => p.category === currentCategory);

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const pageProducts = filtered.slice(start, end);

    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    pageProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <p>${product.description}</p>
        `;
        productList.appendChild(card);
    });

    renderPagination(filtered.length);
}

function renderPagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        if (i === currentPage) button.classList.add("active");
        button.addEventListener("click", () => {
            currentPage = i;
            renderProducts();
        });
        pagination.appendChild(button);
    }
}

renderProducts();
