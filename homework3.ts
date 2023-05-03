type ValueType = "empty" | number;

interface ClothesWarehouse {
	jackets: ValueType;
	hats: ValueType;
	socks: ValueType;
	pants: ValueType;
}

interface StationeryWarehouse {
	scissors: ValueType;
	paper: "empty" | boolean;
}

interface AppliancesWarehouse {
	dishwashers: ValueType;
	cookers: ValueType;
	mixers: ValueType;
}

interface TotalWarehouse
	extends ClothesWarehouse,
		StationeryWarehouse,
		AppliancesWarehouse {
	deficit: boolean;
	date: Date;
}

const totalData: TotalWarehouse = {
	jackets: 5,
	hats: "empty",
	socks: "empty",
	pants: 15,
	scissors: 15,
	paper: true,
	dishwashers: 3,
	cookers: "empty",
	mixers: 14,
	deficit: true,
	date: new Date(),
};

function printReport(data: TotalWarehouse): string {
	const result: string = Object.entries(data)
		.filter((item) => item[1] === "empty")
		.reduce((res, item) => `${res} ${item[0]},`, "");

	if (result.trim().length) {
		return `We need this items:${result.slice(0, -1)}`;
	} else {
		return "Everything fine";
	}
}

console.log(printReport(totalData));