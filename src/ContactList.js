import React from "react";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    };

    render() {
        return (
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    {this.state.contacts.map((contact) =>
                        <ListItemLink key={contact.id} href="#simple-list" >
                            <Icon>mail</Icon> <ListItemText primary={contact.name + ' ' + contact.email}/>
                        </ListItemLink>
                    )}
                </List>
            </div>
        )
    }
}

export default ContactList;