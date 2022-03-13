/*
 question: 1. Create an Employee class. 
● An employee should have 
○ name 
○ Id number 
○ List of permissions that they can perform on the company website ○ Store number for the store where they work*/


class Employee {
    constructor (name, idnumber, permissions, storenumber,) {
this.name = name;
this.idnumber = idnumber;
this.permissions = permissions;
this.storeumber = storenumber;
console.log(this)

const Emily = newEmployee("Emily",0035, "sales and inventory",124);

console.log("Emily" + badge number is + "idnumber" + she works at location "storenumber" + her duties are + "permission.")

}
}




/*    2. Create a Manager class. 
● A manager is a type of employee. 
● A manager should should have 
○ name 
○ Id number 
○ List of permissions that they can perform on the company website ○ Store number for the store where they work 
○ List of employees they manage 
○ The ability to change the permissions an employee that they manage has on the website. 
   */



class Manager {
    constructor (name, idnumber, permissions, storenumber,) {
this.name = name;
this.idnumber = idnumber;
this.permissions = permissions;
this.storeumber = storenumber;
this.employeelist = employeelist;
this.changepermission = changepermission;
console.log(this)

const Jack = myManager("Jack",00125, "administrator,sales and inventory",124 ,["Michael", "Sarah", "Ashley", "Dave"], add/delete);

console.log("Jack" + badge number is + "idnumber" + he works at location "storenumber" + his duties are + "permission." Jack has four employess he manages: + "employeelist".  + As a manager he can + "changepermission" + employee duties.)

}
}



/*  3. const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'] 
Destructure and assign the elements of countries array to fin, est, sw, den, nor 
  */

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const [fin, est, sw, den, nor ] = countries;

document.write(countries)



/* 4. const rectangle = { 
width: 20, 
height: 10, 
area: 200, 
perimeter: 60 
} 
Destructure the rectangle object by its properties. 
 */

const rectangle = { 
    width: 20, 
    height: 10, 
    area: 200, 
    perimeter: 60 
    } 

const [width,height,area,perimeter]  =rectangle  
const [width,area,] = rectangle

/* 5. const evens = [0, 2, 4, 6, 8, 10] 
const odds = [1, 3, 5, 7, 9] 
Using the spread operator, the Array .map() method, and
 at least one arrow function to place the values 
 from evens and odds into an array and
  display the values on a html screen in 
  numerical order.
   */

const evens = [0, 2, 4, 6, 8, 10] 
const odds = [1, 3, 5, 7, 9] 

import React from 'react';
import ReactDOM from 'react-dom';
const myArray = ['0','1','2','3','4','5','6','7','8','9','10'];

const myList = myArray .map((item)  => <p>{item}</p> )
ReactDOM.render(myList, document.getElementById('root'));

/* Spread Operator */
const evens = [0, 2, 4, 6, 8, 10]; 
const odds = [1, 3, 5, 7, 9];
 
const numbersCombined = [...evens,...odds];

document.write(numbersCombined);