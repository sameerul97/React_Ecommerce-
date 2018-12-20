import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class DetailPhoneComponent extends Component {

    componentDidMount() {
        console.log("Im detail comp")
        // console.log(this.props.match.params);
        // console.log(this.props.match.params.mobileid);
        const mobileIdToSearch = 120;
        console.log(mobileIdToSearch)
        var url = new URL("http://localhost:3000/getPhone/" + mobileIdToSearch)
        var params = { mobileId: mobileIdToSearch }
        // var params = [['lat', '35.696233'], ['long', '139.570431']]
        console.log(params.mobileId)
        url.search = new URLSearchParams(params)


        fetch("http://localhost:3000/getPhone/" + mobileIdToSearch)
            .then(function (response) {
                return response.json();
            })
            // .then(response => response.json())
            .then(function (myJson) {
                console.log((myJson));
                return myJson.MobileData;
            })
            .then(mostlyWished => {
                this.setState({ hits: mostlyWished })
                // this.state.setState({ hits: mostlyWished[0] })
                // console.log("last one  ", this.state);
            })
        // var temp = new URLSearchParams(this.props.location);
        // console.log(temp)
        // console.log(this.props.location.search);
        this.loginFunction()
    }
    loginFunction() {
        var userEmail = "sameerul97@gmail.com3"
        var userPassword = "saharjath12";


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", 'application/x-www-form-urlencoded');
        fetch("http://localhost:3000/login/", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            headers: {
                "Content-Type": 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams("email=" + userEmail + "&password=" + userPassword), // body data type must match "Content-Type" header
        }).then(function (response) {
            return response.json();
        })
            // .then(response => response.json())
            .then(function (myJson) {
                console.log((myJson.email));
                localStorage.setItem("email", myJson.email)
                localStorage.setItem("userId", myJson.userId)
                localStorage.setItem("name", myJson.name)
                localStorage.setItem("token", myJson.token)
                return myJson.MobileData;
            })
    }
    render() {
        return (
            <div>
                <h1>Detaail comp</h1>
                {/* <h1>{mobileId}</h1> */}
            </div>
        )
    }

}
// withRouter(DetailPhoneComponent)

export default withRouter(DetailPhoneComponent);
