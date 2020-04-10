import { PureComponent } from "react"
import { Button, Tooltip, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

export default class SearchList extends PureComponent {

    render() {
        return (

            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
            />
        );
    }
}

