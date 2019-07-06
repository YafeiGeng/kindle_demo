import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../style/App.scss';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
}));

function AppMain() {
    const classes = useStyles();
    return (
        <div>

            <div className='container'>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
            </div>
            <div className='container'>
                <Button className='button' variant="contained" color="primary">
                    发送
                </Button>
                <Button className='button' variant="contained" color="primary">
                    预览
                </Button>
                <Button className='button' variant="contained" color="primary">
                    附件
                </Button>
            </div>
        </div>

    );
}

export default AppMain;
