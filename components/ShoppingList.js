
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
            displayList: [],
            isDisabled: false
        }
    }

    componentWillReceiveProps(nextProps) {
        const { applyRangeFilter = [] } = nextProps;
        this.setState({
            displayList: nextProps.listData
        })
        if (nextProps.renderSortedData && nextProps.renderSortedData.length > 0) {
            this.setState({
                displayList: nextProps.renderSortedData
            })
        }
        if (applyRangeFilter.length > 0) {
            this.amountFilteredList(applyRangeFilter);
        }
        if (nextProps.applySearchFilter && nextProps.applySearchFilter != "") {
            this.searchFilteredList(nextProps.applySearchFilter);
        }
    }

    searchFilteredList = (val) => {
        console.log("Search value", val)
        let tempArr = [];
        let { listData: currentData = [] } = this.props;

        currentData.map(item => {
            if (item.name == val) {
                tempArr.push(item)
            }
        })
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
        this.setState({
            displayList: tempArr
        })
    }

    componentDidMount() {
        this.props.getItemsinCart();
    }




    addItemtoCart = (item, index) => {
        let dataObj = {
            index,
            item
        }

        this.setState({
            [index + item.name]: true
        })

        this.props.onAddItemtoCart(dataObj);
        this.props.getItemsinCart();
    }

    render() {
        const { listData: displayList = [] } = this.props;

        console.log("renderSortedData <<<<<>>>>>> renderSortedData", this.props.renderSortedData)

        return (
            <div>
                <div className="shoppingListWrap">
                    <Row gutter={16}>
                        {this.state.displayList.map((item, index) =>
                            <Col span={4} className="shoppingListWrap__listCols" key={index}>
                                <Card
                                    className="shoppingListWrap__listCols--card"
                                    cover={<img alt="example" src="https://cdn.britannica.com/s:700x500/77/170477-050-1C747EE3/Laptop-computer.jpg" />}
                                >

                                    <p>{item.name}</p>
                                    <p>
                                        <span><strong> &#8377;{item.price.actual} </strong> </span>
                                        <span className="shoppingListWrap__listCols--cardprice"> {item.price.display}</span>
                                        <span className="shoppingListWrap__listCols--carddiscount">  {item.discount}% off</span>
                                    </p>
                                    <Button type="primary"
                                        shape="round"
                                        size="middle"
                                        disabled={this.state[index + item.name] ? this.state[index + item.name] : this.state.isDisabled}
                                        className="shoppingListWrap__listCols--AddBtn"
                                        onClick={() => this.addItemtoCart(item, index)}>
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

