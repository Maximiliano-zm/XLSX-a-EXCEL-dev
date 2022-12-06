# Api rest / Convert Excel to Json.
---
## How install
- npm i
### Runs the app in the development mode.
- npm run dev
Runs the app in the development mode.
Open http://localhost:3000/api/data to view it in your browser.
---
## NPM installed

- npm install typescript -D
- npm install express -E
- npm intall @types/express -D
- npm install convert-excel-to-json

---
## Scripts in package.json
    "dev": "ts-node-dev src/index.ts",
    "start": "node build/index.js",
    "tsc": "tsc", : transform file ts in js
    "test": "echo \"Error: no test specified\" && exit 1"
  },

## Change Tsconfig.json

- "outDir": "./build",   

## abrir conexion aws

- ssh ubuntu@ec2-52-67-234-208.sa-east-1.compute.amazonaws.com -i node.pem
