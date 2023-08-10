
+ usually payment services (stripe, bpay, paynet, paypal, ... )
    s2s
    c2s

-----------------------------------------------------------------
fetch API/AJAX -> c2s
nodejs         -> s2s

+ JSON/CSV/XML/ ..
+ structured data
+ packages + modules
+ http/s - module


----
NODEJS
    - net/internet
      HTTP/1
      HTTP/S
      HTTP/2 !! sa citim 

          client/server

      DNS
      SMTP
      ...


-----------------------------------------------------

i/o mechanics

IO DATA STREAMS 
   - why ?
       1. chuncking (impartit in bucati)
       2. process while progressing

fetch(), request(), response(), ... dns(), ftp(), fs()

------------------------------------------------------
Stream (patoc - flux)
readable, writtable, duplex : mix(read+write) , transform(inca nu il atingem)

event binding ( start, end, data, error, ...)

---------------------------------------------------

HTTP(S)
ClientRequest
IncommingMessage - stream readable

req = http.request(options, req => {
    req -> O-Stream (output stream) 
    req <- I-Stream
}) 
req.end()

req.write(...)

req:
     init     write1   write2             end
x------|-------|--------|----- .... -------|------>


res:
     init     read1   read2               end
x------|-------|--------|----- .... -------|------>

app (client) -------> request ------> weather server API
event <     <-------- response <----- ??
