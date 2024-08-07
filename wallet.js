//!?Selectors

//*ekle formu

const eklerBtn = document.querySelector("#ekle-btn")
const gelirInput = document.querySelector("#gelir-input")
const ekleFormu = document.querySelector("#ekle-formu")

//*sonuc tablosu

const gelirinizTAble = document.getElementById("geliriniz")
const giderinizTable = document.getElementById("gideriniz")
const kalanTable = document.getElementById("kalan")

//?variables
let gelirler = 0
let harcamaListesi = []

//*harcama formu

//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");