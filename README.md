## Angular Steps

## Step 2: Δημιουργία νέου component
 
- Δημιουργία ενός νέου component με την εντολή `ng generate component components/navbar`.- Μεταφορά του πίνακα από το `app.component.html` στο template του νέου component.- Συμπερίληψη της κλάσης `NavbarComponent` στον πίνακα `imports` στην αρχικοποίηση του decorator στο αρχείο `app.component.ts`.- Χρήση του νέου component στο template του `app.component.html` με την ετικέτα `<app-navbar></app-navbar>`.

## Step 1: Install Angular Materilas

- Εγκατάσταση του Angular Material και του Angular CDK:
 
  ```bash  ❯ ng add @angular/material  ℹ Using package manager: npm  ✔ Found compatible package version: @angular/material@17.3.2.  ✔ Package information loaded.
 
  The package @angular/material@17.3.2 will be installed and executed.  Would you like to proceed? Yes  ✔ Packages successfully installed.  ? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview:https://material.angular.io?theme=indigo-pink ]  ? Set up global Angular Material typography styles? No  ? Include the Angular animations module? Include and enable animations  UPDATE package.json (1396 bytes)  ✔ Packages installed successfully.  UPDATE src/app/app.config.ts (338 bytes)  UPDATE angular.json (3652 bytes)  UPDATE src/index.html (516 bytes)  UPDATE src/styles.css (181 bytes)  ```
- ng add @angular/material
- ℹ Using package manager: npm
✔ Found compatible package version: @angular/material@17.3.2.
✔ Package information loaded.

