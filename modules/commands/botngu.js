module.exports.config = {
    name: "botngu",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Loi - Mod By Lê Đức Thuận",
    description: "Bot sẽ chửi lại nếu có người chửi nó - Mod lại từ noprefix",
    commandCategory: "general",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "botngu.gif")) request("https://znews-photo.zadn.vn/Uploaded/pwivovlb/2016_12_06/ezgifcomoptimize_1.gif").pipe(fs.createWriteStream(dirMaterial + "botngu.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies, Users, args, utils, global, client }) => {
    const fs = require("fs");
    let dt = await api.getUserInfo(event.senderID);
    let name = dt[event.senderID].name;
    var msg = {
        body: `Nhà cậu giàu nhở, nhà cậu sang nhở ? có ngon á thì nổ địa chỉ i tớ qua chém chết mẹ cậu á😳😻👿 ${name}`,
        attachment: fs.createReadStream(__dirname + `/noprefix/botngu.gif`)
    }
    if (event.body.toLowerCase() == "botngu") {
        return api.sendMessage(msg, event.threadID, event.messageID);
    }
};
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
    return api.sendMessage("Dùng sai cách rồi lêu lêu:))", event.threadID)
}
