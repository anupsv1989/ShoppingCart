
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
        // fetchList
        this.props.onFetchItem();
    }

    render() {
        console.log("props data", this.props.shoppingListData)
        return (
            <>
                <div className="containerDiv">
                    <div className="leftNav">
                        <Filter />
                    </div>
                    <div className="mainComponent">
                        <Sorter />

                        <ShoppingList listData={this.props.shoppingListData} />
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