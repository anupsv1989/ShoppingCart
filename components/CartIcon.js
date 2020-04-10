import { Menu } from 'antd';
import { PureComponent } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default class CartIcon extends PureComponent {

    render() {
        return (
            <span>
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </span>
        );
    }
}

