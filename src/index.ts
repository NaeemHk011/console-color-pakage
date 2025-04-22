export class Log {
    static success(message: string): void {
        console.log(`%c${message}`, 'color: green; font-weight: bold; font-size: 16px;');
    }
    static error(message: string): void {
        console.log(`%c${message}`, 'color: red; font-weight: bold; font-size: 16px;');
    }

    static info(message: string): void {
        console.log(`%c${message}`, 'color: blue; font-weight: bold; font-size: 16px;');
    }
    static warn(message: string): void {
        console.log(`%c${message}`, 'color: orange; font-weight: bold; font-size: 16px;');

    }

}