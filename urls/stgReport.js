const Router = require("koa-router");
const stg = new Router();

stg.post("/getShortageByUID", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		msg: "Success!",
		state: "0000",
		data: [
			{
				1: 20,
				2: 20,
				poDocNum: "P42318",
				lineowner: "wang, Admin @ Sirp:",
				id: "fa8e2f18064b11eaa38416d01cf89fc6",
				oorId: "OOR20191113142958b967",
				partNum: "8835-9_av01",
				sn: "8835-9_av01",
				supplierName: "SiRP",
				status: "02",
			},
			{
				1: 30,
				2: 20,
				poDocNum: "P42318",
				lineowner: "wang, Admin @ Sirp:",
				id: "fa8e2f18064b11eaa38416d01cf89fc6",
				oorId: "OOR20191113142958b967",
				partNum: "8835-9_av01",
				sn: "8835-9_av01",
				supplierName: "SiRP",
				status: "02",
			},
			{
				1: 40,
				2: 20,
				poDocNum: "P42318",
				lineowner: "wang, Admin @ Sirp:",
				id: "fa8e2f18064b11eaa38416d01cf89fc6",
				oorId: "OOR20191113142958b967",
				partNum: "8835-9_av01",
				sn: "8835-9_av01",
				supplierName: "SiRP",
				status: "02",
			},
			{
				1: 20,
				2: 20,
				poDocNum: "P42318",
				lineowner: "wang, Admin @ Sirp:",
				id: "fa8e2f18064b11eaa38416d01cf89fc6",
				oorId: "OOR20191113142958b967",
				partNum: "8835-9_av01",
				sn: "8835-9_av01",
				supplierName: "SiRP",
				status: "02",
			},
		],
		total: 134,
		sort: null,
		order: null,
		numCols: 1,
		currDateIndex: null,
	};
	await next();
});

stg.post("/getNonUpdatedParts", async (ctx, next) => {
	ctx.response.status = 200;
	ctx.response.body = {
		msg: "Success!",
		state: "0000",
		data: [
			{
				id: "0002fa00f1f611e9ab8b16d01cf89fc6",
				poDocNum: "110869",
				partNum: null,
				description: null,
				plant: null,
				unitPrice: "183.02",
				quantity: "1",
				currency: null,
				promiseDate: "",
				issueDate: "03-14-2019",
				requestDate: "03-14-2019",
				supplierId: "3018927ea95dd7678c4bb1101c8c2926",
				supplierName: "Acklands-Grainger Inc.",
				buyerId: "BYR20190827194912041",
				sn: null,
				meta: null,
				updateTime: "",
				updateDate: "",
				createTime: "20191018182405",
				uniqueIdentifier: "",
				finalBuyer: null,
				partStatus: "00",
				progressStatus: "00",
				deprecateFlag: "0",
				deliveredQuantity: "",
				leadTime: "",
				partiallyDeliveredStatus: null,
				partiallyDeliveryDate: "",
				trackingNum: "",
				supplierComments: null,
				deliveryDate: "",
				mrpCode: "",
				buyerCode: "",
				commodityNumber: "",
				categoryNumber: "",
				lineNumber: "",
				receivedDate: null,
				extend1: "",
				extend2: "",
				extend3: "",
				priority: "",
				isMySupplierAssignedToOthers: "0",
				isAssignedSupplier: "0",
				assignedSupplierPermission: null,
				supplierAssignerFullname: null,
				supplierAssignerOrgInfo: null,
				supplierAssigneeFullname: null,
				supplierAssigneeOrgInfo: null,
				supplierAssignTime: "",
				isMyPartAssignedToOthers: "0",
				isAssignedPart: "0",
				assignedPartPermission: null,
				partAssignerFullname: null,
				partAssignerOrgInfo: null,
				partAssigneeFullname: null,
				partAssigneeOrgInfo: null,
				partAssignTime: "",
				contactOwner: "Wang, amailg",
				contactOwnerEmail: "angeline.aq.wang@gmail.com",
				responsibleBuyers: null,
				acceptanceStatus: "0",
				highlightFlag: "1",
				lateForUpdate: "10",
				isRejectedBySupplier: "0",
				isHotPepper: "0",
				isCommentRead: "-1",
				lastManualUpdateTime: null,
				lastAutoUpdateTime: null,
			},
		],
		total: 14,
		sort: null,
		order: null,
		numCols: 1,
		currDateIndex: null,
	};
	await next();
});

module.exports = stg;
