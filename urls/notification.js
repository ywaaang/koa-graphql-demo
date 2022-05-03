const Router = require("koa-router");
const notification = new Router();

notification.post("/getNotificationByPage", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		state: "0000",
		data: [
			{
				isResponded: "1",
				isRead: "0",
				supplierName: "Supplier1",
				updateCount: 5,
				updateTime: "2022-0303",
				isAutoPilot: "1",
			},
			{
				isResponded: "1",
				isRead: "0",
				supplierName: "Supplier2",
				updateCount: 5,
				updateTime: "2022-0115",
				isAutoPilot: "1",
			},
			{
				isResponded: "1",
				isRead: "0",
				supplierName: "Supplier3",
				updateCount: 5,
				updateTime: "2022-03029",
				isAutoPilot: "1",
			},
			{
				isResponded: "1",
				isRead: "1",
				supplierName: "Supplier4",
				updateCount: 5,
				updateTime: "2022-0103",
				isAutoPilot: "1",
			},
			{
				isResponded: "1",
				isRead: "0",
				supplierName: "Supplier5",
				updateCount: 5,
				updateTime: "2021-0303",
				isAutoPilot: "1",
			},
		],
	};
	await next();
});

module.exports = notification;
