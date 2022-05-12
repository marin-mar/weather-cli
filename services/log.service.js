import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen.black(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent`
			${chalk.bgMagenta.black(' HELP ')}
			${chalk.magenta('Без параметров')} - вывод погоды
			${chalk.magenta('-s [CITY]')} - для установки города
			${chalk.magenta('-h')} - для вывода помощи
			${chalk.magenta('-t [API_KEY]')} - для сохранения токена
		`
  );
};

const printWeather = (res, icon) => {
	console.log(
    dedent`
			${chalk.bgYellow.black(' WEATHER NOW ')} 
			Погода в городе ${chalk.yellow(res.name)}, ${res.sys.country}
			${icon}  ${chalk.blue(res.weather[0].description)}
			Температура: ${chalk.blue(res.main.temp)} ℃
			Ощущается как: ${chalk.blue(res.main.feels_like)} ℃
			Влажность: ${chalk.blue(res.main.humidity)} %
			Скорость ветра: ${chalk.blue(res.wind.speed)} м/с
		`
  );
}

export { printError, printSuccess, printHelp, printWeather };
