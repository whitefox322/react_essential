/**
 Задание

 В компонент передается заголовок, имя автора и текст, а он их отображает, как статью. Внешний вид на ваше усмотрение.
 **/

var content = {
    title: "New Article",
    author: "New Author",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut nulla obcaecati rem! Architecto distinctio fuga perferendis ullam vero. Dolorum."
};

var Article = React.createClass({
    render: function () {
        return (
            <div className="text">
                <h1 className="center">{content.title}</h1>
                <div className="center">{content.content}</div>
                <div className="right">{content.author}</div>
            </div>
        );
    }
});

ReactDOM.render(
    <Article />,
    document.getElementById("content")
);