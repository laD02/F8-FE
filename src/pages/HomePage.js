import '../App.scss';
import { FaReact,FaTiktok,FaFacebookSquare,FaYoutube } from "react-icons/fa";
import { AiOutlinePlus,AiOutlineCopyrightCircle  } from "react-icons/ai";
import { BsFillHouseDoorFill,BsFillBookFill,BsFillTicketPerforatedFill } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi2";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import HomeHeader from './HomeHeader';
import { useEffect,useState } from 'react';


function HomePage() {
    const [currentPage, setCurrentPage] = useState('home')
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/home')
    }, [])

  return (
    <div id="f8">
        <HomeHeader />

        <div className='body'>
            <div className='menu'>
                <div className='item-block'>
                    <AiOutlinePlus  className='ti-block'/>
                </div>
                <Link to='/Home' className='link '>
                    <div className={currentPage === 'home' ? 'item-menu active' : 'item-menu'} onClick={()=>setCurrentPage('home')}>
                        <BsFillHouseDoorFill className='ti-menu '/>
                        <p>Home</p>
                    </div>
                </Link>
                <Link to='/Rou' className='link'>
                    <div className={currentPage === 'Rou' ? 'item-menu active' : 'item-menu' } onClick={()=>setCurrentPage('Rou')}>
                        <BsFillTicketPerforatedFill className='ti-menu'/>
                        <p>Lộ trình</p>
                    </div>
                </Link>
                <Link to='/Learn' className='link'>
                    <div className={currentPage === 'Learn' ? 'item-menu active' : 'item-menu'} onClick={()=>setCurrentPage('Learn')}>
                        <HiLightBulb className='ti-menu'/>
                        <p>Học</p>
                    </div>
                </Link>
                <Link to='/Blog' className='link'>
                    <div className={currentPage === 'Blog' ? 'item-menu active' : 'item-menu'} onClick={()=>setCurrentPage('Blog')}>
                        <BsFillBookFill className='ti-menu'/>
                        <p>Blog</p>
                    </div>
                </Link>
            </div>
            

            <Outlet />
        </div>

        <div className='footer'>
            <div className='list-footer'>
                <div className='info'>
                    <div className='info-title'>
                        <FaReact className='ti-logo'/>
                        <p>Học tập để đi làm</p>
                    </div>
                    <ul>
                        <li>Điện thoại: <a href='#'>0393.549.658</a></li>
                        <li>Email: <a href='#'>contact@fullstack.edu.vn</a></li>
                        <li>Địa chỉ: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội</li>                   
                    </ul>
                    <img src='https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png' />
                </div>
                <div className='table'>
                    <table>
                        <tr>
                            <th>VỀ F8</th>
                            <th>SẢN PHẨM</th>
                            <th>CÔNG CỤ</th>
                        </tr>
                        <tr>
                            <td>Giới thiệu</td>
                            <td>Game Nester</td>
                            <td>Tạo CV xin việc</td>
                        </tr>
                        <tr>
                            <td>Liên hệ</td>
                            <td>Game CSS Diner</td>
                            <td>Rút gọn liên kết</td>
                        </tr>
                        <tr>
                            <td>Điều khoản </td>
                            <td>Game CSS Selectors</td>
                            <td>Clip-path maker</td>
                        </tr>
                        <tr>
                            <td>Bảo mật</td>
                            <td>Game Froggy</td>
                            <td>Snippet generator</td>
                        </tr>
                        <tr>
                            <td>Cơ hội việc làm</td>
                            <td>Game Froggy Pro</td>
                            <td>Cảnh báo sờ tay lên mặt</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Game scoops</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className='adress'>
                    <a href='#'>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</a>
                    <ul>
                        <li>Mã số thuế: 0109922901</li>
                        <li>Ngày thành lập: 04/03/2022</li>
                        <li>Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mang lại giá trị cho cộng đồng.</li>
                    </ul>
                </div>    
            </div>
            <div className='end'>
                <div className='end-mess'>
                    <div className='end-mess-1'>
                        <AiOutlineCopyrightCircle />
                        <p>Nền tảng học lập trình hàng đầu Việt Nam</p>
                    </div>
                    <div className='contact'>
                        <FaYoutube className='you size'/>
                        <FaFacebookSquare className='face size'/>
                        <FaTiktok className='tik size'/>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
    )
}

export default HomePage;
