const { extract } = require("@extractus/article-extractor");

const article = await extract('https://www.eltiempo.com/politica/proceso-de-paz/que-busca-el-presidente-petro-al-reabrir-mesa-con-exparamilitares-20-anos-despues-de-justicia-y-paz-3399009')

console.log(article)