import fs from 'fs';
import test from 'ava';
import pathExists from 'path-exists';
import tempfile from 'tempfile';
import execa from 'execa';

const tmpdir = tempfile();
fs.mkdirSync(tmpdir);
process.chdir(tmpdir);

test('Junk files should be removed', async (t) => {
    const fixtures = [
        '.DS_Store',
        '.AppleDouble',
        '._test',
        '__MACOSX',
        'test~',
        'Thumbs.db',
        'Desktop.ini',
        'npm-debug.log',
    ];

    fixtures.forEach((file) => {
        fs.writeFileSync(file, '');
        t.true(pathExists.sync(file));
    });

    process.chdir(__dirname);

    await execa('./cli.js', [tmpdir]);

    fixtures.forEach((file) => {
        t.false(pathExists.sync(file));
    });
});
