function hideAll() {
	document.getElementById("cum1").classList.remove("yeshow");
	document.getElementById("cum1").classList.add("noshow");
	document.getElementById("cum2").classList.remove("yeshow");
	document.getElementById("cum2").classList.add("noshow");
	document.getElementById("cum3").classList.remove("yeshow");
	document.getElementById("cum3").classList.add("noshow");
	document.getElementById("cum4").classList.remove("yeshow");
	document.getElementById("cum4").classList.add("noshow");
	document.getElementById("cum4").classList.remove("cover1");
	document.getElementById("cover1").classList.add("noshow");
	document.getElementById("cover2").classList.add("noshow");
	document.getElementById("cover3").classList.add("noshow");
	document.getElementById("cover4").classList.add("noshow");
}

function baka1toggle() {
	hideAll();
	document.getElementById("cum1").classList.remove("noshow");
	document.getElementById("cum1").classList.add("yeshow");
	document.getElementById("cover1").classList.remove("noshow");
	document.getElementById("cover1").classList.add("yeshow");
}
function baka2toggle() {
	hideAll();
	document.getElementById("cum2").classList.remove("noshow");
	document.getElementById("cum2").classList.add("yeshow");
	document.getElementById("cover2").classList.remove("noshow");
	document.getElementById("cover2").classList.add("yeshow");
}
function baka3toggle() {
	hideAll();
	document.getElementById("cum3").classList.remove("noshow");
	document.getElementById("cum3").classList.add("yeshow");
	document.getElementById("cover3").classList.remove("noshow");
	document.getElementById("cover3").classList.add("yeshow");
}
function baka4toggle() {
	hideAll();
	document.getElementById("cum4").classList.remove("noshow");
	document.getElementById("cum4").classList.add("yeshow");
	document.getElementById("cover4").classList.remove("noshow");
	document.getElementById("cover4").classList.add("yeshow");
}

//ОБЪЯВЛЯТЬ ЗДЕСЬ УЛУЧШЕНИЯ
let moni = 0;
let moniPS = 0;
let clickWeight = 1;
let clickWeightCost = 10;
clickWeights = 0;
let workerCost = 35;
let workers = 0;
let newsCost = 222;
let newss = 0;
let studentCost = 1250;
let students = 0;
let migrantCost = 12500;
let migrants = 0;
let tvCost = 75000;
let tvs = 0;
let scienseCost = 404000;
let scienses = 0;
let overseerCost = 2600000;
/*-*/
let overseers = 0;
let childCost = 26000000;
let childs = 0;
let spamCost = 183000000;
let spams = 0;
let researcherCost = 1299000000;
let researchers = 0;
let testCost = 10392000000;
let tests = 0;
let roboCost = 103920000000;
let robos = 0;
let zeppelinCost = 999999999999;
let zeppelins = 0;
let neuroCost = 6546000000000;
let neuros = 0;
let SPACEHYPNOLASERCost = 99999999999999;
let SPACEHYPNOLASERs = 0;
let newValue = 69;

function addMoni() {
	moni += clickWeight;
	document.getElementById("monni").innerHTML = abbreviateNumber(moni);
}

