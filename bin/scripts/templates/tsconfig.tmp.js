module.exports = {
    compilerOptions: {
        lib: ['dom', 'dom.iterable', 'esnext'],
        strictNullChecks: true,
        noImplicitAny: false,
        allowJs: false,
        experimentalDecorators: true,
        noImplicitThis: true,
        noImplicitReturns: true,
        alwaysStrict: true,
        inlineSourceMap: false,
        inlineSources: false,
        noFallthroughCasesInSwitch: true,
        noUnusedLocals: false,
        noUnusedParameters: false,
        removeComments: true,
        pretty: true,
        strictPropertyInitialization: true,
        skipLibCheck: true,
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        module: 'esnext',
        moduleResolution: 'node',
        resolveJsonModule: true,
        isolatedModules: false,
        noEmit: true,
        target: 'ES6',
        typeRoots: ['./cli/typings'],
        baseUrl: '/',
        paths: {
            '@/*': ['miniprogram/*']
        }
    },
    outDir: 'miniprogram',
    srcDir: 'miniprogram',
    include: ['miniprogram/**/*.ts'],
    exclude: ['node_modules']
};
