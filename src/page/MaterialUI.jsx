import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles(theme => ({
    // root: {
    //     '& .MuiTextField-root': {
    //         margin: theme.spacing(1),
    //         width: 200,
    //     },
    // },
}));

export default function App(props) {
    const [emailValue, setEmailValue] = useState(undefined);
    const classes = useStyles()
    const { register, handleSubmit, errors, control, getValues, triggerValidation } = useForm({
        mode: 'onChange',
        // reValidateMode: 'onChange',
        // defaultValues: {},
        // validateCriteriaMode: "firstErrorDetected",
        // submitFocusError: true,
        // nativeValidation: false,
    })
    const handleLogin = data => {
        console.log(errors)
        console.log(data)
    }
    const getData = () => {
        // 获取所有值
        let values = getValues();
        // 单独验证邮箱
        triggerValidation("email");
        setEmailValue(JSON.stringify(values));
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit(handleLogin)}>
            <div>
                <TextField
                    inputRef={register({
                        required: '必填',
                        pattern: { value: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, message: '输入正确的邮箱'}
                    })}
                    error={Boolean(errors.email)}
                    variant="outlined"
                    margin="normal"
                    // fullWidth
                    id="email"
                    label="邮箱"
                    name="email"
                    helperText={
                        errors.email ? errors.email.message : '提示'
                    }
                    defaultValue='99'
                    
                />
            </div>
            <br/>
            <div>
                <TextField
                    inputRef={register({
                        required: '必填',
                        maxLength: { value: 5, message: '5个字符' },
                        
                    })}
                    error={Boolean(errors.nikeName)}
                    id="nikeName"
                    label="昵称"
                    name="nikeName"
                    helperText={
                        errors.nikeName ? errors.nikeName.message : '输入昵称'
                    }
                />
            </div>
            <br/>
            <div>
                <Controller as={<TextField />} autoFocus name="place" label="地址" control={control} defaultValue="重庆市渝中区" />
            </div>
            <br/>
            <div>
                <Button
                    type="submit"
                    // fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    提交
                </Button>
            </div>
            <br/>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={getData}
                >
                    表单值 验证email
                </Button>
            </div>
            {
                emailValue && 
                <span>
                {emailValue}
                </span>
            }
          </form >
  )
}

