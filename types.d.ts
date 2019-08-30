declare type DOM = ReturnType<typeof import('./src/dom').dom>;
declare type cy = typeof import('cypress');
// declare type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
