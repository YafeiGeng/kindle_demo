import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import '../style/App.scss';

const useStyles = makeStyles(theme => ({
    body:{
        display: 'flex',
        width:'100%',
        textAlign: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: '256px',
        textAlign: 'center',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        marginRight: 50,
    }
}));

function AppMain() {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <div className={classes.container}>
                <TextField
                    id="standard-password-input"
                    label="请输入要推送的网址"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <div>
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
                <div>
                    <TextField
                        id="standard-password-input"
                        label="请输入信任的邮箱"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="请输入Kindle接收邮箱"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
            </div>
        </div>
    );
}

export default AppMain;
