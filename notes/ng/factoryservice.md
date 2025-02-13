# Ng Factory and Service
In AngularJS, **factories** and **services** are two fundamental concepts used for creating reusable code, particularly for handling business logic, data, and interacting with APIs. They both allow you to organize your application's logic in a modular way and inject dependencies into controllers, directives, and other components. However, they differ slightly in how they are instantiated and used.

### **Factory in AngularJS**
- A **factory** is a function that returns an object or a value. It is used to define reusable services in your application.
- A factory can return any type of object (e.g., a function, an array, a literal object) which can then be injected and used in other parts of your application.
- A factory is generally used when you want to control the initialization and creation of the service. It allows more flexibility, especially for complex services.

**Example of Factory:**
```javascript
app.factory('myFactory', function() {
  var counter = 0;
  
  return {
    increment: function() {
      counter++;
    },
    getCounter: function() {
      return counter;
    }
  };
});
```
Here, `myFactory` exposes methods to interact with a counter. You can inject `myFactory` into a controller to use the `increment` and `getCounter` methods.

### **Service in AngularJS**
- A **service** is essentially a constructor function that gets instantiated with the `new` keyword when AngularJS creates the service. It’s a class-like object that gets instantiated once and can hold state and methods.
- Services are used when you need to create a singleton that maintains its state throughout the lifetime of the application.
- It’s simpler to use than a factory if you are just returning a function or a set of methods tied to a state.

**Example of Service:**
```javascript
app.service('myService', function() {
  this.counter = 0;
  
  this.increment = function() {
    this.counter++;
  };
  
  this.getCounter = function() {
    return this.counter;
  };
});
```
Here, `myService` behaves similarly to the factory example but uses a `this` reference and acts more like a class with methods attached to it.

### **Key Differences:**
1. **Instantiation:**
   - **Factory:** Returns an object or function and can be more flexible in how you structure the object.
   - **Service:** Uses a constructor function and creates a single instance of the object.
   
2. **Usage:**
   - **Factory:** Returns the object directly and can be used for creating complex objects or services.
   - **Service:** Typically used to create a singleton with shared state.

3. **Syntax:**
   - **Factory:** More functional approach, as it returns a value directly.
   - **Service:** More object-oriented, as it uses `this` to define methods and properties.

### When to Use Which:
- **Use a factory** when you want to have more control over the initialization and need more flexibility in how the service is created or configured.
- **Use a service** when you need a singleton instance with methods and properties tied to the service that you want to reuse across your application.

Both factories and services are great tools to structure reusable logic and improve the maintainability of your AngularJS application.