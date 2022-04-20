// require('mockjs').setUp({
//   timeout: '200-600'
// })
// import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
// const modules = import.meta.globEager('./**/*.ts');
// console.log(789)
// const mockModules: unknown[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });

// /**
//  * Used in a production environment. Need to manually import all modules
//  */
// export function setupProdMockServer() {
//   console.log('mock-modules:', mockModules)
//   createProdMockServer(mockModules);
// }
