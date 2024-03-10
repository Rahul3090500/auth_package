export class Log {
    static success() {
        console.log(`%c ${msg}`, 'color: green');
    }

    static danger() {
        console.log(`%c ${msg}`, 'color: red');
    }

    static info() {
        console.log(`%c ${msg}`, 'color: black; background: yellow');
    }
}