// Import package
import chalk from "chalk";
import cowsay from "cowsay";
import figlet from "figlet";
import gradient from "gradient-string";
import boxen from "boxen";
import dayjs from "dayjs";

// Ambil argumen dari terminal
const args = process.argv.slice(2);
const userInput = args.length > 0 ? args.join(" ") : "Nama Default - NIM";

// Tampilkan tanggal & waktu sekarang
const now = dayjs().format("DD MMMM YYYY - HH:mm");

// Nama dengan chalk
console.log(chalk.blue.bold(`Input dari terminal: ${userInput}`));
console.log(chalk.gray(`Waktu sekarang: ${now}\n`));

// ✨ 1. Animasi teks berjalan
const message = "Aku anak solehah 💕";
let i = 0;
const rainbow = gradient.pastel;

const interval = setInterval(() => {
  process.stdout.write("\r" + rainbow(message.slice(0, i)));
  i++;
  if (i > message.length) {
    clearInterval(interval);
    process.stdout.write("\n\n");
    showDragon();
  }
}, 150);

// ✨ 2. Naga warna-warni
function showDragon() {
  const dragonAscii = cowsay.say({
    text: "semangat cari uangnya ! kamu bukan rafatar <3 🐉🔥",
    f: "dragon",
    e: "oo",
    T: "~~",
  });

  // kasih warna rainbow ke naga
  console.log(gradient.rainbow.multiline(dragonAscii));

  // ✨ Tambahin nama dalam figlet + gradient rainbow
  figlet(userInput, (err, data) => {
    if (err) {
      console.log("Figlet error:", err);
      return;
    }
    console.log("\n" + gradient.rainbow.multiline(data));
  });

  // Bikin tiga box
  const box1 = boxen(chalk.red.bold("FIFI"), {
    padding: 1,
    borderStyle: "round",
    borderColor: "cyan",
  });

  const box2 = boxen(chalk.green.bold("ANAK"), {
    padding: 1,
    borderStyle: "double",
    borderColor: "yellow",
  });

  const box3 = boxen(chalk.blue.bold("SOLEH"), {
    padding: 1,
    borderStyle: "classic",
    borderColor: "magenta",
  });

  // Pecah jadi array per baris
  const box1Lines = box1.split("\n");
  const box2Lines = box2.split("\n");
  const box3Lines = box3.split("\n");

  // Cari tinggi maksimum
  const maxHeight = Math.max(
    box1Lines.length,
    box2Lines.length,
    box3Lines.length
  );

  // Gabung baris demi baris
  for (let i = 0; i < maxHeight; i++) {
    const line1 = box1Lines[i] || "".padEnd(box1Lines[0].length, " ");
    const line2 = box2Lines[i] || "".padEnd(box2Lines[0].length, " ");
    const line3 = box3Lines[i] || "".padEnd(box3Lines[0].length, " ");
    console.log(line1 + "  " + line2 + "  " + line3);
  }
} // ← ini yang tadi hilang
