/** Oke nha! Hầu hết mấy ông dùng bypass module donate thì chả cần dùng cái này đâu vì tội gì mà không dùng mấy module xịn hơn đúng k =))**/
/** Đổi Credit ? Nếu bạn không có văn hóa như Hà Mạc Trường Giang ¯\_(ツ)_/¯ **/
module.exports.config = {
	name: "rules",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thì là luật đó",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`Điều khoản sử dụng bot trong box:
⚠ Vui lòng chấp hành nghiêm chỉnh để tránh bị hạn chế dùng lệnh ( user ban )
1: Không spam lệnh bot, spam prefix quá nhiều gây die bot,cp....
2: Không gây war với bot ( modules sim ... ) vì đây không phải người dùng tương tác thật hoặc là bạn bị tự kỷ !
3: Không lạm dụng bot vào mục đích xấu nhé,...
4: Trong thời gian sử dụng nếu gặp lỗi hãy ib Nguyen Duc Trung để được thêm vào box fix....
5: Qc xíu nhá, mọi nhớ lên kênh youtube "1 7 0 6" để sub ủng hộ mình với^^`, event.threadID, event.messageID);
