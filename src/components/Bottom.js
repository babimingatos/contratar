import { AiFillHome } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {BsPerson} from "react-icons/bs";

const Bottom = () => {
    return (
        <div class="bottom-navbar">
            <a href="#" class="nav-item">
                <AiFillHome size={22}/>
                <span>Home</span>
            </a>
            <a href="#" class="nav-item">
                <BsClipboard2Check size={22}/>
                <span>Plantões</span>
            </a>
            <a href="#" class="nav-item">
               <AiOutlineHeart size={22}/>
                <span>Favoritos</span>
            </a>
            <a href="#" class="nav-item">
               <BsPerson size={22}/>
                <span>Minha conta</span>
            </a>
        </div>
    );
}

export default Bottom