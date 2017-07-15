/**
 Задание

 В два поля вводится числа а и b. Нужно написать простой калькулятор,
 который умеет их складывать, вычитать и умножать.
 Отображение на ваше усмотрение.
 **/

var Calculator = React.createClass({
    getInitialState: function () {
        return {
            first: "",
            second: "",
            action: "",
            result: ""
        }
    },

    firstChange: function (e) {
        this.setState({
            first: e.target.value
        });
    },

    secondChange: function (e) {
        this.setState({
            second: e.target.value
        });
    },

    actionChange: function (e) {
        this.setState({
            action: e.target.value
        });
    },

    doAction: function () {
        if (this.state.first !== "" && this.state.second !== "" && this.state.action !== "") {
            if (this.state.action === "+") {
                this.setState({
                    result: parseInt(this.state.first) + parseInt(this.state.second),
                    first: "",
                    second: "",
                    action: ""
                });
            } else if (this.state.action === "-") {
                this.setState({
                    result: parseInt(this.state.first) - parseInt(this.state.second),
                    first: "",
                    second: "",
                    action: ""
                });
            } else if (this.state.action === "*") {
                this.setState({
                    result: parseInt(this.state.first) * parseInt(this.state.second),
                    first: "",
                    second: "",
                    action: ""
                });
            } else if (this.state.action === "/") {
                this.setState({
                    result: parseInt(this.state.first) / parseInt(this.state.second),
                    first: "",
                    second: "",
                    action: ""
                });
            } else {
                alert("Перевірте правильність уведенних даних");
            }
        } else {
            alert("Заповніть усі поля!");
        }
    },

    render: function () {
        return (
            <div>
                <h1 className="center">Calculator</h1>
                <div>
                    <div>
                        <h3 className="text">Введіть перше число:</h3>
                        <input className="input" type="text" value={this.state.first} placeholder="0" onChange={this.firstChange}/>
                    </div>
                    <div>
                        <h3 className="text">Введіть друге число:</h3>
                        <input className="input" type="text" value={this.state.second} placeholder="0" onChange={this.secondChange}/>
                    </div>
                    <div>
                        <h3 className="text">Введіть дію, яку потрібно виконати:</h3>
                        <input className="input" type="text" value={this.state.action} placeholder="+, -, *, /"
                               onChange={this.actionChange}/>
                    </div>
                    <div>
                        <button className="button" onClick={this.doAction}>Отримати результат</button>
                        <div className="result">{this.state.result}</div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <Calculator />,
    document.getElementById("content")
);