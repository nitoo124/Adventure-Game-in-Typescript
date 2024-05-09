#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from 'chalk';



class player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }

    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel

    }

    fuelIncrese(){
        this.fuel = 100
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fueldecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel

    }
}

let Player = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please Entre your Name'

    }
])


let opponent = await inquirer.prompt([
    {
        type: 'list',
        name: 'select',
        message: 'Select your Opponent',
        choices: ['skeleton', 'Assassin', 'Zombie']
    }
])

let player1 = new player(Player.name)
let Opponent1 = new Opponent(opponent.select)

do {

    //skeleton
    if (opponent.select == 'skeleton') {
    
        let ask = await inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Select your Opponent',
                choices: ['Attack', 'Drink Portion', 'Runing']
    
            }
        ])
    
        if (ask.option == 'Attack') {
    
            let num: number = Math.floor(Math.random() * 2);
    
            if (num > 0) {
    
                player1.fueldecrease()
                console.log(chalk.bold.red(` ${player1.name} Fuel is ${player1.fuel} `));
                console.log(chalk.bold.green(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                if (player1.fuel <= 0) {

                    console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'))
                    process.exit()
                    
                }
    
            } else if (num <= 0) {
    
                player1.fueldecrease()
                console.log(chalk.bold.red(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                console.log(chalk.bold.green(` ${player1.name} Fuel is ${player1.fuel} `));
                if (Opponent1.fuel <= 0) {

                    console.log(chalk.green.bold.italic('You Win'))
                    process.exit()
                    
                }
    
    
            }
    
    
        } else if (ask.option == 'Drink Portion') {
    
            player1.fuelIncrese();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel is ${player1.fuel}` ))
    
    
    
        } else if (ask.option == 'Runing') {
    
            console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'));
            process.exit()
    
    
        }}

        //Assassin
        if (opponent.select == 'Assassin') {
    
            let ask = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'option',
                    message: 'Select your Opponent',
                    choices: ['Attack', 'Drink Portion', 'Runing']
        
                }
            ])
        
            if (ask.option == 'Attack') {
        
                let num: number = Math.floor(Math.random() * 2);
        
                if (num > 0) {
        
                    player1.fueldecrease()
                    console.log(chalk.bold.red(` ${player1.name} Fuel is ${player1.fuel} `));
                    console.log(chalk.bold.green(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                    if (player1.fuel <= 0) {
    
                        console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'))
                        process.exit()
                        
                    }
        
                } else if (num <= 0) {
        
                    player1.fueldecrease()
                    console.log(chalk.bold.red(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                    console.log(chalk.bold.green(` ${player1.name} Fuel is ${player1.fuel} `));
                    if (Opponent1.fuel <= 0) {
    
                        console.log(chalk.green.bold.italic('You Win'))
                        process.exit()
                        
                    }
        
        
                }
        
        
            } else if (ask.option == 'Drink Portion') {
        
                player1.fuelIncrese();
                console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel is ${player1.fuel}` ))
        
        
        
            } else if (ask.option == 'Runing') {
        
                console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'));
                process.exit()
        
        
            }}

    //Zombie
    if (opponent.select == 'Zombie') {
    
        let ask = await inquirer.prompt([
            {
                type: 'list',
                name: 'option',
                message: 'Select your Opponent',
                choices: ['Attack', 'Drink Portion', 'Runing']
    
            }
        ])
    
        if (ask.option == 'Attack') {
    
            let num: number = Math.floor(Math.random() * 2);
    
            if (num > 0) {
    
                player1.fueldecrease()
                console.log(chalk.bold.red(` ${player1.name} Fuel is ${player1.fuel} `));
                console.log(chalk.bold.green(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                if (player1.fuel <= 0) {

                    console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'))
                    process.exit()
                    
                }
    
            } else if (num <= 0) {
    
                player1.fueldecrease()
                console.log(chalk.bold.red(` ${Opponent1.name} Fuel is ${Opponent1.fuel} `));
                console.log(chalk.bold.green(` ${player1.name} Fuel is ${player1.fuel} `));
                if (Opponent1.fuel <= 0) {

                    console.log(chalk.green.bold.italic('You Win'))
                    process.exit()
                    
                }
    
    
            }
    
    
        } else if (ask.option == 'Drink Portion') {
    
            player1.fuelIncrese();
            console.log(chalk.bold.italic.green(`You Drink Health Portion. Your Fuel is ${player1.fuel}` ))
    
    
    
        } else if (ask.option == 'Runing') {
    
            console.log(chalk.red.bold.italic('You Loose, Better Luck Next Time'));
            process.exit()
    
    
        }}

    
    
    
} while (true);







