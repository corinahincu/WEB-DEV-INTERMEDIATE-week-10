
Streams 
|
v
start using data, before it has finished loading

imagine we have a huge file, with a huge data, and we want to read it, we could wait until all of it its read and than do something with it, but that could take a long time, or we can pass the data a bit of a time, through a stream, and in this way small parts of data, packages up in buffers, and than they are send down the stream, every time the buffer fills with data, si de fiecare data the buffer este plin cu data, noi putem sa incepem sa il folosim. exemplu, netflix, youtube, cand se incarca putin video-ul si incepi sa te uiti, nu trebuie sa astepti ca tot video-ul sa se incarce ca sa il privesti