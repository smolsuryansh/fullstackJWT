import * as React from 'react';

import { request } from '../axios_helper';

export default class AuthContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    };

    componentDidMount() {
        request(
            "GET",
            "/messages",
            {}
        ).then((response) => {
            this.setState({data : response.data});
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">

                <div className="col-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Backend Response</h5>
                            <p className="card-text">Content: </p>
                            <ul>
                                {this.state.data && this.state.data.map((line) => <li>{line}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         data : []
    //     };
    // }

    // componentDidMount() {
    //     request(
    //             "GET",
    //             "/messages",
    //             {}
    //         )
    //         .then((response) => {
    //             console.log('API Response:', response.data); // Log the response
    //             this.setState({ data: Array.isArray(response.data) ? response.data : [] });
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching messages:', error);
    //         });
    // }

    // render() {
    //     const { data } = this.state;
    //     return (
    //         <div className="row justify-content-md-center">

    //             <div className="col-4">
    //                 <div className="card" style={{ width: "18rem"}}>
    //                     {Array.isArray(data) ? (
    //                         data.map((line, index) => <p key={index}>{line}</p>)
    //                     ) : (
    //                         <p>No messages found or invalid data format.</p>
    //                     )}
    //                 </div>
    //             </div>

    //         </div>
    //     );
    // }
}