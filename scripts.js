
let house_list = [] // danh sách (array) (list) trong javascript

let default_house_info = { // object trong javascript
    "title": "",
    "area": 0,
    "address": "",
    "price": 0,
    "description": "",
    "available": false,
    "images": [],
    "owner": {
        "fullname": "Nguyen Van A",
        "phone_number": "012345678"
    }
}

const content = document.getElementById("divListHouse")

let house1 = default_house_info
house1.title = "Nhà Cổ Nhuế, giá phố Cổ"
house1.area = 100
house1.address = "110 Cổ Nhuế, Bắc Từ Liêm, Hà Nội"
house1.price = 100000000
house1.description = "Chủ nhà vỡ nợ, cần bán gấp"
house1.available = true
house1.images.push("/assets/sample/house1.jpeg")
house1.owner.fullname = "Nguyễn Thành Đạt"
house1.owner.phone_number = "1243253242"

let house2 = { // object trong javascript
    "title": "Nhà Trịnh Văn Bô, giá rẻ như cái bô",
    "area": 1000,
    "address": "13 Trịnh Văn Bô",
    "price": 1000000000,
    "description": "Nhà 1000 người đang ở, đuổi cái là đi",
    "available": true,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Nguyen Van A",
        "phone_number": "012345678"
    }
}

let house6 = {
    "title": "Nhà phố cổ Hà Nội, vị trí trung tâm",
    "area": 120,
    "address": "56 Hàng Buồm",
    "price": 7500000000,
    "description": "Nhà cổ 5 tầng, thích hợp kinh doanh",
    "available": true,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Tran Thi B",
        "phone_number": "0987654321"
    }
};

let house7 = {
    "title": "Biệt thự view biển Vũng Tàu",
    "area": 300,
    "address": "12 Thùy Vân, Vũng Tàu",
    "price": 15000000000,
    "description": "Biệt thự cao cấp, view biển tuyệt đẹp",
    "available": false,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Le Minh C",
        "phone_number": "0912345678"
    }
};

let house3 = {
    "title": "Căn hộ cao cấp quận 2, TP.HCM",
    "area": 85,
    "address": "An Phú, Quận 2, TP.HCM",
    "price": 4500000000,
    "description": "Căn hộ hiện đại, tiện ích đầy đủ",
    "available": true,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Pham Hoang D",
        "phone_number": "0934567890"
    }
};

let house4 = {
    "title": "Nhà vườn ngoại ô, yên tĩnh thoáng mát",
    "area": 500,
    "address": "Hòa Lạc, Hà Nội",
    "price": 6000000000,
    "description": "Nhà rộng có vườn cây xanh, phù hợp nghỉ dưỡng",
    "available": true,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Hoang Thi E",
        "phone_number": "0978123456"
    }
};

let house5 = {
    "title": "Nhà trọ giá rẻ sinh viên, gần trường đại học",
    "area": 200,
    "address": "Khu B, Đại học Quốc gia TP.HCM",
    "price": 3000000000,
    "description": "Nhà trọ đông sinh viên, luôn full phòng",
    "available": false,
    "images": ["/assets/sample/house1.jpeg"],
    "owner": {
        "fullname": "Tran Van F",
        "phone_number": "0923456789"
    }
};


house_list.push(house1)
house_list.push(house2)
house_list.push(house3)
house_list.push(house4)
house_list.push(house5)
house_list.push(house6)
house_list.push(house7)


house_list.forEach(house => {
    content.innerHTML += `
                    <div class="col-sm-6 mb-3 mb-sm-2">
                        <div class="card align-items-center p-2 min-card-height">
                            <div class="row g-0">
                                <div class="col-sm-4">
                                    <img src="${house.images[0]}" class="card-img-left img-thumbnail w-100" alt="...">
                                </div>
                                <div class="col-sm-1">
                                </div>
                                <div class="col-sm-7">
                                    <h5 class="card-title">${house.title}</h5>
                                    <p class="card-text">
                                    <ul>
                                        <li>Diện tích: ${house.area}</li>
                                        <li>Vị trí: ${house.address}</li>
                                        <li>Giá: ${house.price}</li>
                                        <li>Mô tả: ${house.description}</li>
                                        <li>Sẵn sàng bán: ${house.available ? "Muốn bán" : "Chưa muốn bán"}</li>
                                    </ul>
                                    </p>
                                    <a href="#" class="btn btn-primary">Liên hệ luôn</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `
});

