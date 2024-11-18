#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');

const ignoreFiles = ['prisma/schema.prisma'];
const rootDirPattern = 'prisma';
const filePattern = '**/*.prisma';
const outputFile = 'prisma/schema.prisma';
const glob = require('glob-promise');
const child_process = require('child_process');

async function main() {
    console.log('Find files');
    const rootDir = await fs.opendir(rootDirPattern);
    console.log('Build schema');
    const files = await Promise.all(
        await findFiles(rootDir).then((files) =>
            files.map((x) => fs.readFile(x).then((x) => x.toString('utf-8'))),
        ),
    );

    const outputFirstLine = '//######### DO NOT MODIFY #########\n';

    const data = outputFirstLine + files.join('\n\n');

    console.log('Save schema');
    await fs.writeFile(outputFile, data);

    if (process.argv[process.argv.length - 1].trim() === 'generate') {
        console.log('Generate prisma-client.js');
        child_process.exec('npx prisma generate');
    }
}

/**
 * @param {fs.Dir} dir
 * @return {Promise<string[]>}
 */
async function findFiles(dir) {
    return await glob
        .promise(path.join(rootDirPattern, filePattern))
        .then((list) =>
            list.filter((name) => {
                for (const ignoreFile of ignoreFiles) {
                    if (name.endsWith(ignoreFile)) return false;
                }
                return true;
            }),
        );
}

main().catch((e) => {
    console.error(e);
});
