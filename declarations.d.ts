// make compiler understand the file type of images
// Also added code to the tsconfig.json file to include the declarations.d.ts file
declare module '*.jpg' {
    const path: string;
    export default path;
}
declare module '*.jpeg' {
    const path: string;
    export default path;
}
declare module '*.svg' {
    const path: string;
    export default path;
}
declare module '*.png' {
    const path: string;
    export default path;
}