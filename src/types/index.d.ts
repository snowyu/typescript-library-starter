//// <reference types="pouchdb-core" />
/**
 * If you import a dependency which does not include its own type definitions,
 * TypeScript will try to find a definition for it by following the `typeRoots`
 * compiler option in tsconfig.json. For this project, we've configured it to
 * fall back to this folder if nothing is found in node_modules/@types.
 *
 * Often, you can install the DefinitelyTyped
 * (https://github.com/DefinitelyTyped/DefinitelyTyped) type definition for the
 * dependency in question. However, if no one has yet contributed definitions
 * for the package, you may want to declare your own. (If you're using the
 * `noImplicitAny` compiler options, you'll be required to declare it.)
 *
 * This is an example type definition for the `sha.js` package, used in hash.ts.
 *
 * (This definition was primarily extracted from:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v8/index.d.ts
 */
