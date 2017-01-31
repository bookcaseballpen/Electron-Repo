import React, {Component} from 'react'

export default class ConterPage extends Component {
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
