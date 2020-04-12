import { Component } from "react"
import Link from 'next/link';
import SearchList from "./SearchList";
import CartIcon from "./CartIcon";

import { StarOutlined } from '@ant-design/icons';

const linkStyle = {
    marginRight: 15,
    fontWeight: "bolder",
    color: "#ffffff"
}
export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="menuStyle">
                <div className="menuStyle__home">
                    <Link href='/'>
                        <a style={linkStyle}> <StarOutlined /> Home</a>
                    </Link>
                </div>
                {/* <Link href='/list'>
                    <a style={linkStyle}>List</a>
                </Link> */}

                <div className="menuStyle__searchInMenu">
                    <SearchList />
                </div>
                <div className="menuStyle__cartInMenu">
                    <Link href='/cart'>
                        <a style={linkStyle}><CartIcon /></a>
                    </Link>
                </div>
            </div >
        )
    }
}
