# Command line calculator for IS219 built in node.js

## How to run the calculator

1. Clone the repo
2. run 'npm install'

[![Coverage Status](https://coveralls.io/repos/github/tommy-diez/is219-calculator/badge.svg?branch=master)](https://coveralls.io/github/tommy-diez/is219-calculator?branch=master)
[![Build Status](https://travis-ci.com/tommy-diez/is219-calculator.svg?branch=master)](https://travis-ci.com/tommy-diez/is219-calculator)

---

# SOLID Programming Principles

### S : Single responsibility principle 
Every javascript function in a project should have one objective in mind. 
Meaning, it should do one thing and do it well. In this instance, every method in the 
MathOperations Class is performing a single mathematical operation.

    static sum(a, b){

        return a + b;

    }

### O: Open-Closed Principle
The open-closed principle states that javaScript modules should be able to be extended
without needing to modify the existing code base. For the calculator, this is represented
by the ability to add calculations to the calculator history
              
    class Calculator {

        static history = [];

In order to append to it, you can do so without manipulating the Calculator
class

### L: Liskov Substitution Principle
The Liskov substitution principle states that objects of a superclass can be objects of a subclass without breaking the application. 
Meaning, input parameter have to be the same for overridden methods, and that return
types have to match, among other things.

### I: Interface Segregation Principle
The Interface Segregation Principle holds that clients should not be forced
to implement interfaces that they do not use. It's a super easy principle 
to break while adding new features to your application.

### D: Dependency Inversion Principle
The Dependency Inversion Principle is based on both the Liskov Substation, and Open/Closed Principles.
It states ine essence that high level modules should not depend on low level modules. Instead, 
they should both depend on abstractions. Also, that details should rely on abstractions.

---
# Object-Oriented Programming 

### Encapsulation: 
Encapsulation is the bread-and-butter of Object-Oriented Programming.It refers
to creating classes that have hidden information and methods that act upon this information. 
Meaning, other objects don't have access to these information attributes, only to public functions
that act on them known as methods.

### Abstraction:
Abstraction refers to creating unique blueprints(classes) of reusable code. So, that class instances(objects) only show the high-level instructions 
for using them. Meaning, when you call a method on an object, you don't need to 
know any of the information/code associated with the method. 

### Inheritance:
Inheritance refers to the possibility for the existence of subclasses and superclasses. 
Meaning, you can define classes that inherit(retain) the methods and attributes
of parent(super) classes, and implement their own.

### Polymorphism: 
Polymorphism refers to the ability to treat multiple different child classes
the same way as its parent class. Meaning you can take a collection(such as an array) of
child objects and loop through them to perform a method defined in their parent class. 





