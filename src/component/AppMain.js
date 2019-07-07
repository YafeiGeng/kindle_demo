import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../style/App.scss';
import axios from 'axios';

let styles = {
    body: {
        display: 'flex',
        width: '100%',
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
};

class AppMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }

    getInputValue = (e) => {
        this.setState({input: e.target.value})
    };

    preview = () => {
        console.log(this.state.input);
        axios.post("http://api.kindlezhushou.com/preview",{url:this.state.input})
            .then((res)=>{
                console.log(res.data);
            })
    };

    render() {
        return (
            <div style={styles.body}>
                <div style={styles.container}>
                    <TextField
                        id="standard-password-input"
                        label="请输入要推送的网址"
                        style={styles.textField}
                        type="text"
                        autoComplete="current-password"
                        margin="normal"
                        onChange={this.getInputValue}
                    />
                    <div>
                        <Button style={styles.button} variant="contained" color="primary">
                            发送
                        </Button>
                        <Button style={styles.button} variant="contained" color="primary" onClick={this.preview}>
                            预览
                        </Button>
                        <Button style={styles.button} variant="contained" color="primary">
                            附件
                        </Button>
                    </div>
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="请输入信任的邮箱"
                            style={styles.textField}
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </div>
                    <div>
                        <TextField
                            id="standard-password-input"
                            label="请输入Kindle接收邮箱"
                            style={styles.textField}
                            type="text"
                            autoComplete="current-password"
                            margin="normal"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default AppMain;
