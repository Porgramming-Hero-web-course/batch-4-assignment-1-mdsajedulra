Blog 1: The significance of union and intersection types in Typescript.


TypeScript’s powerful type system includes features like union types and intersection types that help developers write safer and more maintainable code. 

Union Types:

Union types are a way to specify that a variable can be one of several types. They are defined using the |

    * A union type allows a variable to hold one of several types.

    * You can only access properties and methods that exist on all the types in the union.

    * At runtime, you can use conditional checks (such as typeof or instanceof) to determine the specific type the variable holds.


Example: 

    type a = string;
    type b = number;
    type c = a | b; // union type


Intersection type:

Combine multiple types into one, denoted by the "&".

    * An intersection type combines the structure of two or more types into a single type.

    * Intersection types are commonly used to define objects that need to implement multiple interfaces or extend multiple classes.
    *  Intersection types can also be combined with union types to represent complex data structures that may contain values from multiple sources with differing types

Example:

    interface User1 {
        id: number;
        name: string;
    }
    interface User2{
        role: string;
    }
    
    // apply intersection
    let userAdmin : User1 & User2 ={
        id: 1,
        name : "sajedul", 
        role: "admin"
    }




