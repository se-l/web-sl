import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material';
import { discordWebhookUrl } from './Constants';
import axios from 'axios';

const label = "Send a message to my Discord Channel. Don't forget to mention who you are. Cheers"
const sendSuccess = "Sent successfully."
const sendFail = (e: string) => `Sending failed due to: ${e}`
const buttonLabelDefault = "Send To Seb"

function ContactDiscord() {
  const [msg, setMsg] = useState('')
  const [sendButtonTxt, setSendButtonTxt] = useState(buttonLabelDefault)
  const [sendButtonColor, setSendButtonColor] = useState<string>('primary')

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (msg === '') {
      return;
    }
    
    try {
      axios.post(discordWebhookUrl, { content: msg });
      console.log(sendSuccess);
      setSendButtonTxt(sendSuccess);
      setSendButtonColor('success');
      setMsg("");

    } catch (error: any) {
        var e = sendFail(error.toString()) 
        console.error(e);
        setSendButtonTxt(e);
        setSendButtonColor('error');
    }
  };

  const handleChange = (e: any) => {
    setMsg(e.target.value)
    setSendButtonColor('primary')
    setSendButtonTxt(buttonLabelDefault)
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '50%' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={4}
            placeholder={label}
            defaultValue=""
            onChange={handleChange}
          />
        </div>
      </Box>
      <Box ml={1}>
        <Button variant="contained" 
        color={sendButtonColor as "inherit" | "primary" | "error" | "secondary" | "info" | "success" | "warning"} 
        endIcon={<Send />} 
        onClick={handleSubmit}>
          {sendButtonTxt}
        </Button>
      </Box>
      <p>...or<br/><b>sebastian.lueneburg@gmail.com</b></p>
    </>
  );
}

export default ContactDiscord;