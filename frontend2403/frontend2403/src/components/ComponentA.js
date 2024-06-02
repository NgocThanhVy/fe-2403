import React from 'react';
import "../App.css";

const CardComponent = () => {
    return (
        <div>
            <h1>This is A component</h1>
            <div className="card">
                <h2>Học lập trình có đơn giản không?</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s"></img>
                <h2>Đây là tiêu đề của bài viết</h2>
                <p>Nếu các bạn đã tìm hiểu qua về ngành công nghệ thông tin, có thể các bạn đã biết đến code, viết code. Tuy nhiên, đối với các bạn đang mong muốn tìm hiểu về chủ đề này. Thì đây lại là một điều rất mới mẻ và có thể hơi khó để tiếp cận. Tuy nhiên, để hiểu về viết code là gì không phải là khó. Chúng tôi đã nhận được rất nhiều câu hỏi về chủ đề này. Bài viết ngày hôm nay, chúng ta hãy cùng nhau tìm hiểu và giải đáp về nó nhé!</p>
                <div className="button_group">
                    <button className="button">Đọc thêm</button>
                </div>

            </div>
        </div>
    );
}

export default CardComponent;