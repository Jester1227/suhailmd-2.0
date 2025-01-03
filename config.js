const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94775877546";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_09_01_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgMTcxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODksXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkplMTlSZEpyZURoWktNTlVIc1hIeHJocnhzeVlSRXRFZGphNE1zemd0OVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9MTlFSS1JRVDJ1Rk9EbzNjb0tMakFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWQ3NjYzYmUtZDg4Mi00Y2Y3LWExOTAtMDRlNzA1NTcwYTU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOCxcbiAgICAgIDM2LFxuICAgICAgMTk1LFxuICAgICAgMTIxLFxuICAgICAgMTM2LFxuICAgICAgMjA1LFxuICAgICAgMjE5LFxuICAgICAgMTA3LFxuICAgICAgMjQ3LFxuICAgICAgMjUwLFxuICAgICAgOTYsXG4gICAgICAxMjEsXG4gICAgICAzLFxuICAgICAgMTcyLFxuICAgICAgMSxcbiAgICAgIDE1NixcbiAgICAgIDExOCxcbiAgICAgIDU2LFxuICAgICAgMTgzLFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxODYsXG4gICAgICAyMDMsXG4gICAgICAxNjIsXG4gICAgICA4NyxcbiAgICAgIDY4LFxuICAgICAgMjEwLFxuICAgICAgNDQsXG4gICAgICAxMTEsXG4gICAgICA3NyxcbiAgICAgIDIwLFxuICAgICAgMTcsXG4gICAgICAyNDEsXG4gICAgICAxNzYsXG4gICAgICA5NyxcbiAgICAgIDE5OSxcbiAgICAgIDI1MSxcbiAgICAgIDY0LFxuICAgICAgMTI4LFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk00TVMxTDNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTg3NzU0NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIIgIPCdkJggIPCdkIEgIPCdkIQgICDwnZCRICAgICAgICAgICAgICDwnZCxICAgICAgICAgICAgICAg8J2QiSAg8J2QhCAg8J2QkiAg8J2QkyAg8J2QhCAg8J2QkVwiLFxuICAgIFwibGlkXCI6IFwiMTA5NDkxOTg3MTgxNzE4OjE0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vcC9rWVE4NHJmdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiclZNZktHRFhpaTYvWEhBd1J1SjZwbEhaUmVzbHVUbHJUVlBhOUpGTnhnND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmeVhSQUR6TkhIZ0VFS05CUktzajFYZUtBRHdnRUllY3MyTTRuVGh1aDM3SDhEeHVYTUs2dW91NmlmallmNm1seXZwcVNwL3RmMVdxeXJCUUNhdTJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlS1hRa25wejBNTGtFWlBSQVBVL1BIc3poOWtmQ2FtQjhIdkFQdjRLRVRFNkpXdnF6M25ldk9zNXRCZTlXT3RESjNUVUJRaU1seUppTWFWdTN3b0hDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTg3NzU0NjoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1OTAyNTgzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ2twXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDa3AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDdlVBNTVvSng2RllGWUFLYjhseGQreEVEWW9jd2dQV2N3M2JJK2UxVnowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0ODg3ODU1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTkwMTY5ODkyNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Jester-XMD",
  ownername:process.env.OWNER_NAME|| "Jestee-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
