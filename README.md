

#Component Library
This project contains a set of simple, reusable React components built with TypeScript. Each component is fully typed and designed for flexibility, readability, and easy integration.

Installation:
To use the components, install the package using npm.

Usage:
Import the component you need and include it in your React project.

Props Overview:
Each component includes clearly defined props. Required props ensure correct usage, while optional ones add flexibility without breaking functionality. Default values are set for common use cases.

Design Considerations:
The components are designed with simplicity and reusability in mind. TypeScript ensures type safety across all props, and composition allows multiple components to work together seamlessly.


#Reflection Questions
1. How did you handle optional props in your components?
I used TypeScript’s optional props (?) and default values inside components. Conditional rendering made sure elements only appeared when those props were provided, like showing the edit button only if onEdit existed.

2. What considerations did you make when designing the component interfaces?
I focused on keeping the interfaces clean, reusable, and easy to understand. Each one included only the necessary fields, with clear typing for event handlers and an optional children prop for flexibility.

3. How did you ensure type safety across your components?
I defined all props with TypeScript interfaces and used strict typing for function parameters. This helped catch errors early and kept the components consistent and predictable.

4. What challenges did you face when implementing component composition?
The main challenge was managing state and communication between components. I solved this by lifting state to the parent and passing handler functions as props, which kept everything organized and easy to control.


