# recharge-cli

A CLI tool to quickly scaffold Express.js modules, controllers, models, services, routes, and middlewares for rapid backend development.

## Features
- Instantly generate Express.js modules, controllers, models, services, routes, and middlewares
- Simple command-line interface
- Designed for rapid backend prototyping

## Installation

```
npm install -g recharge-cli
```

Or use locally in your project:

```
npm install recharge-cli --save-dev
```

## Usage

Run the CLI using:

```
recharge <command> [options]
```

To see the help menu:

```
recharge help
```

### Available Commands

- **Create a module:**
  ```
  recharge make:module --name=<moduleName>
  ```
- **Create a controller:**
  ```
  recharge make:controller --name=<controllerName> --module=<moduleName>
  ```
- **Create a model:**
  ```
  recharge make:model --name=<modelName> --module=<moduleName>
  ```
- **Create a service:**
  ```
  recharge make:service --name=<serviceName> --module=<moduleName>
  ```
- **Create a route:**
  ```
  recharge make:route --name=<routeName> --module=<moduleName>
  ```
- **Create a middleware:**
  ```
  recharge make:middleware --name=<middlewareName> --module=<moduleName>
  ```

## Example

```
recharge make:module --name=users
recharge make:controller --name=userController --module=users
recharge make:model --name=user --module=users
recharge make:service --name=userService --module=users
recharge make:route --name=userRoute --module=users
recharge make:middleware --name=auth --module=users
```

## Author

**iftekher**

For support, contact: iftekhermahmud1@gmail.com

## License

MIT
