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
12. Object Notation
    
    A. `student.name`

    B. `student['Grad Year']`

    C. `student.greeting()`

    D. `student['Favorite Teacher'].name`

    E. `student.courseLoad[0]`
13. Arithmetic
    
    A. `'32'`; it converts the 2 to a string and then concatentates them

    B. `1`; it converts the 3 to an integer before subtracting them

    C. `3`; sets null to be 0, and then adds the ints

    D. `'3null'`; sets null to be a string and then concatenates them

    E. `4`; sets true to be 1, and then adds the ints

    F. `0`; sets false null to be 0, and then adds them

    G. `'3undefined'`; sets undefinded to be a string, and the concatenates them 

    H. `NaN`; tries to convert undefined to a number but it's not possible so it's NaN,
    meaning "Not a Number". When trying to do subtraction it's not possible as a result
    so it just returns NaN. 
14. Comparison
    
    A. `true`; sets 2 to a number and returns true since 2 > 1

    B. `false`; compares a char at a time. The first char is 2 and 1 and 2 > 1, 
    so it returns false. 

    C. `true`; sets '2' to be an int, and 2 == 2 so it returns true

    D. `false`; the int 2 is not equal to the string 2, so it returns false

    E. `false`; converts true to be 1, and 1 is not equal to 2 so returns false

    F. `true`; converts 2 to be true, and true is equal to true so returns true
15. `==` converts the operands on both sides of the equation to 
    a common type before performing the comparison. On the other
    hand, `===` compares the operands directly without modifying
    the types. As we saw in parts C and D in question 14 above, 
    `2 == '2'` will return true, while `2 === '2'` will return false. 
16. Code [here](/expose/javascript/part2-question16.js)
17. `[ 2, 4, 6 ]`; I determined the result by running the code and going
    step by step. For each iteration of the for loop in `modifyArray`, it
    uses each element in the input `array`, multiplies the element by 2
    in `doSomething`, and then pushes it into `newArr`. After the for loop
    is compklete, then it `newArray` with `[ 2, 4, 6 ]`, each element in the 
    original array but doubled. 
18. Code [here](/expose/javascript/part2-question18.js)
19. Answer below
```
1
4
3
2
```