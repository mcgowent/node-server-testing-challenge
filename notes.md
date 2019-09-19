# Node Testing Notes 9/19/19

## Testing a function 

If I have a function that returns true  
`function fn() {return true}`  
all you have to do is call it   
`const results =fn()`  
and then check those results  
`if(check){ // Then do this}`  

---
## Now what about an endpoint in an API?

We make a request to the endpoint:  
`const response = await axious.get(url)`  
check that the response is what you expect.