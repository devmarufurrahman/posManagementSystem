import {
    useState,
    useEffect
} from 'react'
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    MenuUnfoldOutlined,
    FileAddOutlined,
    IdcardOutlined,
    PrinterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
import { 
    Button, 
    Layout,
    Menu, 
    theme 
} from 'antd';
import { 
    Link,
    useLocation
} from 'react-router-dom';
import menuConfig from '../../config/menuConfig'
import './index.css'
const {  
    Sider 
} = Layout;
const SubMenu = Menu.SubMenu;


const SiderMain=({collapsed})=>{
    const location=useLocation();
    let {pathname}=location;
    const roles=localStorage.getItem('role')
    const filterMenu=menuConfig.filter((mnu)=>mnu.roles.includes(roles))
    const [menuLists,setMenulists]=useState([]);

    useEffect(()=>{
        if(filterMenu.length){
            let menus=getMenuNodeReduce(filterMenu);
            setMenulists(menus)
        }
    },[])

    // Menu lists reduce
    const getMenuNodeReduce=(menuListss)=>{
        return menuListss.reduce((pre,item)=>{
            if(!item.child.length){
                pre=[...pre,(
                    <Menu.Item 
                    key={item.path}
                    icon={item.icon}
                    >
                        <Link to={item.path}>
                            <strong>
                                {item.title}
                            </strong>
                        </Link>
                    </Menu.Item>
                )
                ]
            }else{
                pre=[...pre,(
                    <SubMenu
                    key={item.path}
                    title={
                    <span>
                        {item.icon ?item.icon: null}
                        <span>{item.title}</span>
                    </span>
                    }
                    >
                        {getMenuNodeReduce(item.child)}
                    </SubMenu>
                )]
            }
            return pre;
        },[])
    }
    return(
        <>
            <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed}
            className={`${collapsed?'collapsed-sidebar':'expand-sidebar'}`}
            style={{
                backgroundColor:'#fff',
                paddingTop:'10px'
            }}
            >
                <div className="logo" />
                <Menu
                style={{
                    height:'100vh'
                }}
                theme="light"
                mode="inline"
                selectedKeys={[pathname?pathname.substr(1):'']}
                defaultSelectedKeys={['1']}
                >
                    {
                        menuLists
                    }

                </Menu>
            </Sider>
        </>
    )
}
export default SiderMain;

