export async function defineConfig(env) {
    const { default: pluginJson } = await env.$import(
        'https://cdn.jsdelivr.net/npm/@erskingardner/inlang-plugin-json@latest/dist/index.js'
    );

    const { default: standardLintRules } = await env.$import(
        'https://cdn.jsdelivr.net/gh/inlang/standard-lint-rules@2/dist/index.js'
    );

    return {
        referenceLanguage: 'en',
        plugins: [
            pluginJson({ pathPattern: './src/lib/locales/{language}.json' }),
            standardLintRules()
        ]
    };
}
