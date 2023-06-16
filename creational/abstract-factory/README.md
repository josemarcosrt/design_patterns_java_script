# Abstract-factory

Reason 

Offer one interface to cration of familiarites of related objects or dependences without to specifie the concrete class.


Abstract-factory

The Abstract-factory came to garante the families of the objetcs similares always work toguethers (lets help to undertand it)

Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.


Names of the class Windows:
- UIWindows
- ButtonWindows
- InputWindows

Names of the class Linux:
- UILinux
- ButtonLinux
- InputLinux

Names of the class Mac:
- UIMac
- ButtonMac
- InputMac

https://refactoring.guru/design-patterns/abstract-factory


Very probability you won't to be mix the class UILinux with UIMac, that no make sense. So that why we should separate the objects realation  or dependents 

Class Abstract 

UIFactory -  
  Abstrations methods below
  - createUI, 
  - createButto 
  - createInput

We can to implement the manufatures concreate class now, extending of this objects

UIWindowsFactory, UILinuxFactory e UIMacFactory 


UIFactory (fábrica abstrata)

UIWindowsFactory (fábrica concreta):
  createUI(): UI -> UIWindows    createButton(): Button -> ButtonWindows   createInput(): Input -> InputWindows

UILinuxFactory (fábrica concreta):
  
  
  createUI(): UI -> UILinux
  createButton(): Button -> ButtonLinux
  createInput(): Input -> InputLinux

UIMacFactory (fábrica concreta):
  
  createUI(): UI -> UIMac
  createButton(): Button -> ButtonMac
  createInput(): Input -> InputMac