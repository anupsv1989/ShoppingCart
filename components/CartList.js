
import { Component } from "react";
import { Card, Col, Row, Button } from 'antd';
import Link from 'next/link';
import actions from "../redux/action";
import { connect } from "react-redux";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const { getItemsinCart, deleteItemfromCart } = actions;

class CartList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartDisplayItems: [],
            initialItems: 1,
            totalPriceOfItems: 0,
            totalDiscountedPrice: 0,
            totalPriceDisplay: 0
        }
    }

    componentDidMount() {
        let _this = this;
        this.setState({
            cartDisplayItems: this.props.itemsInCart,
        }, () => {
            if (_this.props.itemsInCart && _this.props.itemsInCart.length > 0)
                _this.calculatePriceSum();
        })

        console.log(" this.props.itemsInCart did mount", this.props.itemsInCart)
    }

    componentWillReceiveProps(nextProps) {
        console.log("NExt props in cartjs", nextProps)
    }

    calculatePriceSum = () => {
        let price = 0;
        let discountedPrice = 0;
        this.state.cartDisplayItems.map(x => {
            price += x.item.price.actual;
            discountedPrice += x.item.price.display;

        })

        let discPrice = discountedPrice - price;

        this.setState({
            totalPriceOfItems: price,
            totalPriceDisplay: discountedPrice,
            totalDiscountedPrice: discPrice
        })
        return price;
    }

    increment = (item, index) => {
        let price = this.state.totalPriceOfItems;
        let discPrice = this.state.totalDiscountedPrice;
        let firstPrice = this.state.totalPriceDisplay;

        price += item.price.actual;
        firstPrice += item.price.display;
        discPrice = firstPrice - price;


        this.setState({
            totalPriceOfItems: price,
            totalPriceDisplay: firstPrice,
            totalDiscountedPrice: discPrice,
            [index + item.name]: this.state[index + item.name] ? (this.state[index + item.name] + 1) : (this.state.initialItems + 1)
        })
    }

    decrement = (item, index) => {
        let price = this.state.totalPriceOfItems;
        let discPrice = this.state.totalDiscountedPrice;
        let firstPrice = this.state.totalPriceDisplay;
        if (this.state[index + item.name] != undefined) {
            price -= item.price.actual;
            firstPrice -= item.price.display;
            discPrice = firstPrice - price;
        }
        this.setState({
            totalPriceOfItems: price,
            totalPriceDisplay: firstPrice,
            totalDiscountedPrice: discPrice,
            [index + item.name]: this.state[index + item.name] ? (this.state[index + item.name] - 1) : (this.state.initialItems - 1)
        })
    }

    removeItems = (item, idx) => {
        let arr = this.state.cartDisplayItems;
        let _this = this;
        // let index = arr.map(x => {
        //     return x.key;
        // }).indexOf(item.key);
        // arr.splice(index, 1);

        this.props.deleteItemfromCart(item);
        // this.props.deleteItemfromCart(arr.length);

        this.setState({
            cartDisplayItems: arr
        }, () => {
            if (_this.state.cartDisplayItems.length > 0) {
                _this.calculatePriceSum();
            }
        })
    }


    render() {
        const { itemsInCart } = this.props;
        return (
            <>
                <div className="cartContainerDiv">
                    {(this.state.cartDisplayItems && this.state.cartDisplayItems.length > 0) ?
                        <div>
                            <div className="cartContainerDiv__cartLeftNav">
                                <div>

                                    {this.state.cartDisplayItems.map((i, index) =>
                                        <Row gutter={16} key={index} className="cartContainerDiv__cartLeftNav--Row">
                                            <Col span={6}>
                                                <div className="cartContainerDiv__cartLeftNav--cartListDiv">
                                                    <img
                                                        alt="example"
                                                        src="https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg"
                                                    />
                                                </div>
                                            </Col>
                                            <Col span={6}>
                                                <div className="cartContainerDiv__cartLeftNav--cartListText">
                                                    <span>{i.item.name}</span>
                                                    <p>
                                                        <span><strong>&#8377; {i.item.price.actual}</strong> </span>
                                                        <span className="shoppingListWrap__listCols--cardprice">
                                                            {i.item.price.display}
                                                        </span>
                                                        <span className="shoppingListWrap__listCols--carddiscount">
                                                            {i.item.discount} % off
                                                </span>
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col span={6}>
                                                <div className="cartContainerDiv__cartLeftNav--cartListText">
                                                    <Button type="primary" shape="circle" icon={<PlusOutlined />}
                                                        size="middle"
                                                        onClick={() => this.increment(i.item, index)} />

                                                    <Button type="dashed" style={{ margin: "5px" }}>
                                                        {this.state[index + i.item.name] > 0 ? this.state[index + i.item.name] : this.state.initialItems}
                                                    </Button>

                                                    <Button type="primary" shape="circle" icon={<MinusOutlined />}
                                                        size="middle"
                                                        disabled={this.state[index + i.item.name] == 1 ? true : false}
                                                        onClick={() => this.decrement(i.item, index)} />
                                                </div>
                                            </Col>
                                            <Col span={6}>
                                                <div className="cartContainerDiv__cartLeftNav--cartListText">
                                                    <Button type="link" danger onClick={() => this.removeItems(i.item, index)}>
                                                        <strong> Remove </strong>
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    )}
                                </div>
                            </div>
                            <div className="cartContainerDiv__cartRightNav">
                                <Card title="Price Details" className="cartContainerDiv__cartRightNav--card">

                                    <Row gutter={16} className="cartContainerDiv__cartRightNav--row">
                                        <Col span={16}>
                                            Price
                                </Col>
                                        <Col span={8}>
                                            {this.state.totalPriceDisplay}
                                        </Col>
                                    </Row>
                                    <Row gutter={16} className="cartContainerDiv__cartRightNav--row">
                                        <Col span={16}>
                                            Discount
                                </Col>
                                        <Col span={8}>
                                            {this.state.totalDiscountedPrice}
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row gutter={16} className="cartContainerDiv__cartRightNav--row">
                                        <Col span={16}>
                                            Total
                                </Col>
                                        <Col span={8}>
                                            {this.state.totalPriceOfItems}
                                        </Col>
                                    </Row>

                                </Card>
                            </div>
                        </div>
                        :

                        <div>
                            Cart is Empty
                            To add items into cart click
                                      <Link href='/'>
                                <a> Home</a>
                            </Link>
                        </div>
                    }

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
    mapStateToProps, { getItemsinCart, deleteItemfromCart }
)(CartList);