function buyClickWeight() {
	if (moni >= clickWeightCost) {
		moni -= clickWeightCost;
		clickWeights++;
		clickWeight += 1;
		clickWeightCost = 10 * 1.15 ** clickWeights;
		document.getElementById("clickWeightCost").innerHTML =
			abbreviateNumber(clickWeightCost);
		document.getElementById("clickWeights").innerHTML = clickWeights;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyWorker() {
	if (moni >= workerCost) {
		moni -= workerCost;
		workers++;
		workerCost = 35 * 1.15 ** workers;
		document.getElementById("workerCost").innerHTML =
			abbreviateNumber(workerCost);
		document.getElementById("workers").innerHTML = workers;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyNews() {
	if (moni >= newsCost) {
		moni -= newsCost;
		newss++;
		newsCost = 222 * 1.15 ** newss;
		document.getElementById("newsCost").innerHTML =
			abbreviateNumber(newsCost);
		document.getElementById("newss").innerHTML = newss;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyStudent() {
	if (moni >= studentCost) {
		moni -= studentCost;
		students++;
		studentCost = 1250 * 1.15 ** students;
		document.getElementById("studentCost").innerHTML =
			abbreviateNumber(studentCost);
		document.getElementById("students").innerHTML = students;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyMigrant() {
	if (moni >= migrantCost) {
		moni -= migrantCost;
		migrants++;
		migrantCost = 12500 * 1.14 ** migrants;
		document.getElementById("migrantCost").innerHTML =
			abbreviateNumber(migrantCost);
		document.getElementById("migrants").innerHTML = migrants;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyTv() {
	if (moni >= tvCost) {
		moni -= tvCost;
		tvs++;
		tvCost = 75000 * 1.15 ** tvs;
		document.getElementById("tvCost").innerHTML = abbreviateNumber(tvCost);
		document.getElementById("tvs").innerHTML = tvs;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buySciense() {
	if (moni >= scienseCost) {
		moni -= scienseCost;
		scienses++;
		scienseCost = 104000 * 1.16 ** scienses;
		document.getElementById("scienseCost").innerHTML =
			abbreviateNumber(scienseCost);
		document.getElementById("scienses").innerHTML = scienses;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyOverseer() {
	if (moni >= overseerCost) {
		moni -= overseerCost;
		overseers++;
		overseerCost = 2600000 * 1.14 ** overseers;
		document.getElementById("overseerCost").innerHTML =
			abbreviateNumber(overseerCost);
		document.getElementById("overseers").innerHTML = overseers;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyChild() {
	if (moni >= childCost) {
		moni -= childCost;
		childs++;
		childCost = 26000000 * 1.14 ** childs;
		document.getElementById("childCost").innerHTML =
			abbreviateNumber(childCost);
		document.getElementById("childs").innerHTML = childs;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buySpam() {
	if (moni >= spamCost) {
		moni -= spamCost;
		spams++;
		spamCost = 183000000 * 1.15 ** spams;
		document.getElementById("spamCost").innerHTML =
			abbreviateNumber(spamCost);
		document.getElementById("spams").innerHTML = spams;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyResearcher() {
	if (moni >= researcherCost) {
		moni -= researcherCost;
		researchers++;
		researcherCost = Math.ceil(1299000000 * 1.17 ** researchers);
		document.getElementById("researcherCost").innerHTML =
			abbreviateNumber(researcherCost);
		document.getElementById("researchers").innerHTML = researchers;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyTest() {
	if (moni >= testCost) {
		moni -= testCost;
		tests++;
		testCost = Math.ceil(10390000000 * 1.25 ** tests);
		document.getElementById("testCost").innerHTML =
			abbreviateNumber(testCost);
		document.getElementById("tests").innerHTML = tests;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyRobo() {
	if (moni >= roboCost) {
		moni -= roboCost;
		robos++;
		roboCost = Math.ceil(103920000000 * 1.21 ** robos);
		document.getElementById("roboCost").innerHTML =
			abbreviateNumber(roboCost);
		document.getElementById("robos").innerHTML = robos;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyZeppelin() {
	if (moni >= zeppelinCost) {
		moni -= zeppelinCost;
		zeppelins++;
		zeppelinCost = 727400000000 * 1.18 ** zeppelins;
		document.getElementById("zeppelinCost").innerHTML =
			abbreviateNumber(zeppelinCost);
		document.getElementById("zeppelins").innerHTML = zeppelins;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buyNeuro() {
	if (moni >= neuroCost) {
		moni -= neuroCost;
		neuros++;
		neuroCost = Math.ceil(6546000000000 * 1.13 ** neuros);
		document.getElementById("neuroCost").innerHTML =
			abbreviateNumber(neuroCost);
		document.getElementById("neuros").innerHTML = neuros;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

function buySPACEHYPNOLASER() {
	if (moni >= SPACEHYPNOLASERCost) {
		moni -= SPACEHYPNOLASERCost;
		SPACEHYPNOLASERs++;
		SPACEHYPNOLASERCost = 99999999999999 * 1.15 ** SPACEHYPNOLASERs;
		document.getElementById("SPACEHYPNOLASERCost").innerHTML =
			abbreviateNumber(SPACEHYPNOLASERCost);
		document.getElementById("SPACEHYPNOLASERs").innerHTML =
			SPACEHYPNOLASERs;
		document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	}
}

//ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА
function saveGame() {
	let gameSave = {
		moni: moni,
		moniPS: moniPS,
		clickWeight: clickWeight,
		clickWeightCost: clickWeightCost,
		clickWeights: clickWeights,
		workerCost: workerCost,
		workers: workers,
		newsCost: newsCost,
		newss: newss,
		studentCost: studentCost,
		students: students,
		migrantCost: migrantCost,
		migrants: migrants,
		tvCost: tvCost,
		tvs: tvs,
		scienseCost: scienseCost,
		scienses: scienses,
		overseerCost: overseerCost,
		overseers: overseers,
		childCost: childCost,
		childs: childs,
		spamCost: spamCost,
		spams: spams,
		researcherCost: researcherCost,
		researchers: researchers,
		testCost: testCost,
		tests: tests,
		roboCost: roboCost,
		robos: robos,
		zeppelinCost: zeppelinCost,
		zeppelins: zeppelins,
		neuroCost: neuroCost,
		neuros: neuros,
		SPACEHYPNOLASERCost: SPACEHYPNOLASERCost,
		SPACEHYPNOLASERs: SPACEHYPNOLASERs,
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

//ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА
//МАТЕРЬ БОЖЬЯ, КАК ЖЕ ИХ МНОГО
function loadGame() {
	let savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (typeof savedGame.moni !== "undefined") moni = savedGame.moni;
	if (typeof savedGame.moniPS !== "undefined") moniPS = savedGame.moniPS;
	if (typeof savedGame.clickWeight !== "undefined")
		clickWeight = savedGame.clickWeight;
	if (typeof savedGame.clickWeightCost !== "undefined")
		clickWeightCost = savedGame.clickWeightCost;
	if (typeof savedGame.clickWeights !== "undefined")
		clickWeights = savedGame.clickWeights;
	if (typeof savedGame.workerCost !== "undefined")
		workerCost = savedGame.workerCost;
	if (typeof savedGame.workers !== "undefined") workers = savedGame.workers;
	if (typeof savedGame.newsCost !== "undefined")
		newsCost = savedGame.newsCost;
	if (typeof savedGame.newss !== "undefined") newss = savedGame.newss;
	if (typeof savedGame.studentCost !== "undefined")
		studentCost = savedGame.studentCost;
	if (typeof savedGame.students !== "undefined")
		students = savedGame.students;
	if (typeof savedGame.migrantCost !== "undefined")
		migrantCost = savedGame.migrantCost;
	if (typeof savedGame.migrants !== "undefined")
		migrants = savedGame.migrants;
	if (typeof savedGame.tvCost !== "undefined") tvCost = savedGame.tvCost;
	if (typeof savedGame.tvs !== "undefined") tvs = savedGame.tvs;
	if (typeof savedGame.scienseCost !== "undefined")
		scienseCost = savedGame.scienseCost;
	if (typeof savedGame.scienses !== "undefined")
		scienses = savedGame.scienses;
	if (typeof savedGame.overseerCost !== "undefined")
		overseerCost = savedGame.overseerCost;
	if (typeof savedGame.overseers !== "undefined")
		overseers = savedGame.overseers;
	if (typeof savedGame.childCost !== "undefined")
		childCost = savedGame.childCost;
	if (typeof savedGame.childs !== "undefined") childs = savedGame.childs;
	if (typeof savedGame.spamCost !== "undefined")
		spamCost = savedGame.spamCost;
	if (typeof savedGame.spams !== "undefined") spams = savedGame.spams;
	if (typeof savedGame.researcherCost !== "undefined")
		researcherCost = savedGame.researcherCost;
	if (typeof savedGame.researchers !== "undefined")
		researchers = savedGame.researchers;
	if (typeof savedGame.testCost !== "undefined")
		testCost = savedGame.testCost;
	if (typeof savedGame.tests !== "undefined") tests = savedGame.tests;
	if (typeof savedGame.roboCost !== "undefined")
		roboCost = savedGame.roboCost;
	if (typeof savedGame.robos !== "undefined") robos = savedGame.robos;
	if (typeof savedGame.zeppelinCost !== "undefined")
		zeppelinCost = savedGame.zeppelinCost;
	if (typeof savedGame.zeppelins !== "undefined")
		zeppelins = savedGame.zeppelins;
	if (typeof savedGame.neuroCost !== "undefined")
		neuroCost = savedGame.neuroCost;
	if (typeof savedGame.neuros !== "undefined") neuros = savedGame.neuros;
	if (typeof savedGame.SPACEHYPNOLASERCost !== "undefined")
		SPACEHYPNOLASERCost = savedGame.SPACEHYPNOLASERCost;
	if (typeof savedGame.SPACEHYPNOLASERs !== "undefined")
		SPACEHYPNOLASERs = savedGame.SPACEHYPNOLASERs;
}

//ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА
window.onload = function () {
	loadGame();
	document.getElementById("clickWeightCost").innerHTML =
		abbreviateNumber(clickWeightCost);
	document.getElementById("clickWeights").innerHTML = clickWeights;
	document.getElementById("workerCost").innerHTML =
		abbreviateNumber(workerCost);
	document.getElementById("workers").innerHTML = workers;
	document.getElementById("newsCost").innerHTML = abbreviateNumber(newsCost);
	document.getElementById("newss").innerHTML = newss;
	document.getElementById("studentCost").innerHTML =
		abbreviateNumber(studentCost);
	document.getElementById("students").innerHTML = students;
	document.getElementById("migrantCost").innerHTML =
		abbreviateNumber(migrantCost);
	document.getElementById("migrants").innerHTML = migrants;
	document.getElementById("tvCost").innerHTML = abbreviateNumber(tvCost);
	document.getElementById("tvs").innerHTML = tvs;
	document.getElementById("scienseCost").innerHTML =
		abbreviateNumber(scienseCost);
	document.getElementById("scienses").innerHTML = scienses;
	document.getElementById("overseerCost").innerHTML =
		abbreviateNumber(overseerCost);
	document.getElementById("overseers").innerHTML = overseers;
	document.getElementById("childCost").innerHTML =
		abbreviateNumber(childCost);
	document.getElementById("childs").innerHTML = childs;
	document.getElementById("spamCost").innerHTML = abbreviateNumber(spamCost);
	document.getElementById("spams").innerHTML = spams;
	document.getElementById("researcherCost").innerHTML =
		abbreviateNumber(researcherCost);
	document.getElementById("researchers").innerHTML = researchers;
	document.getElementById("testCost").innerHTML = abbreviateNumber(testCost);
	document.getElementById("tests").innerHTML = tests;
	document.getElementById("roboCost").innerHTML = abbreviateNumber(roboCost);
	document.getElementById("robos").innerHTML = robos;
	document.getElementById("zeppelinCost").innerHTML =
		abbreviateNumber(zeppelinCost);
	document.getElementById("zeppelins").innerHTML = zeppelins;
	document.getElementById("neuroCost").innerHTML =
		abbreviateNumber(neuroCost);
	document.getElementById("neuros").innerHTML = neuros;
	document.getElementById("SPACEHYPNOLASERCost").innerHTML =
		abbreviateNumber(SPACEHYPNOLASERCost);
	document.getElementById("SPACEHYPNOLASERs").innerHTML = SPACEHYPNOLASERs;
	document.getElementById("monni").innerHTML = abbreviateNumber(moni);
	document.getElementById("moniPS").innerHTML = abbreviateNumber(moniPS);
};

function gameReset() {
	if (confirm("вы уверены, что хотите сбросить ВЕСЬ прогресс?")) {
		if (confirm("вы сделаете людей снова счастливыми, вы у в е р е н ы?")) {
			alert("хорошо, так тому и быть");
			let gameSave = {};
			localStorage.setItem("gameSave", JSON.stringify(gameSave));
			location.reload();
		}
	}
}

/*function abbreviateNumber(value) {
    let newValue = value;
    if (value >= 1000) {
        let suffixes = ["", "k", "m", "b","t"];
        let suffixNum = Math.floor( (""+value).length/5 );
        let shortValue = '';
        for (let precision = 3; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            let dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortNum = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}*/

let i = 0;
let suffixes = ["р", "т.р", "м.р", "б.р", "тр.р", "кв.р", "но.р", "брух"];
function abbreviateNumber(value) {
	let newValue = value;
	if (newValue < 1000) {
		newValue = Math.floor(newValue * 100) / 100;
		dick = newValue + suffixes[i];
		i = 0;
	} else {
		newValue /= 1000;
		i++;
		abbreviateNumber(newValue);
	}
	return dick;
}

setInterval(function () {
	saveGame();
}, 30000);

//ДОБАВЛЯТЬ УЛУЧШЕНТЯ СЮДА
setInterval(function () {
	moni += moniPS / 10;
	document.getElementById("monni").innerHTML = abbreviateNumber(moni);
}, 100);

//ДОБАВЛЯТЬ СЮДА УЛУЧШЕНИЯ
setInterval(function moniPerSecond() {
	moniPS =
		workers +
		newss * 5 +
		students * 10 +
		migrants * 33 +
		tvs * 123 +
		scienses * 1000 +
		overseers * 9000 +
		childs * 25000 +
		spams * 69000 +
		researchers * 1240000 +
		tests * 75000000 +
		robos * 690000000 +
		zeppelins * 2200000000 +
		neuros * 13500000000 +
		SPACEHYPNOLASERs * 999999999999;
	document.getElementById("moniPS").innerHTML = abbreviateNumber(moniPS);
}, 1000);
