# JavaScript Variables and Naming Conventions

## Declaring Variables in JavaScript

JavaScript variables can be declared in four ways:

1. Using `let`
2. Using `const`
3. Using `var` (older JavaScript, not recommended)
4. Automatically (not recommended)

---

## When to Use `var`, `let`, or `const`

1. Always declare your variables.  
2. Use `const` when the value should not change.  
3. Use `const` when the type should not change (e.g., Arrays and Objects).  
4. Use `let` only when you cannot use `const`.  
5. Avoid using `var` when possible. Prefer `let` or `const`.  

---

## JavaScript Identifiers

Variables are identified with unique names called **identifiers**.  
Identifiers can be short (`x`, `y`, `z`) or more descriptive (`age`, `sum`, `carName`).  

### Rules for Identifiers
- Names can contain letters, digits, underscores (`_`), and dollar signs (`$`).  
- Names must begin with a letter, `$`, or `_`.  
- Names are case-sensitive (`y` and `Y` are different variables).  
- Reserved words (JavaScript keywords) cannot be used as variable names.  

---

## Naming Conventions

### camelCase  
The most common naming convention in JavaScript.  
The first word starts with a lowercase letter, and each subsequent word begins with an uppercase letter.  
Example: `firstName`, `totalAmount`.

### PascalCase (UpperCamelCase)  
Each word begins with an uppercase letter, including the first word.  
Typically used for naming **classes** and **components** (e.g., in React).  
Example: `UserProfile`, `CarModel`.

### snake_case  
Words are separated by underscores, and all letters are lowercase.  
Less common in JavaScript, but sometimes used for **constants** or in specific contexts.  
Example: `max_value`, `api_response`.
