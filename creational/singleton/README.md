# Singleton 

Reason 

Singleton is a creational design pattern that lets you ensure that a class 
has only one instance, while providing a global access point to this instance. 

Why use it.

When you open the communication with a specific database you probability want only one source of the truth 
or point the access in this communication, the same way, you hope only one instance to open determinate file.

Attention 

1 - Try to write class with default construction private, that this ways will prevent the another objects to access our binesses rules by anothers ways.

2 - Create static method in construct to call the instance when return put in cached object, 
that this way your code will able to call the single static method the same object always that it will in involk.


Positive points 

1 - Private static point to the store the single instance 

2 - It is need to declare method static to getting the singleton instance.

3 - lady initialization is one of kind implementation of single, that is mean should be create a new object in first instantiate and put the result in static field,
      That this way all the time whenever the class was call, the method always return the instance.

4 - Of course, implement the construtor of class private to protect your date of the other agents irregular modification. 

Good 

1 - Give you ensure that the class has only one instance, it help to solver specifics problems like  access database.
2 - Global access to connect our instance.
3 - The object will initiation only one in the first time instancialization.

Bad 

1 -Violates the Single Responsibility Principle trying to solve two problem in the same time.
    Single Responsibility Principle: work to solve the problem of violating the multiple responsible in code.

2 - Is considere in some aspect bad design for instance when the parts of the program know to much each other. 

