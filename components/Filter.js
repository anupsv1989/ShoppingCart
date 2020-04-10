import { Menu, Slider } from 'antd';
import { PureComponent } from 'react';

export default class Filter extends PureComponent {

    render() {
        return (

            <div>
                Filters
                <Slider range defaultValue={[20, 50]}
                    tooltipVisible
                    tooltipPlacement="bottom"
                />
            </div>
        );
    }
}

