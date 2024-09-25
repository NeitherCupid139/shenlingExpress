"use strict";const e=require("./uni-fetch.js"),s={list:(s=201,t=1,i=10)=>e.uniFetch.get("/driver/messages/page",{contentType:s,page:t,pageSize:i})};exports.msgApi=s;
