const {program} = require('commander');
const fs = require('node:fs');
program
    .option('-i, --input <file path>', 'Takes file to read data')
    .option('-o, --output <file path>', 'Writes data into file')
    .option('-d, --display', 'Outputs data into console')
    .action((opt) => {
        if(!opt.input) {
            console.error('Please, specify input file');
        } else if(!fs.existsSync(opt.input)) {
            console.error('Cannot find input file');
        } else {
            let data = fs.readFileSync(opt.input, {
                encoding : 'utf-8'
            });
            let obj = JSON.parse(data), 
                result = 0;
            obj.forEach(el => {
                result = el.rate > result ? el.rate : result;
            });
            if (opt.output) {
                fs.writeFileSync(opt.output, 'Максимальний курс:' + result, {
                    encoding : 'utf-8'
                });
            }
            if (opt.display) {
                console.log('Максимальний курс:' + result);
            }
        }
    });

program.parse();