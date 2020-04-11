import { Component } from "react"
import Link from 'next/link';
import SearchList from "./SearchList";
import CartIcon from "./CartIcon";

const linkStyle = {
    marginRight: 15
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
                <Link href='/'>
                    <a style={linkStyle}>Home</a>
                </Link>
                {/* <Link href='/list'>
                    <a style={linkStyle}>List</a>
                </Link> */}

                <div className="searchInMenu">
                    <SearchList />
                </div>
                <div className="cartInMenu">
                    <Link href='/cart'>
                        <a style={linkStyle}><CartIcon /></a>
                    </Link>
                </div>
            </div >
        )
    }
}
