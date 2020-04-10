import { Menu } from 'antd';
import { PureComponent } from 'react';
import {
    FallOutlined,
    MoneyCollectOutlined,
    RiseOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
export default class Sorter extends PureComponent {

    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                    <Menu.Item key="sortby" disabled>
                        <span style={{ fontSize: "14px", fontWeight: "bolder" }}>Sort By  </span>
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

