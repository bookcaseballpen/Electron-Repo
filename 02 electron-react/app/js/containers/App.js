import React, {Component} from 'react'

export default class App extends Component {
    props: {
        children: HTMLELEMENT
    };

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
