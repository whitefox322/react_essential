/**Задание

 Усовершенствовать список контактов, написаный на уроке. При клике на контакт,
 он должен разворачиваться (увеличиваться в высоте) и должна отображаться
 какая-то дополнительная информация о контакте (например, адрес и email).
 При повторном клике, информация должна сворачиваться.
 **/

var CONTACTS = [
    {
        id: 1,
        name: 'Darth Vader',
        phoneNumber: '+250966666666',
        image: 'image/darth.jpg',
        address: 'Planet Zyphon',
        email: 'darth@starwars.com'
    }, {
        id: 2,
        name: 'Princess Leia',
        phoneNumber: '+250966344466',
        image: 'image/leia.jpg',
        address: 'Planet Earth',
        email: 'leia@starwars.com'
    }, {
        id: 3,
        name: 'Luke Skywalker',
        phoneNumber: '+250976654433',
        image: 'image/luke.jpg',
        address: 'Planet Bandos',
        email: 'luke@starwars.com'
    }, {
        id: 4,
        name: 'Chewbacca',
        phoneNumber: '+250456784935',
        image: 'image/chewbacca.jpg',
        address: 'Planet Heia',
        email: 'chewbacca@starwars.com'
    }
];

var Contact = React.createClass({
    getInitialState: function () {
      return {
          isOpened: false
      }
    },
    openContact: function () {
        this.setState({
            isOpened: !this.state.isOpened
        })
    },
    render: function() {
        var displayClass = this.state.isOpened ? "active-contact" : "hidden-contact";

        return (
            <li className="contact" onClick={this.openContact}>
                <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                <div className="contact-info">
                    <div className="contact-name"> {this.props.name} </div>
                    <div className="contact-number"> {this.props.phoneNumber} </div>
                </div>
                <div className={displayClass}>
                    <div>{this.props.address}</div>
                    <div>{this.props.email}</div>
                </div>
            </li>
        );
    }
});

var ContactsList = React.createClass({
    getInitialState: function() {
        return {
            displayedContacts: CONTACTS
        };
    },
    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = CONTACTS.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({
            displayedContacts: displayedContacts
        });
    },
    render: function() {
        return (
            <div className="contacts">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                address={el.address}
                                email={el.email}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
});
ReactDOM.render(
    <ContactsList />,
    document.getElementById("content")
);
