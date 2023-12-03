# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Project Initialization and Setup

### Cloning the Repository
1. Open your command line interface (CLI) and navigate to the directory where you want to clone the repository.
2. Use the following command to clone the repository:
   ```
   git clone https://github.com/dvanauken/angular.git
   ```
3. This will create a directory named `angular` containing the contents of the GitHub repository.

### Angular Project Initialization
1. Ensure you have Node.js (version 10.9.0 or later) and npm (Node Package Manager) installed.
2. Install Angular CLI globally using npm with the command:
   ```
   npm install -g @angular/cli
   ```
3. Navigate to the `angular` directory.
4. Initialize a new Angular project using Angular CLI with:
   ```
   ng new <<project_name>>
   ```
   Replace `<<project_name>>` with your desired project name.

### Running the Development Server
1. Navigate to your project directory (e.g., `cd <<project_name>>`).
2. Start the development server with:
   ```
   ng serve
   ```
3. View your application by navigating to `http://localhost:4200/` in your web browser.

### Commit
1. git add .
2. git commit -m "Inital stup"
3. git tag v0.0.1-initial-setup
4. git push origin main
5. git push origin v0.0.1-initial-setup


## Customizing Component Prefix in Angular

In Angular, the default selector prefix for components is 'app'. You can change this prefix either for a single component or for all components in your project.

### Changing Prefix for a Single Component
- Manually edit the selector in the component's decorator in your TypeScript file. For example, change 'app-custom-button' to 'custom-button'.

### Setting a Custom Prefix for All Components
1. **Angular.json Method:**
   - Open `angular.json` in the root of your Angular project.
   - Locate the `prefix` property under `projects -> [your-project-name] -> schematics -> @schematics/angular:component`.
   - Change the `prefix` value from `app` to your desired prefix.

2. **Command Line Method:**
   - Use Angular CLI to update the prefix for all future components:
     ```shell
     ng config schematics.@schematics/angular:component.prefix custom
     ```
   - Replace `custom` with your desired prefix.

## Component Setup
```bash
ng generate component custom-image 
```

## Routing Setup
```bash
ng generate module app-routing --flat --module=app
```
