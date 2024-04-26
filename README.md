Notes/Concepts I used in making the clone. 

This concept was used while i was making the search bar suggestions part (To optimize it more to make Less API calls {MY Search Suggestion is better than flipkart's XD })
Debouncing- When you are doing something very fast, it just skips some of the events. 
For eg: 
- Typing slow in search bar = 200ms
- Typing fast in search bar = 30ms

Performance: 
Let's say i type iphone pro max slowly vs fastly:
- (SLOW) iphone pro max = 14 letters*1000 = 14000 API calls
- (FAST i.e with debouncing) iphone pro max = 3 API Calls * 1000 = 3000 API calls for the same.

In websites like flipkart, lakhs and lakhs of people search, then API calls with debouncing can be optimized 
to give a better user experience. 

Debouncing with 200ms: 
if diff between 2 key strokes is <200ms = Decline API Calls
                                 >200ms = Make API calls ie if user has stopped typing then he needs suggestions.

Flipkart debouncing is less than google, because google has to provide immediate suggestions with much more greater user experience. 
Google, Youtube- will give you the results for every key strokes.

Youtube debouncing is very less. 
Flipkart is around or greater than 200ms
