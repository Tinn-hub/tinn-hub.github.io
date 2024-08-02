function switchLanguage(lang) {
    if (lang === 'en') {
        document.querySelector('#introduction p').textContent = 'HT Tourist is a new tourist company founded in 2024, based in Sacramento. We aim to provide memorable travel experiences.';
        document.querySelectorAll('.place-info h3')[0].textContent = 'Vanilla Fish Restaurant';
        document.querySelectorAll('.place-info p')[0].textContent = 'Enjoy a delightful dinner at Vanilla Fish Restaurant in Riverside, known for its exquisite seafood dishes and elegant atmosphere.';
        document.querySelectorAll('.place-info h3')[1].textContent = 'Downtown Riverside';
        document.querySelectorAll('.place-info p')[1].textContent = 'Explore the vibrant Downtown Riverside, filled with historic sites, shops, and cultural attractions.';
        document.querySelectorAll('.place-info h3')[2].textContent = 'Griffin Observatory';
        document.querySelectorAll('.place-info p')[2].textContent = 'Visit the iconic Griffin Observatory in Los Angeles for breathtaking views and astronomical exhibits.';
        document.querySelectorAll('.place-info h3')[3].textContent = 'Asian Night Market at Phuoc Loc Tho';
        document.querySelectorAll('.place-info p')[3].textContent = 'Experience the vibrant Asian Night Market at Phuoc Loc Tho, featuring diverse food stalls and lively entertainment.';
        document.querySelectorAll('.place-info h3')[4].textContent = 'Freeway 1';
        document.querySelectorAll('.place-info p')[4].textContent = 'Enjoy a scenic drive back to Sacramento via Freeway 1, known for its stunning coastal views.';
        document.querySelector('.day:nth-child(1) p').textContent = 'Travel from Sacramento to Riverside. Dinner at Vanilla Fish restaurant and visit Downtown Riverside.';
        document.querySelector('.day:nth-child(2) p').textContent = 'Visit LA, Griffin Observatory, and the board. Dinner at Asian Night Market at Phuoc Loc Tho.';
        document.querySelector('.day:nth-child(3) p').textContent = 'Travel back to Sacramento via Freeway 1.';
    } else if (lang === 'vi') {
        document.querySelector('#introduction p').textContent = 'HT Tourist là một công ty du lịch mới được thành lập vào năm 2024, có trụ sở tại Sacramento. Chúng tôi hướng đến việc mang lại những trải nghiệm du lịch đáng nhớ.';
        document.querySelectorAll('.place-info h3')[0].textContent = 'Nhà hàng Vanilla Fish';
        document.querySelectorAll('.place-info p')[0].textContent = 'Thưởng thức bữa tối tuyệt vời tại nhà hàng Vanilla Fish ở Riverside, nổi tiếng với các món hải sản tinh tế và không gian sang trọng.';
        document.querySelectorAll('.place-info h3')[1].textContent = 'Trung tâm Riverside';
        document.querySelectorAll('.place-info p')[1].textContent = 'Khám phá trung tâm Riverside sôi động, nơi có các địa điểm lịch sử, cửa hàng và điểm văn hóa.';
        document.querySelectorAll('.place-info h3')[2].textContent = 'Đài quan sát Griffin';
        document.querySelectorAll('.place-info p')[2].textContent = 'Thăm quan đài quan sát Griffin mang tính biểu tượng ở Los Angeles để có tầm nhìn tuyệt đẹp và các triển lãm thiên văn.';
        document.querySelectorAll('.place-info h3')[3].textContent = 'Chợ đêm Châu Á tại Phước Lộc Thọ';
        document.querySelectorAll('.place-info p')[3].textContent = 'Trải nghiệm chợ đêm Châu Á sôi động tại Phước Lộc Thọ, với nhiều gian hàng ẩm thực đa dạng và giải trí sôi nổi.';
        document.querySelectorAll('.place-info h3')[4].textContent = 'Đường cao tốc 1';
        document.querySelectorAll('.place-info p')[4].textContent = 'Thưởng thức chuyến đi ngắm cảnh trở lại Sacramento qua đường cao tốc 1, nổi tiếng với cảnh biển tuyệt đẹp.';
        document.querySelector('.day:nth-child(1) p').textContent = 'Di chuyển từ Sacramento đến Riverside. Ăn tối tại nhà hàng Vanilla Fish và thăm trung tâm Riverside.';
        document.querySelector('.day:nth-child(2) p').textContent = 'Thăm quan LA, đài quan sát Griffin và board. Ăn tối tại chợ đêm Châu Á tại Phước Lộc Thọ.';
        document.querySelector('.day:nth-child(3) p').textContent = 'Di chuyển trở lại Sacramento qua đường cao tốc 1.';
    }
}
