// S C R I P T  O R I  B Y  IrfanStore 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO ALL

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")
// GLOBAL OWNER //

global.owner = ['6289510497533'] //GANTI JADI NO MU
global.premium = ['6289510497533']
global.namaowner = "IrfanStore" // GANTI JADI NAMA MU
global.namaproduk = "IrfanStore" // GANTI JADI NAMA PRODUK MU
global.namebot = "IrfanStore" // GANT JADI NAMA BOT MU
global.nomorbot = "6289510497533" // GANTI JADI NO MU
global.sig = 'https://instagram.com/irpann_kidss' // GANTI SAJA
global.sgc = 'https://chat.whatsapp.com/H5pD4f6ZCs46YlR8iNTin9' // UBAH SAJA
global.sessionName = 'sessions' // JANGAN DI UBAH

// PAYMENT //
global.Qris = 'https://telegra.ph/file/d92011e622a9e912bc8aa.jpg' //GANTI JADI QRIS MU
global.dana = '089510497533' 
global.gopay = '089510497533' 
global.scan = 'SCAN QRIS ALL PAY DI ATAS'

// WATERMARK //

global.v = 'Credits Thanks Help Me' // GANTI AJA
global.wm = 'irfan | store' // GANTI AJA
global.packname = ""
global.author = "Sticker By Irfan" // GANTI AJA
global.author2 = "IrfanStore" // GANTI SAJA
global.footer = 'Irfan' // GANTI AJA

// FOTO MENU //

global.thumbailUrl = "https://telegra.ph/file/7d3eab0ef6f85a956eab7.jpg" // GANTI AJA KALAU MAU GANTI LOGO MENU NYA
global.url = "https://chat.whatsapp.com/H5pD4f6ZCs46YlR8iNTin9" // GANTI SAJA

// GLOBAL MESS //

global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'IrfanStore Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner IrfanStore',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus bot',
    wait: 'tungu sebentar kak',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//BATAS
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
