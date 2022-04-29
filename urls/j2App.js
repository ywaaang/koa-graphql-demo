const Router = require("koa-router");
const j2App = new Router();

// /j2App
j2App.post("/getBuyerAndProducts", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		state: "0000",
		msg: "success",
		data: [
			{
				productName: "P2P",
				currentSource: "Amazon",
				totalMonthlyQuantity: 1000,
				totalQuantityForecast: 5000,
			},
			{
				productName: "Gloves",
				currentSource: "Amazon",
				totalMonthlyQuantity: 1000,
				totalQuantityForecast: 5000,
			},
			{
				productName: "Mask",
				currentSource: "Amazon",
				totalMonthlyQuantity: 1000,
				totalQuantityForecast: 5000,
			},
			{
				productName: "Sanitizer",
				currentSource: "Amazon",
				totalMonthlyQuantity: 1000,
				totalQuantityForecast: 5000,
			},
			{
				productName: "N95",
				currentSource: "Amazon",
				totalMonthlyQuantity: 1000,
				totalQuantityForecast: 5000,
			},
		],
	};
	await next();
});

// j2App/list
j2App.get("/getBuyerAndProductsByLoginUser", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		state: "0022",
		msg: "success",
	};
	await next();
});

j2App.post("/getSupplierEquipments", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		state: "0000",
		msg: "success",
        data: [{
            equipmentType: 'Gloves',
            companyName: 'XYZ',
            contactName: 'Ben',
            emailAddress: "ben@sirp.ca",
            city: "San Francisco",
            groupName: "Z"
        },{
            equipmentType: 'Gloves',
            companyName: 'XYZ',
            contactName: 'Ben',
            emailAddress: "ben@sirp.ca",
            city: "San Francisco",
            groupName: "Z"
        },{
            equipmentType: 'Gloves',
            companyName: 'XYZ',
            contactName: 'Ben',
            emailAddress: "ben@sirp.ca",
            city: "San Francisco",
            groupName: "Z"
        },{
            equipmentType: 'Gloves',
            companyName: 'XYZ',
            contactName: 'Ben',
            emailAddress: "ben@sirp.ca",
            city: "San Francisco",
            groupName: "Z"
        }]
	};
	await next();
});

module.exports = j2App;
