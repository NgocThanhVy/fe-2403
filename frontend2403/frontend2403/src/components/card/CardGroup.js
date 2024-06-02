import React from "react"
import "../card/CardGroup.css"

const cards = [
    {
        id: "1",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ7XnA4g4A6j4dKJmgXYocciMrXSgoEywhw&s',
        title: 'Card 1',
        desc: 'Description for card 1'
    },
    {
        id: "2",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_aurt2wjbZQBW4MYpLZ8SfZt543Uaw-_HA&s',
        title: 'Card 2',
        desc: 'Description for card 2'
    },
    {
        id: "3",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s',
        title: 'Card 3',
        desc: 'Description for card 3'
    },
];

const CardGroup = () => {
    return (
        <div className="card-container">
            {cards.map((item, index) => {
                return (
                    <div className="card">
                        <div className="card__img">
                            <img src={item.img} />
                        </div>
                        <div className="card_content">
                            <h1 className="card__title">{item.title}</h1>
                            <p className="card-desc">{item.desc}</p>
                        </div>
                    </div>
                )
            })}
            {/* <div className="card">
                <div className="card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJ7XnA4g4A6j4dKJmgXYocciMrXSgoEywhw&s" />

                </div>
                <div>
                    <h1 className="card-title">This is for you item 1</h1>
                    <p className="card-desc">Nếu các bạn đã tìm hiểu qua về ngành công nghệ thông tin, có thể các bạn đã biết đến code, viết code. Tuy nhiên, đối với các bạn đang mong muốn tìm hiểu về chủ đề này. Thì đây lại là một điều rất mới mẻ và có thể hơi khó để tiếp cận. Tuy nhiên, để hiểu về viết code là gì không phải là khó. Chúng tôi đã nhận được rất nhiều câu hỏi về chủ đề này. Bài viết ngày hôm nay, chúng ta hãy cùng nhau tìm hiểu và giải đáp về nó nhé!</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_aurt2wjbZQBW4MYpLZ8SfZt543Uaw-_HA&s" />

                </div>
                <div>
                    <h1 className="card-title">This is for you item 2</h1>
                    <p className="card-desc">This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN6FOuwamIbgS0-ed-fjvllqBjujbCrKRVsQ&s" />

                </div>
                <div>
                    <h1 className="card-title">This is for you item 3</h1>
                    <p className="card-desc">This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>
                </div>
            </div> */}
        </div>
    );
};

export default CardGroup;