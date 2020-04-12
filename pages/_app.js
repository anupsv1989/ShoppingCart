import App from 'next/app'
import '../style/commonStyle.scss';
import 'antd/dist/antd.less';
// import 'antd/dist/antd.css';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider } from "react-redux";
import createStore from '../redux/createStore';


class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps({ ctx })
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp))