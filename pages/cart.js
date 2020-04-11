
import { Component } from "react";

import Filter from "../components/Filter";
import Sorter from "../components/Sorter";
import ShoppingList from "../components/ShoppingList";


import actions from "../redux/action";
import { connect } from "react-redux";

const { onFetchItem } = actions;

class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        console.log("props data in casrt", this.props.shoppingListData)
        return (
            <>
                <div className="cartContainerDiv">
                    <div className="cartLeftNav">
                        <div>
                            {jsondata.map((item, index) =>
                                <Row gutter={16} key={index}>
                                    <Col span={6}>
                                        <div className="cartListDiv">
                                            <img
                                                alt="example"
                                                src="https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                            />
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="cartListText">
                                            {item.name}
                                            <p>
                                                <span> &#8377; {item.price.actual}</span>
                                                <span style={{ textDecoration: "line-through" }}> {item.price.display}</span>
                                                <span>  {item.discount} % off</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="cartListText">
                                            <Button type="primary" shape="circle" icon={<PlusOutlined />} size="middle" />
                                            <Button type="dashed"> 2 </Button>
                                            <Button type="primary" shape="circle" icon={<MinusOutlined />} size="middle" />

                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="cartListText">
                                            <Button type="link" danger>
                                                Remove
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            )}

                        </div>
                    </div>
                    <div className="cartRightNav">
                        <Card title="Price Details" style={{ width: 300 }}>
                            {/* <p>Price --no of items -- </p>
                            <p>discount</p>
                            <p>Total Payable</p> */}
                            <Row gutter={16}>
                                <Col span={16}>
                                    Price
                                </Col>
                                <Col span={8}>
                                    Amount
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={16}>
                                    Discount
                                </Col>
                                <Col span={8}>
                                    Amount
                                </Col>
                            </Row>
                            <hr />
                            <Row gutter={16}>
                                <Col span={16}>
                                    Total
                                </Col>
                                <Col span={8}>
                                    Amount
                                </Col>
                            </Row>

                        </Card>
                    </div>
                </div>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
        shoppingListData: state.shoppingListData
    };
};


export default connect(
    mapStateToProps, { onFetchItem }
)(CartPage);