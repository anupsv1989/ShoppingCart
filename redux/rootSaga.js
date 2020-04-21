// import { delay } from "redux-saga";
import { call, all, put, takeEvery, takeLatest } from 'redux-saga/effects';
import actions from "./action";

let headers = {
    'Content-Type': 'application/json'
};

export async function get(url) {
    return new Promise(function (resolve, reject) {
        try {
            const options = {
                method: 'GET',
                headers: headers,
            };
            fetch(url, options)
                .then(res => {
                    if (200 === res.status) {
                        return res.json();
                    } else {
                        const error = { response: res };
                        console.log("Error");
                    }
                })
                .then(res => {
                    resolve(res);
                });

        } catch (error) {
            console.log("Error");
        }
    });
}

const fetchListData = async () =>
    await get("https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380");
// await get("https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d");

function* onFetchItem() {
    // yield delay(4000);
    console.log("Inside sAga On Fethc Item")
    // let res = localStorage.getItem("parentReleaseData")
    // yield put({ type: "FETCH_ITEM_SUCCESS", result: res });

    let errMsg = "Error in fetching data."
    try {
        // const searchResult = yield call(fetchListData);//Saga is suspended until the Promise returned by call
        // commented the api call and appended static data as all the api links have expired .

        const searchResult = [
            { "name": "item 1", "price": { "actual": 100, "display": 1000 }, "discount": 90 },
            { "name": "item 2", "price": { "actual": 200, "display": 1000 }, "discount": 80 },
            { "name": "item 3", "price": { "actual": 300, "display": 1000 }, "discount": 70 },
            { "name": "item 4", "price": { "actual": 400, "display": 1000 }, "discount": 60 },
            { "name": "item 5", "price": { "actual": 500, "display": 1000 }, "discount": 50 },
            { "name": "item 6", "price": { "actual": 600, "display": 1000 }, "discount": 40 },
            { "name": "item 7", "price": { "actual": 700, "display": 1000 }, "discount": 30 },
            { "name": "item 8", "price": { "actual": 800, "display": 1000 }, "discount": 20 }
        ];
        if (searchResult !== undefined) {
            console.log("Inside sAga On Fethc Item 1 ", searchResult)
            if (searchResult.length > 0) {
                yield put(actions.onFetchItemSuccess(searchResult));//which instructs the middleware to dispatch a action
            } else {
                yield put(actions.onFetchItemError(errMsg));
            }
        }
    } catch (error) {
        // notification('error', "Something went wrong. Please try again later.");
        yield put(actions.onFetchItemError(errMsg));
    }
}


export default function* rootSaga() {
    yield takeEvery("FETCH_ITEM", onFetchItem);
}