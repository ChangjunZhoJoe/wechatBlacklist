import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function SearchBar(props) {
  const {onChange} = props
  return (
  <TextField
      id="outlined-password-input"
      label="微信ID"
      autoComplete="current-password"
      variant="standard"
      color='primary'
      style={{width:'100vh'}}
      onChange={onChange}
    />
  );
}
