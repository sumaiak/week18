2.1 What is the purpose of the key value, which must be given to individual rows in a react-list

the purpose of key, is to track the state of the element , so if it got removed,changed
added ,so it  which element got modified .

2.2 It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?
in map function we can use index parameter .


2.3 What is the difference(s) between state and props?
a state can be mutable ,unlike probs it is immutable .


2.4 For which scenarios would you use props, and for which would you use state?
probs can be used when we want to pass a probs from the parent function(app) to the
child componenet so they can share same date , and state , when  an element could change over time , and it should be updated here comes the use of state .