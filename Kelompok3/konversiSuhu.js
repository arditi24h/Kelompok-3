// Modules
const Enquirer = require("enquirer");
const { Select } = Enquirer;
const { celciusToFarenheit, farenheitToCelcius } = require("./rumusSuhu");

// file ini hanya digunakan untuk pemilihan function. semua proses dan input akan di lakukan di module/function masing masing 

// Input Logic
(async () => {
  const prompt = new Select({
    name: "convert",
    message: "Pilih konversi suhu:",
    choices: ["Konversi Celsius ke Farenheit", "Konversi Farenheit ke Celsius"]
  });

  try {
    const answer = await prompt.run();
    if (answer === "Konversi Celsius ke Farenheit") {
      celciusToFarenheit();
    } else {
      farenheitToCelcius();
    }
  } catch (err) {
    console.error("Prompt dibatalkan atau terjadi error:", err);
  }
})();
