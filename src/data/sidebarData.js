import {FaStream, FaHome, FaShoppingCart} from "react-icons/fa"
import {MdCategory, MdAddShoppingCart} from "react-icons/md"
import {IoBagCheck} from "react-icons/io5"
import {FcMoneyTransfer} from "react-icons/fc"

const SideData = [
    {
        label: 'dashboard',
        link: "/",
        icon: <FaHome />
    },
    {
        label: 'add products',
        link: "/addproducts",
        icon: <MdAddShoppingCart />
    },
    {
        label: 'products',
        link: "/products",
        icon: <FaShoppingCart />
    },
    {
        label: 'category',
        link: "/category",
        icon: <MdCategory />
    },
    {
        label: 'orders',
        link: "/orders",
        icon: <IoBagCheck />
    },
    {
        label: 'transactions',
        link: "/transactions",
        icon: <FcMoneyTransfer />
    }
]

export default SideData;