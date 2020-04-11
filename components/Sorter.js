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

    //     var items = [
    //     { name: 'Edward', value: 21 },
    //     { name: 'Sharpe', value: 37 },
    //     { name: 'And', value: 45 },
    //     { name: 'The', value: -12 },
    //     { name: 'Magnetic', value: 13 },
    //     { name: 'Zeros', value: 37 }
    // ];

    // // sort by value
    // items.sort(function (a, b) {
    //     return b.value - a.value;
    // });

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

