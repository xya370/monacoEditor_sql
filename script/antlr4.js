
import path from 'path'
import fs from 'fs'
import inquirer from 'inquirer'
import chalk from 'chalk'
import {cleanComment }from './cleanComment.js'
import chidProcess from 'child_process'
import yargsParser from 'yargs-parser';
import { fileURLToPath, URL } from 'node:url'
const __filenameNew = fileURLToPath(import.meta.url)
const __dirnameNew = path.dirname(__filenameNew)
// const path = require('path');
const exec = chidProcess.exec;
// const fs = require('fs');
const argv =yargsParser(process.argv.slice(2));
// const inquirer = require('inquirer');
// const chalk = require('chalk');
// const { cleanComment } = require('./cleanComment');

const grammarsPath = path.resolve(__dirnameNew, '../src/grammar');
const outputPath = path.resolve(__dirnameNew, '../src/lib');

const languageEntries = fs.readdirSync(grammarsPath);

const baseCmd = 'antlr4ng -Dlanguage=TypeScript -visitor -listener -Xexact-output-dir -o';

function compile(language) {
    const cmd = `${baseCmd} ${outputPath}/${language} ${grammarsPath}/${language}/*.g4`;

    if (language !== 'plsql' && fs.existsSync(`${outputPath}/${language}`)) {
        console.info(chalk.green(`\nRemoving:`, chalk.gray(`${outputPath}/${language}/*`)));
        fs.rmSync(`${outputPath}/${language}`, { recursive: true });
    }

    console.info(chalk.green('Executing:'), chalk.gray(cmd));
    exec(cmd, (err) => {
        if (err) {
            console.error(
                chalk.redBright(`\n[Antlr4 compile error]:`),
                chalk.cyan(language),
                chalk.gray(err)
            );
        } else {
            cleanComment(language);
            console.info(chalk.greenBright(`Compile ${language} succeeded!`));
        }
    });
}

function prompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'language',
                message: 'Which language you want compile (or all languages)',
                choices: ['All Languages', ...languageEntries],
                loop: true,
            },
        ])
        .then((result) => {
            const language = result.language;
            if (language === 'All Languages') {
                languageEntries.forEach((language) => {
                    compile(language);
                });
            } else {
                compile(result.language);
            }
        });
}

function main() {
    if (argv.all) {
        // compile all: yarn antlr4 --all
        languageEntries.forEach((language) => {
            compile(language);
        });
    } else if (argv.lang) {
        // compile single: yarn antlr4 --lang=mysql
        const supportedLanguage = languageEntries.find((language) =>
            language.startsWith(argv.lang)
        );

        if (argv.lang === 'all') {
            languageEntries.forEach((language) => {
                compile(language);
            });
        } else if (supportedLanguage) {
            compile(supportedLanguage);
        } else {
            console.error(
                chalk.bold.red('\n[Invalid language]:'),
                chalk.white.underline(`${argv.lang}\n`)
            );
            prompt();
        }
    } else {
        prompt();
    }
}

main();