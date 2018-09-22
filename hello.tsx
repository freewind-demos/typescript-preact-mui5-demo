import * as React from 'react'

import {List, ListItem, ListItemText, ListItemIcon, Collapse} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import {ExpandMore, ExpandLess} from '@material-ui/icons'

class MyList extends React.Component {
    state = {
        open: false
    }

    toggleSublist = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        return <div>
            <List>
                <ListItem button onClick={this.toggleSublist}>
                    <ListItemIcon>
                        <InboxIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Hello'/>
                    {
                        this.state.open ? <ExpandLess/> : <ExpandMore/>
                    }
                </ListItem>
                <Collapse in={this.state.open}>
                    <List>
                        <ListItem>
                            <ListItemText primary='typescript'/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary='material-ui'/>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </div>
    }
}

export default MyList
