// Modules
const chalk = require("chalk");
const Enquirer = require("enquirer");
const { Input } = Enquirer;

// Fungsi konversi Celsius ke Fahrenheit
async function celciusToFarenheit() {
  const prompt = new Input({
    message: "Masukkan suhu dalam Celsius:"
  });

  try {
    const input = await prompt.run();
    const celsius = parseFloat(input);

    if (isNaN(celsius)) {
      console.log(chalk.red("❌ Input tidak valid, harus berupa angka!"));
      return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    console.log(chalk.green(`✅ ${celsius}°C = ${fahrenheit.toFixed(2)}°F`));
  } catch (err) {
    console.log(chalk.red("Terjadi kesalahan atau input dibatalkan."));
  }
}

// Fungsi konversi Fahrenheit ke Celsius
async function farenheitToCelcius() {
  const prompt = new Input({
    message: "Masukkan suhu dalam Fahrenheit:"
  });

  try {
    const input = await prompt.run();
    const fahrenheit = parseFloat(input);

    if (isNaN(fahrenheit)) {
      console.log(chalk.red("❌ Input tidak valid, harus berupa angka!"));
      return;
    }

    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(chalk.blue(`✅ ${fahrenheit}°F = ${celsius.toFixed(2)}°C`));
  } catch (err) {
    console.log(chalk.red("Terjadi kesalahan atau input dibatalkan."));
  }
}

module.exports = { celciusToFarenheit, farenheitToCelcius };
