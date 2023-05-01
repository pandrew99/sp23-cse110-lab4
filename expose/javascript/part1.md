1. values added: 20
2. final result: 20
3. values added: 20
4. Nothing is printed, we received an error: "ReferenceError: result is not defined"
It returns an error since using the `let` keyword means it is not accessible 
outside of the block that `result` is in.
5. Nothing, we get an error at line 7 and never get to line 9. On line 7, 
we receive the following error: TypeError: Assignment to constant variable. 
The `const` keyword means that `result` cannot be reassigned after first 
being declared, so on line 7 you are not allowed to reassign `result`. 
6. Nothing, we get an error at line 7 and never get to line 13. On line 7, 
we receive the following error: TypeError: Assignment to constant variable. 
The `const` keyword means that `result` cannot be reassigned after first 
being declared, so on line 7 you are not allowed to reassign `result`. 