- The package @angular/material@17.3.2 will be installed and executed.
Would you like to proceed? Yes
✔ Packages successfully installed.
? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink        [ Preview:
https://material.angular.io?theme=indigo-pink ]
? Set up global Angular Material typography styles? No
? Include the Angular animations module? Include and enable animations
UPDATE package.json (1396 bytes)
✔ Packages installed successfully.
UPDATE src/app/app.config.ts (338 bytes)
UPDATE angular.json (3652 bytes)
UPDATE src/index.html (516 bytes)
UPDATE src/styles.css (181 bytes)


## Step 0: Initialization and preparation
 
- Εγκατάσταση του Angular CLI
 
  ```bash
  npm install -g @angular/cli@latest
  ```
 
- Δημιουργία ενός νέου Angular Project
 
  ```bash
  ng new get-your-ticket-app-angular --standalone --skip-tests
  ```
 
- Επεμβάσεις στο αρχείο `tsconfig.json`
 
  ```json
  {
  ...
  "compilerOptions": {
      ...
      "baseUrl": "./",
      "strict": false,
      ...
  }
  ...
  }
  ```
 
- Εκκίνηση του Angular Project
 
  ```bash
  ❯ ng serve
  Initial chunk files | Names         | Raw size
  polyfills.js        | polyfills     | 83.60 kB |
  main.js             | main          |  1.67 kB |
  styles.css          | styles        | 95 bytes |
 
                      | Initial total | 85.36 kB
 
  Application bundle generation complete. [1.241 seconds]
 
  Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help
  ```
 
- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `http://localhost:4200/`
 
- Δημιουργία online repository στο GitHub (`angular-introduction`) και αποστολή του κώδικα
 
  ```bash
  git remote add origin git@github.com:christodoulos/angular-introduction.git
  git push -u origin main
  ```
 
- Δημιουργία του repository `<username>.github.io` αν δεν υπάρχει ήδη.
 
- Προσθήκη δυνατότητας deployment στις σελίδες gh-pages του GitHub
 
  ```bash
  ng add angular-cli-ghpages
  ```
 
- Προσθήκη του _deploy_ script στο αρχείο `package.json`
 
  ```json
  {
  ...
  "scripts": {
      ...
      "deploy": "ng deploy --base-href=https://<username>.github.io/angular-introduction/"
  }
  ...
  }
  ```
 
- Αποστολή της εφαρμογής στις σελίδες gh-pages του GitHub
 
  ```bash
  npm run deploy
  ```
 
- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`
 
- Ενεργοποίηση του GitHub Pages για το repository `<username>.github.io/angular-introduction`
 
- Η εφαρμογή είναι διαθέσιμη στη διεύθυνση `https://<username>.github.io/angular-introduction/`
 
- Εγκατάσταση του bootstrap
 
  ```bash
  npm install bootstrap
  ```
 
- Επεξεργασία του αρχείου `angular.json`
 
  ```json
  {
  ...
  "styles": [
      "src/styles.css",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  ...
  }
  ```
 
- **Επανεκκίνηση του Angular Project** μετά από κάθε αλλαγή στο αρχείο `angular.json` είναι απαραίτητο να εκκινηθεί ξανά το Angular Project (^C και ξανά `ng serve`)
 
- Τοπική εγκατάσταση του `prettier` και δημιουργία του αρχείου `.prettierrc`
 
  ```bash
  npm install --save-dev prettier
  ```
 
  ```json
  {
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  }
  ```

# GetYourTicketAppAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

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


## Βήμα 3: User Registration Form and Service
- Από το σημείο αυτό και στο εξής είναι απαραίτητο να έχετε εγκαταστήσει τη γλώσσα Python και να χρησιμοποιείτε το Python-Flask backend από το repository [angular-introduction-backend](https://github.com/christodoulos/angular-introduction-python-backend).
 
- Δημιουργία των enviroments με την εντολή:
 
  ```bash
  ng generate environments
  ```
 
- Ενημέρωση των αρχείων `environment.development.ts` και `environment.ts`
 
- Δημιουργία του `User` interface στο αρχείο `shared/interfaces/mongo-backend.ts`:
 
  ```typescript
  export interface User {
    givenName: string;
    surName: string;
    email: string;
    password: string;
  }
  ```
 
- Δημιουργία του `UserService` με την εντολή:
 
  ```bash
  ng generate service shared/services/user
  ```
 
  - Η μέθοδος `registerUser` αποστέλλει στο backend τα πλήρη δεδομένα που αφορούν στην εγγραφή ενός νέου χρήστη
  - Η μέθοδος `check_duplicate_email` ρωτά το backend αν το `email` που λαμβάνει σαν όρισμα χρησιμοποιείται ήδη σε κάποια εγγραφή στη βάση.
 
- Δημιουργία του `UserRegistrationComponent` που υλοποιεί μια reactive form για τη διαδικασία του registration:
 
  - Χρησιμοποιεί το `UserService` με τη χρήση του `inject`,
  - Αρχικοποιεί το `registrationStatus`
  - Ορίζει τη φόρμα του registration με δύο πεδία για το password που θα πρέπει να λάβουν από το χρήστη ακριβώς το ίδιο περιεχόμενο
  - Δεύτερο όρισμα στον ορισμό της φόρμας μέσω του `FormGroup` είναι ο **συνολικός validator** της φόρμας, στην περίπτωσή μας η μέθοδος της κλάσης που εξετάζει αν τα δύο password input συμπίπτουν.
    - Στην περίπτωση εντοπισμού λάθους σε κάποιο input, ο Validator επιστρέφει ένα object με ένα κλειδί ενδεικτικό του λάθους
    - To κλειδί αυτό μπορεί μετά να χρησιμοποιηθεί στο template για να εμφανιστεί κατάλληλο μήνυμα λάθους
 
- Στην υποβολή της φόρμας χρησιμοποιείται το `UserService` για να υποβάλλει στo backend τα δεδομένα της φόρμας. Η εγγραφή στην απάντηση του backend ξεχωρίζει τις περιπτώσεις της απάντησης του backend με τα callbacks στα χαρακτηριστικά `next` και `error`:
 
  - `next`: το callback που καλείται όταν στο backend στείλει HTTP response `20*`.
  - `error`: το callback που καλείται όταν το backend στείλει HTTP reponse `40*` ή `50*`.
  - Ανάλογα θέτουμε το `registrationStatus` για να έχουμε τον αντίστοιχο έλεγχο στο template.
 
- Χρήση του backend για τον έλεγχο ύπαρξης duplicate email στη βάση και χρήση της πληροφορίας κατά το event `blur` για να γίνει το πεδίο email invalid.
