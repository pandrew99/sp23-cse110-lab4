1. It will print 3 since we keep incrementing `i` until it's no
long less than the length of the `prices` array. It has a length
of 3, so once `i` is incremented to 3, we stop the for loop and 
thus have a value of 3 and print it out on line 12. 
2. It will print 150 since 300 is the last element of the `prices` array, 
and since we're redefining `discountedPrice` at every iteration of the for
loop, we print out 300 multiplied by the discount (0.5) to get 150 printed. 
3. It will print 150 since it takes the `discountedPrice` from the previous
line above, multiplying it by 100 and rounding, and then dividing by 100. 
It reassigns the variable `finalPrice` created before the for loop to 
be this value, which is 150. 
4. It returns the array `[ 50, 100, 150 ]`. At every iteration of the for loop, 
it takes the element in the `prices` array for that iteration, multiplying it
by 1 - discount, and pushing it to the `discounted` array. In this case, 
it returns an array with each element in `[ 100, 200, 300 ]` and multiples it
by 0.5 to get `[ 50, 100, 150 ]`.
5. It will give an error `ReferenceError: i is not defined`. Since we're using `let`
to set `i` in the for loop, it is not accessible outside of the for loop block. Thus, 
`i` is not defined and returns an error. 
6. It will produce an error `ReferenceError: discountedPrice is not defined`. Since we're using `let`
to define `discountedPrice` in the for loop, it is not accessible outside of the for loop block. Thus, 
`discountedPrice` is not defined and returns an error. 
7. It will print 150 since it takes the `discountedPrice` from the previous
line above within the for loop, multiplying it by 100 and rounding, and then dividing by 100. 
It reassigns the variable `finalPrice` created before the for loop within the block
scope to be this value, which is 150. 
8. It returns the array `[ 50, 100, 150 ]`. We use `let` to create the `discounted` array
within the block scope on line 3, so we can push to it within the for loop. At every iteration of the for loop, 
it takes the element in the `prices` array for that iteration, multiplying it
by 1 - discount, and pushing it to the `discounted` array. In this case, 
it returns an array with each element in `[ 100, 200, 300 ]` and multiples it
by 0.5 to get `[ 50, 100, 150 ]`.
9. It will give an error `ReferenceError: i is not defined`. Since we're using `let`
to set `i` in the for loop, it is not accessible outside of the for loop block. Thus, 
`i` is not defined and returns an error. 
10. It will print 3 since we use the `const` keyword to define `length` on line 4
to be the length of the `prices` array, which is 3. 
11. It returns the array `[ 50, 100, 150 ]`. At every iteration of the for loop, 
it takes the element in the `prices` array for that iteration, multiplying it
by 1 - discount, and pushing it to the `discounted` array. In this case, 
it returns an array with each element in `[ 100, 200, 300 ]` and multiples it
by 0.5 to get `[ 50, 100, 150 ]`.
12. 