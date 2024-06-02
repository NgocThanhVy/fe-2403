import React from "react";
import "../card1/card1.css";

const Card1 = () => {

    return (
        <div className="card1">
            <div className="card-detail" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s"></img>
                <h2>Title 1</h2>
                <p>Nếu các bạn đã tìm hiểu qua về ngành công nghệ thông tin, có thể các bạn đã biết đến code, viết code. Tuy nhiên, đối với các bạn đang mong muốn tìm hiểu về chủ đề này. Thì đây lại là một điều rất mới mẻ và có thể hơi khó để tiếp cận. Tuy nhiên, để hiểu về viết code là gì không phải là khó. Chúng tôi đã nhận được rất nhiều câu hỏi về chủ đề này. Bài viết ngày hôm nay, chúng ta hãy cùng nhau tìm hiểu và giải đáp về nó nhé!</p>
            </div>

            <div className="card-detail" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_aurt2wjbZQBW4MYpLZ8SfZt543Uaw-_HA&s"></img>
                <h2>Title 2</h2>
                <p>This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>
            </div>

            <div className="card-detail" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ7XnA4g4A6j4dKJmgXYocciMrXSgoEywhw&s"></img>
                <h2>Title 3</h2>
                <p>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
            </div>
        </div>

    )
}

export default Card1;