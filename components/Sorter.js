import { Menu } from 'antd';
import { Component } from 'react';
import {
    FallOutlined,
    MoneyCollectOutlined,
    RiseOutlined,
} from '@ant-design/icons';

import actions from "../redux/action";
import { connect } from "react-redux";

const { applySortAction } = actions;


const { SubMenu } = Menu;
class Sorter extends Component {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e.key);
        let active = e.key;
        this.setState({
            current: e.key,
        });

        let payload = "";
        if (active == "highlow") {
            payload = "HL";
            this.props.applySortAction(payload);
        } else if (active == "lowhigh") {
            payload = "LH";
            this.props.applySortAction(payload);
        } else if (active == "discount") {
            payload = "DIS";
            this.props.applySortAction(payload);
        } else {
            console.log("Else")
        }
    };




    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="sortby" disabled>
                        <span className="sorter__menu--nav1">Sort By  </span>
                    </Menu.Item>
                    <Menu.Item key="highlow">
                        <FallOutlined />
                        Price -- High Low
                    </Menu.Item>
                    <Menu.Item key="lowhigh">
                        <RiseOutlined />
                        Price -- Low High
                    </Menu.Item>
                    <Menu.Item key="discount">
                        <MoneyCollectOutlined />
                       Discount
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {

    };
};


export default connect(
    mapStateToProps, { applySortAction }
)(Sorter);

