
import { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';

import actions from "../redux/action";
import { connect } from "react-redux";

const { onAddItemtoCart, getItemsinCart } = actions;

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            existingItemsinCart: [],
            displayList: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("items in cart on update", nextProps)
        this.setState({
            displayList: nextProps.listData
        })
        if (nextProps.applyRangeFilter.length > 0) {
            this.amountFilteredList(nextProps.applyRangeFilter);
        }
        if (nextProps.applySearchFilter != "") {
            this.searchFilteredList(nextProps.applySearchFilter);
        }
    }

    searchFilteredList = (val) => {
        console.log("Search value", val)
        let tempArr = [];
        let currentData = this.props.listData;

        currentData.map(item => {
            if (item.name == val) {
                tempArr.push(item)
            }
        })
        console.log("filtered Array ", tempArr);
        this.setState({
            displayList: tempArr
        })

    }

    amountFilteredList = (rangeVal) => {
        // if the price range is between rangeval then add that item to another array
        let tempArr = [];
        let currentData = this.props.listData;

        currentData.map(item => {
            if ((item.price.actual > rangeVal[0]) && (item.price.actual < rangeVal[1])) {
                tempArr.push(item)
            }
        })
        console.log("filtered Array ", tempArr);
        this.setState({
            displayList: tempArr
        })
    }

    componentDidMount() {
        this.setState({
            displayList: this.props.listData
        })
        this.props.getItemsinCart();
    }

    addItemtoCart = (item, index) => {
        console.log("Item --> ", item)
        console.log("Index --> ", index)
        console.log("onclick item --> ", this.props.itemsInCart)

        let dataObj = {
            index,
            item
        }


        this.props.onAddItemtoCart(dataObj);
    }

    render() {

        console.log("shoppingListData cart ITems >>>>>>>", this.props.itemsInCart)
        const { displayList } = this.state;
        return (
            <div>
                <div className="site-card-wrapper">
                    <Row gutter={16}>

                        {displayList.map((item, index) =>
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
                                    <Button type="primary" shape="round" size="middle" onClick={() => this.addItemtoCart(item, index)}>
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



const mapStateToProps = state => {
    return {
        itemsInCart: state.itemsInCart,
        applySearchFilter: state.applySearchFilter,
        applyRangeFilter: state.applyRangeFilter
    };
};


export default connect(
    mapStateToProps, { onAddItemtoCart, getItemsinCart }
)(ShoppingList);


