
import { PureComponent } from 'react';
import { Card, Col, Row, Button } from 'antd';

export default class ShoppingList extends PureComponent {


    componentDidMount() {

    }

    render() {
        console.log("shoppingListData", this.props.listData)
        let { listData } = this.props;
        return (
            <div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>

                        {listData.map((item, index) =>
                            <Col span={4} className="listCols" key={index}>
                                <Card
                                    style={{ padding: "7px" }}
                                    cover={<img alt="example" src="https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg" />}
                                >

                                    <p>{item.name}</p>
                                    <p>
                                        <span> &#8377; {item.price.actual}</span>
                                        <span style={{ textDecoration: "line-through" }}> {item.price.display}</span>
                                        <span>  {item.discount} % off</span>
                                    </p>
                                    <Button type="primary" shape="round" size="middle">
                                        Add to Cart
                                    </Button>

                                </Card>



                            </Col>
                        )
                        }



                    </Row>
                </div>
            </div>
        );
    }
}


