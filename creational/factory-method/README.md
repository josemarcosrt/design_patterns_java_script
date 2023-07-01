# factory method 

Reason 

Define one interface to create objects, but let the subclass decides which class to intance. This design patterns alllow to postergate the instanciate for another subclass.


- Design patterns of Creational 
- Behind the logic of instanciate from client code.
- Obtained thought the inheritance 

Apply 

- You should use the factory method when you not know witch object you code will need.
- To allow the extention of your factories (in this point we gonna to talk in  SOLID -  Open/Closed)
- Give the power to subclass the decide witch is the logic of creation objects.
- To Elimanate double code criation objects.


Pros 

- Help to apply the Single Responsability Principle. SOLID 1
- Help to apply the Open/Closed principle            SOLID 2
- Help uncoupling the class on the code.  

Coins

- Can create the explosion of class.


