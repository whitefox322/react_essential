/**Задание

 В поле ввода вводится текст. Снизу надпись, которая отображает “Hello, <введенный текст>!”.
 Текст должен меняться по мере ввода. Если в поле ничего не введено, то должно быть выведено “Hello, stranger!”.
 **/

var Hello = React.createClass({
    getInitialState: function () {
        return {
            name: "stranger"
        }
    },

    getInfo: function (e) {
        this.setState({
            name: e.target.value
        });
        if (!e.target.value) {
            this.setState(this.getInitialState());
        }
    },

    render: function () {
        return (
            <div className="center">
                <input type="text" className="input" onChange={this.getInfo}/>
                <div className="text">Hello, {this.state.name}!</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Hello />,
    document.getElementById("content")
);