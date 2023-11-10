import { useEffect } from 'react'
import './Rou.scss'
import { Link } from 'react-router-dom'

function Rou () {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <div className='content-route'>
            <div className='title'>
                <h2>Lộ trình học</h2>
                <p>Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học. Ví dụ: Để đi làm với vị trí "Lập trình viên Front-end" bạn nên tập trung vào lộ trình "Front-end".</p>
            </div>
            <div className='ingredient'>
                <div className='front-end'>
                    <div className='information'>
                        <div className='infor-content'>
                            <h3>Lộ trình học Front-end</h3>
                            <p>Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.</p>
                        </div>
                        <Link to="/Roufront" >
                            <img src='https://files.fullstack.edu.vn/f8-prod/learning-paths/2/63b4642136f3e.png'/> 
                        </Link>
                    </div>
                    <button>Xem chi tiết</button>
                </div>
                <div className='back-end'>
                    <div className='information'>
                        <div className='infor-content'>
                            <h3>Lộ trình học Back-end</h3>
                            <p>Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.</p>
                        </div>
                        <img src='https://files.fullstack.edu.vn/f8-prod/learning-paths/3/63b4641535b16.png'/>
                    </div>
                    <button>Xem chi tiết</button>
                </div>
            </div>
            <div className='join'>
                <div className='describe'>
                    <h2>Tham gia cộng đồng học viên F8 trên Facebook</h2>
                    <p>Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.</p>
                    <a href='#'>Tham gia nhóm</a>
                </div>
                <img src='https://fullstack.edu.vn/static/media/fb-group-cards.4bd525b1b8baf7b1e5a2.png'/>
            </div>
        </div>
    )
}

export default Rou