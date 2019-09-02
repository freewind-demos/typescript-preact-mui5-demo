import React, {useState} from 'react'

import {List, ListItem, ListItemText, ListItemIcon, Collapse} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import {ExpandMore, ExpandLess} from '@material-ui/icons'

export default function MyList() {
  const [open, setOpen] = useState(false)

  return <div>
    <List>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary='Hello'/>
        {
          open ? <ExpandLess/> : <ExpandMore/>
        }
      </ListItem>
      <Collapse in={open}>
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
