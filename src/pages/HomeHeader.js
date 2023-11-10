import { GoSearch } from "react-icons/go";
import { FaReact } from "react-icons/fa";

import { ImBullhorn } from "react-icons/im";


export default  function HomeHeader(){
    return (
        <>
            <div className='navigation'>
                <div className='logo'>
                    <FaReact className='ti-logo'/>
                    <p>Học lập trình để đi làm</p>
                </div>
                <div className='search'>
                    <GoSearch  className='ti-search'/>
                    <input placeholder='Tìm kiếm khóa học, bài viết, video,...' />
                </div>
                <div className='login'>
                    <button> Đăng nhập</button>
                </div>
            </div>
            <div className='feed'>
                <ImBullhorn className='ti-feed'/>
            </div>
        </>
    )
}


