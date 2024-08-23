import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Send } from '@mui/icons-material';
import { discordWebhookUrl } from './Constants';
import axios from 'axios';
import { Stack } from '@mui/material';

const dfltLabel = "Message to my Discord. Cheers"
const sendSuccess = "Sent successfully."
const sendFail = (e: string) => `Sending failed due to: ${e}`
const buttonLabelDefault = "Send To Seb"

function ContactDiscord() {
  const [msg, setMsg] = useState('')
  const refFrom = useRef<HTMLInputElement>(null)
  const refMsg = useRef<HTMLInputElement>(null)
  const [sendButtonTxt, setSendButtonTxt] = useState(buttonLabelDefault)
  const [sendButtonColor, setSendButtonColor] = useState<string>('primary')
  const [label, setLabel] = useState<string>(dfltLabel)

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (msg === '') {
      setLabel("Type a message first. Empty now")
      return;
    }
    let from = refFrom === null ? "Anonymous" : refFrom.current!.value
    let payload = `From: ${from}\n- ${msg}`
    
    try {
      axios.post(discordWebhookUrl, { content: payload });
      console.log(sendSuccess);
      setSendButtonTxt(sendSuccess);
      setSendButtonColor('success');
      setMsg("");
      refMsg.current!.value = "";

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
    setLabel(dfltLabel)
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
            inputRef={refMsg}
            id="message"
            label={label}
            multiline
            rows={2}
            placeholder={label}
            defaultValue=""
            onChange={handleChange}
          />
        </div>
      </Box>
      
      <Box ml={1}>
        <Stack spacing={3} direction="row" alignContent="space-between">
          <div>
            <TextField
              inputRef={refFrom}
              id="from"
              label="From:"
              placeholder="From?"
              defaultValue=""
            />
          </div>

        <Button variant="contained" 
        color={sendButtonColor as "inherit" | "primary" | "error" | "secondary" | "info" | "success" | "warning"} 
        endIcon={<Send />} 
        onClick={handleSubmit}>
          {sendButtonTxt}
        </Button>
        
        </Stack>
      </Box>
      <p>...or email: <b>sebastian.lueneburg@gmail.com</b></p>
    </>
  );
}

export default ContactDiscord;