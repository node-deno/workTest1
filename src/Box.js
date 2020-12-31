const sha256 = require('./utils/sha256')
/**
 * 宝箱类
 */
class Box {
	/**
	 * @param {Number} number 序号 
	 */
	constructor(number) {
		this.number = number || -1 // 宝箱编号
		// this.timestamp = + new Date // 时间戳
		this.hash = '' // 当前hash
		this.lastHash = 0 // 上一个hash
		this.secretNumber = 0 // 神秘数字
	}

	// 根据lastHash和secretNumber创建hash
	createHash (lastHash) {
		console.log(`开始计算宝箱${this.number}的hash值`)
		console.time(`破解宝箱${this.number}个箱子时长：`)
		this.lastHash = lastHash
		// let base = `${this.number}${this.timestamp}${this.lastHash}`
		let base = `${this.number}${this.lastHash}`
		let secretNumber = 1
		let hash = ''
		while (true) {
			hash = sha256(`${base}${secretNumber}`)
			if (/^00000/.test(hash)) break
			secretNumber++
		}
		this.hash = hash
		this.secretNumber = secretNumber
		console.timeEnd(`破解宝箱${this.number}个箱子时长：`)
		return this.hash
	}

}

module.exports = Box