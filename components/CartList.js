
import { Component } from "react";
import { Card, Col, Row, Button } from 'antd';

import actions from "../redux/action";
import { connect } from "react-redux";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { getItemsinCart } = actions;

class CartList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartDisplayItems: [],
            initialItems: 1,
            itemsForPrice: [],
        }
    }

    componentDidMount() {
        this.setState({
            cartDisplayItems: this.props.itemsInCart,
            itemsForPrice: this.props.itemsInCart
        })
        console.log(" this.props.itemsInCart did mount", this.props.itemsInCart)
    }

    componentWillReceiveProps(nextProps) {
        console.log("NExt props in cartjs", nextProps)
    }


    increment = (item, index) => {
        // let tempArr = this.state.itemsForPrice;
        // tempArr.push(item);
        this.setState({
            // itemsForPrice: tempArr,
            [index + item.name]: this.state[index + item.name] ? (this.state[index + item.name] + 1) : (this.state.initialItems + 1)
        }, () => {
            // console.log("temp arr", tempArr)
        })
    }
    decrement = (item, index) => {
        // let tempArr = this.state.itemsForPrice;
        // let index = tempArr.map(x => {
        //     return x.index;
        // }).indexOf(item.index);
        // tempArr.splice(index, 1);

        // console.log("After deleting items in array", tempArr)

        this.setState({
            [index + item.name]: this.state[index + item.name] ? (this.state[index + item.name] - 1) : (this.state.initialItems - 1)
        })

    }


    render() {
        console.log("props data in casrt", this.props.itemsInCart)
        console.log("props data in casrt cartDisplayItems", this.state.cartDisplayItems)
        const { itemsInCart } = this.props;
        return (
            <>
                <div className="cartContainerDiv">
                    <div className="cartLeftNav">
                        <div>
                            {this.state.cartDisplayItems.map((i, index) =>
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
                                            {i.item.name}
                                            <p>
                                                <span> &#8377; {i.item.price.actual}</span>
                                                <span style={{ textDecoration: "line-through" }}> {i.item.price.display}</span>
                                                <span>  {i.item.discount} % off</span>
                                            </p>
                                        </div>
                                    </Col>
                                    <Col span={6}>
                                        <div className="cartListText">
                                            <Button type="primary" shape="circle" icon={<PlusOutlined />}
                                                size="middle"
                                                onClick={() => this.increment(i.item, index)} />

                                            <Button type="dashed">
                                                {this.state[index + i.item.name] > 0 ? this.state[index + i.item.name] : this.state.initialItems}
                                            </Button>

                                            <Button type="primary" shape="circle" icon={<MinusOutlined />}
                                                size="middle"
                                                disabled={this.state[index + i.item.name] == 1 ? true : false}
                                                onClick={() => this.decrement(i.item, index)} />
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
        itemsInCart: state.itemsInCart,
    };
};


export default connect(
    mapStateToProps, { getItemsinCart }
)(CartList);