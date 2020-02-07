const root = document.querySelector('#root');

const randomFavorite = () => {
    let number = Math.floor(Math.random()*2);
    //console.log(number);
    if (number === 0) {
        return false;
    } else {
        return true;
    }
}
//console.log(randomFavorite());

const generateUsers = (number) => {
    const users = [];
    while (users.length < number) {
        const user = faker.helpers.createCard();
        user.isFavorite = randomFavorite();
        users.push(user);
    }
    //console.log(users);
    return users;
}

const users = generateUsers(20);
console.log(users);


class App extends React.Component {
    constructor() {
        super();
        this.state = {'usersfiles' : users}
    }
    render() {
        const toggleFavorite = (ev) => {
            
            let user = ev.target;
            console.log(user.className);
            if (user.className === 'true') {
                user.classList.add('false');
                user.classList.remove('true');
            } else {
                user.classList.add('true');
                user.classList.remove('false');
            }
            this.setState({users});
        }

        const lis = users.map( user => React.createElement('ul',
        {key: user.name, className: user.isFavorite.toString(),onClick: toggleFavorite},
        React.createElement('li',null,user.name),React.createElement('li',null,user.username)),)

        const app = React.createElement('ul',{className: 'mainUl'},lis);
        return app;
    }
}

// App.render();


ReactDOM.render(React.createElement(App),root);







