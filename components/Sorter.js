import { Menu } from 'antd';
import { PureComponent } from 'react';
import {
    FallOutlined,
    MoneyCollectOutlined,
    RiseOutlined,
} from '@ant-design/icons';

import actions from "../redux/action";
import { connect } from "react-redux";

const { applySortAction } = actions;


const { SubMenu } = Menu;
class Sorter extends PureComponent {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e.key);
        let active = e.key;
        this.setState({
            current: e.key,
        });

        if (active == "highlow") {
            this.props.applySortAction("HL");
        } else if (active == "lowhigh") {
            this.props.applySortAction("LH");
        } else if (active == "discount") {
            this.props.applySortAction("DIS");
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

