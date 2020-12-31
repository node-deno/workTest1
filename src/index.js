const Box = require('./Box')


// 创建count个宝箱
const createBox = (count) => {
	return (new Array(count)).fill('').map((item, index) => {
		return new Box(index + 1)
	})
}

const main = () => {
	console.time('程序总用时：')

	let boxList = createBox(10)
	boxList.reduce((lastHash, box) => {
		lastHash = box.createHash(lastHash)
		return lastHash
	}, 0)
	console.log(boxList)
	console.log(boxList.map(item => item.secretNumber))

	console.timeEnd('程序总用时：')
}

main()