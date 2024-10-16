const {program} = require('commander');
const fs = require('node:fs');
program
    .option('-i, --input <file path>', 'Takes file to read data')
    .option('-o, --output <file path>', 'Write data into file')
    .option('-d, --display', 'Outout data into console')
    .action((opt) => {
        if(!opt.input) {
            console.error('Please, specify input file');
        } else if(!fs.existsSync(opt.input)) {
            console.error('Cannot find the file');
        } else {
            
        }
    });

program.parse();