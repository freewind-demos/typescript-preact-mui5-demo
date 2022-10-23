import React, {useState} from 'react'

import {List, ListItem, ListItemText, ListItemIcon, Collapse} from '@mui/material'
import {Inbox, ExpandMore, ExpandLess} from '@mui/icons-material'

export default function MyList() {
  const [open, setOpen] = useState(false)

  return <div>
    <List>
      <ListItem button onClick={() => setOpen(!open)}>
        <ListItemIcon>
          <Inbox/>
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
