
            //стадии
            function baka1toggle() {
                hideAll();
                document.getElementById("cum1").classList.remove("noshow");
                document.getElementById("cum1").classList.add("yeshow");
                document.getElementById("cover1").classList.remove("noshow");
                document.getElementById("cover1").classList.add("yeshow");
            }
            function baka2toggle() {
                if (clickWeights >= 10 && workers >= 10 && newss >= 10 && students >= 10) {
                    hideAll();
                    document.getElementById("cum2").classList.remove("noshow");
                    document.getElementById("cum2").classList.add("yeshow");
                    document.getElementById("cover2").classList.remove("noshow");
                    document.getElementById("cover2").classList.add("yeshow");
                } else {
                    showAlert();
                }
            }
            function baka3toggle() {
                if (migrants >= 10 && tvs >= 10 && scienses >= 10 && overseers >= 10) {
                    hideAll();
                    document.getElementById("cum3").classList.remove("noshow");
                    document.getElementById("cum3").classList.add("yeshow");
                    document.getElementById("cover3").classList.remove("noshow");
                    document.getElementById("cover3").classList.add("yeshow");
                } else {
                    showAlert();
                }
            }
            function baka4toggle() {
                if (childs >= 10 && spams >= 10 && researchers >= 10 && tests >= 10) {
                    hideAll();
                    document.getElementById("cum4").classList.remove("noshow");
                    document.getElementById("cum4").classList.add("yeshow");
                    document.getElementById("cover4").classList.remove("noshow");
                    document.getElementById("cover4").classList.add("yeshow");
                } else {
                    showAlert();
                }
            }
            //конец кнопок стадий


            //прячет все меню улучшений
            function hideAll() {
                document.getElementById("cum1").classList.remove("yeshow");
                document.getElementById("cum1").classList.add("noshow");
                document.getElementById("cum2").classList.remove("yeshow");
                document.getElementById("cum2").classList.add("noshow");
                document.getElementById("cum3").classList.remove("yeshow");
                document.getElementById("cum3").classList.add("noshow");
                document.getElementById("cum4").classList.remove("yeshow");
                document.getElementById("cum4").classList.add("noshow");
                document.getElementById("cum4").classList.remove("yeshow");
                document.getElementById("cover1").classList.add("noshow");
                document.getElementById("cover2").classList.add("noshow");
                document.getElementById("cover3").classList.add("noshow");
                document.getElementById("cover4").classList.add("noshow");
            }


            //ОБЪЯВЛЯТЬ ЗДЕСЬ УЛУЧШЕНИЯ
            //просто все переменные
            let moni = 0 ?? "bruh";
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
            let clickWeight2Cost = 6250
            let clickWeights2 = 0;
            let migrantCost = 12500;
            let migrants = 0;
            let tvCost = 75000;
            let tvs = 0;
            let scienseCost = 404000;
            let scienses = 0;
            let overseerCost = 2600000;
            let overseers = 0;
            let clickWeight3Cost = 13000000;
            let clickWeights3 = 0;
            let childCost = 26000000;
            let childs = 0;
            let spamCost = 183000000;
            let spams = 0;
            let researcherCost = 1299000000;
            let researchers = 0;
            let testCost = 10392000000;
            let tests = 0;
            let clickWeight4Cost=53900000000;
            let clickWeights4=0;
            let roboCost = 103900000000;
            let robos = 0;
            let zeppelinCost = 999999999999;
            let zeppelins = 0;
            let neuroCost = 6546000000000;
            let neuros = 0;
            let SPACEHYPNOLASERCost = 99999999999999;
            let SPACEHYPNOLASERs = 0;
            let newValue = 69;
            let timeThen = Date.now();
            let timeNow = Date.now();
            //деньги по клику
            function addMoni() {
                moni += clickWeight;
                squishTheCat();
                document.getElementById('monni').innerHTML = abbreviateNumber(moni);
            }
            //СКВИШ ДЕ КЕТ
            function squishTheCat() {
                document.getElementById("tbltk").classList.remove("unsqsh");
                document.getElementById("tbltk").classList.add("sqsh");
                setTimeout(unSquisTheCat, 200);
            }

            function unSquisTheCat() {
                document.getElementById("tbltk").classList.remove("sqsh");
                document.getElementById("tbltk").classList.add("unsqsh");
            }

            //улучшения
            //мог бы сделать циклом, но мьех
            function buyClickWeight() {
                if (moni >= clickWeightCost) {
                    moni -= clickWeightCost;
                    clickWeights++;
                    clickWeight += 1;
                    clickWeightCost = (10 * 1.15 ** clickWeights);
                    document.getElementById('clickWeightCost').innerHTML = abbreviateNumber(clickWeightCost);
                    document.getElementById('clickWeights').innerHTML = clickWeights;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyWorker() {
                if (moni >= workerCost) {
                    moni -= workerCost;
                    workers++;
                    workerCost = (35 * 1.15 ** workers);
                    document.getElementById('workerCost').innerHTML = abbreviateNumber(workerCost);
                    document.getElementById('workers').innerHTML = workers;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyNews() {
                if (moni >= newsCost) {
                    moni -= newsCost;
                    newss++;
                    newsCost = (222 * 1.15 ** newss);
                    document.getElementById('newsCost').innerHTML = abbreviateNumber(newsCost);
                    document.getElementById('newss').innerHTML = newss;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyStudent() {
                if (moni >= studentCost) {
                    moni -= studentCost;
                    students++;
                    studentCost = (1250 * 1.15 ** students);
                    document.getElementById('studentCost').innerHTML = abbreviateNumber(studentCost);
                    document.getElementById('students').innerHTML = students;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyClickWeight2() {
                if (moni >= clickWeight2Cost) {
                    moni -= clickWeight2Cost;
                    clickWeights2++;
                    clickWeight += 100;
                    clickWeight2Cost = (6250 * 1.45 ** clickWeights2);
                    document.getElementById('clickWeight2Cost').innerHTML = abbreviateNumber(clickWeight2Cost);
                    document.getElementById('clickWeights2').innerHTML = clickWeights2;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyMigrant() {
                if (moni >= migrantCost) {
                    moni -= migrantCost;
                    migrants++;
                    migrantCost = (12500 * 1.14 ** migrants);
                    document.getElementById('migrantCost').innerHTML = abbreviateNumber(migrantCost);
                    document.getElementById('migrants').innerHTML = migrants;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyTv() {
                if (moni >= tvCost) {
                    moni -= tvCost;
                    tvs++;
                    tvCost = (75000 * 1.14 ** tvs);
                    document.getElementById('tvCost').innerHTML = abbreviateNumber(tvCost);
                    document.getElementById('tvs').innerHTML = tvs;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buySciense() {
                if (moni >= scienseCost) {
                    moni -= scienseCost;
                    scienses++;
                    scienseCost = (104000 * 1.16 ** scienses);
                    document.getElementById('scienseCost').innerHTML = abbreviateNumber(scienseCost);
                    document.getElementById('scienses').innerHTML = scienses;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyOverseer() {
                if (moni >= overseerCost) {
                    moni -= overseerCost;
                    overseers++;
                    overseerCost = (2600000 * 1.14 ** overseers);
                    document.getElementById('overseerCost').innerHTML = abbreviateNumber(overseerCost);
                    document.getElementById('overseers').innerHTML = overseers;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyClickWeight3() {
                if (moni >= clickWeight3Cost) {
                    moni -= clickWeight3Cost;
                    clickWeights3++;
                    clickWeight += 100000;
                    clickWeight3Cost = (13000000 * 1.55 ** clickWeights3);
                    document.getElementById('clickWeight3Cost').innerHTML = abbreviateNumber(clickWeight3Cost);
                    document.getElementById('clickWeights3').innerHTML = clickWeights3;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyChild() {
                if (moni >= childCost) {
                    moni -= childCost;
                    childs++;
                    childCost = (26000000 * 1.14 ** childs);
                    document.getElementById('childCost').innerHTML = abbreviateNumber(childCost);
                    document.getElementById('childs').innerHTML = childs;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buySpam() {
                if (moni >= spamCost) {
                    moni -= spamCost;
                    spams++;
                    spamCost = (183000000 * 1.15 ** spams);
                    document.getElementById('spamCost').innerHTML = abbreviateNumber(spamCost);
                    document.getElementById('spams').innerHTML = spams;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyResearcher() {
                if (moni >= researcherCost) {
                    moni -= researcherCost;
                    researchers++;
                    researcherCost = Math.ceil(1299000000 * 1.17 ** researchers);
                    document.getElementById('researcherCost').innerHTML = abbreviateNumber(researcherCost);
                    document.getElementById('researchers').innerHTML = researchers;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyTest() {
                if (moni >= testCost) {
                    moni -= testCost;
                    tests++;
                    testCost = Math.ceil(10390000000 * 1.25 ** tests);
                    document.getElementById('testCost').innerHTML = abbreviateNumber(testCost);
                    document.getElementById('tests').innerHTML = tests;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyClickWeight4() {
                if (moni >= clickWeight4Cost) {
                    moni -= clickWeight4Cost;
                    clickWeights4++;
                    clickWeight += 1000000000;
                    clickWeight4Cost = (53900000000 * 1.65 ** clickWeights4);
                    document.getElementById('clickWeight4Cost').innerHTML = abbreviateNumber(clickWeight4Cost);
                    document.getElementById('clickWeights4').innerHTML = clickWeights4;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyRobo() {
                if (moni >= roboCost) {
                    moni -= roboCost;
                    robos++;
                    roboCost = Math.ceil(103920000000 * 1.21 ** robos);
                    document.getElementById('roboCost').innerHTML = abbreviateNumber(roboCost);
                    document.getElementById('robos').innerHTML = robos;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyZeppelin() {
                if (moni >= zeppelinCost) {
                    moni -= zeppelinCost;
                    zeppelins++;
                    zeppelinCost = 727400000000 * 1.18 ** zeppelins;
                    document.getElementById('zeppelinCost').innerHTML = abbreviateNumber(zeppelinCost);
                    document.getElementById('zeppelins').innerHTML = zeppelins;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buyNeuro() {
                if (moni >= neuroCost) {
                    moni -= neuroCost;
                    neuros++;
                    neuroCost = Math.ceil(6546000000000 * 1.13 ** neuros);
                    document.getElementById('neuroCost').innerHTML = abbreviateNumber(neuroCost);
                    document.getElementById('neuros').innerHTML = neuros;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }

            function buySPACEHYPNOLASER() {
                if (moni >= SPACEHYPNOLASERCost) {
                    moni -= SPACEHYPNOLASERCost;
                    SPACEHYPNOLASERs++;
                    SPACEHYPNOLASERCost = (99999999999999 * 1.15 ** SPACEHYPNOLASERs);
                    document.getElementById('SPACEHYPNOLASERCost').innerHTML = abbreviateNumber(SPACEHYPNOLASERCost);;
                    document.getElementById('SPACEHYPNOLASERs').innerHTML = SPACEHYPNOLASERs;
                    document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                }
            }
            //улучшения всё

            let ShowStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0];
            function clickWeightInfoT() {
                if (ShowStatus[0] == 0) {
                    document.getElementById("clickWeightInfo").classList.remove("noshow");
                    document.getElementById("clickWeightInfo").classList.add("yeshow");
                    ShowStatus[0] = 1;
                } else {
                    document.getElementById("clickWeightInfo").classList.remove("yeshow");
                    document.getElementById("clickWeightInfo").classList.add("noshow");
                    ShowStatus[0] = 0;
                }
            }
            function workerInfoT() {
                if (ShowStatus[1] == 0) {
                    document.getElementById("workerInfo").classList.remove("noshow");
                    document.getElementById("workerInfo").classList.add("yeshow");
                    ShowStatus[1] = 1;
                } else {
                    document.getElementById("workerInfo").classList.remove("yeshow");
                    document.getElementById("workerInfo").classList.add("noshow");
                    ShowStatus[1] = 0;
                }
            }
            function newsInfoT() {
                if (ShowStatus[2] == 0) {
                    document.getElementById("newsInfo").classList.remove("noshow");
                    document.getElementById("newsInfo").classList.add("yeshow");
                    ShowStatus[2] = 1;
                } else {
                    document.getElementById("newsInfo").classList.remove("SPACEHYPNOLASERs");
                    document.getElementById("newsInfo").classList.add("noshow");
                    ShowStatus[2] = 0;
                }
            }
            function studentsInfoT() {
                if (ShowStatus[3] == 0) {
                    document.getElementById("studentsInfo").classList.remove("noshow");
                    document.getElementById("studentsInfo").classList.add("yeshow");
                    ShowStatus[3] = 1;
                } else {
                    document.getElementById("studentsInfo").classList.remove("yeshow");
                    document.getElementById("studentsInfo").classList.add("noshow");
                    ShowStatus[3] = 0;
                }
            }
            function clickWeightInfo2T() {
                if (ShowStatus[16] == 0) {
                    document.getElementById("clickWeight2Info").classList.remove("noshow");
                    document.getElementById("clickWeight2Info").classList.add("yeshow");
                    ShowStatus[16] = 1;
                } else {
                    document.getElementById("clickWeight2Info").classList.remove("yeshow");
                    document.getElementById("clickWeight2Info").classList.add("noshow");
                    ShowStatus[16] = 0;
                }
            }
            function migrantInfoT() {
                if (ShowStatus[4] == 0) {
                    document.getElementById("migrantInfo").classList.remove("noshow");
                    document.getElementById("migrantInfo").classList.add("yeshow");
                    ShowStatus[4] = 1;
                } else {
                    document.getElementById("migrantInfo").classList.remove("yeshow");
                    document.getElementById("migrantInfo").classList.add("noshow");
                    ShowStatus[4] = 1;
                }
            }
            function tvInfoT() {
                if (ShowStatus[5] == 0) {
                    document.getElementById("tvInfo").classList.remove("noshow");
                    document.getElementById("tvInfo").classList.add("yeshow");
                    ShowStatus[5] = 1;
                } else {
                    document.getElementById("tvInfo").classList.remove("yeshow");
                    document.getElementById("tvInfo").classList.add("noshow");
                    ShowStatus[5] = 0;
                }
            }
            function scienseInfoT() {
                if (ShowStatus[6] == 0) {
                    document.getElementById("scienseInfo").classList.remove("noshow");
                    document.getElementById("scienseInfo").classList.add("yeshow");
                    ShowStatus[6] = 1;
                } else {
                    document.getElementById("scienseInfo").classList.remove("yeshow");
                    document.getElementById("scienseInfo").classList.add("noshow");
                    ShowStatus[6] = 0;
                }
            }
            function overseerInfoT() {
                if (ShowStatus[7] == 0) {
                    document.getElementById("overseerInfo").classList.remove("noshow");
                    document.getElementById("overseerInfo").classList.add("yeshow");
                    ShowStatus[7] = 1;
                } else {
                    document.getElementById("overseerInfo").classList.remove("yeshow");
                    document.getElementById("overseerInfo").classList.add("noshow");
                    ShowStatus[7] = 0;
                }
            }
            function clickWeightInfo3T() {
                if (ShowStatus[17] == 0) {
                    document.getElementById("clickWeight3Info").classList.remove("noshow");
                    document.getElementById("clickWeight3Info").classList.add("yeshow");
                    ShowStatus[17] = 1;
                } else {
                    document.getElementById("clickWeight3Info").classList.remove("yeshow");
                    document.getElementById("clickWeight3Info").classList.add("noshow");
                    ShowStatus[17] = 0;
                }
            }
            function childInfoT() {
                if (ShowStatus[8] == 0) {
                    document.getElementById("childInfo").classList.remove("noshow");
                    document.getElementById("childInfo").classList.add("yeshow");
                    ShowStatus[8] = 1;
                } else {
                    document.getElementById("childInfo").classList.remove("yeshow");
                    document.getElementById("childInfo").classList.add("noshow");
                    ShowStatus[8] = 0;
                }
            }
            function spamInfoT() {
                if (ShowStatus[9] == 0) {
                    document.getElementById("spamInfo").classList.remove("noshow");
                    document.getElementById("spamInfo").classList.add("yeshow");
                    ShowStatus[9] = 1;
                } else {
                    document.getElementById("spamInfo").classList.remove("yeshow");
                    document.getElementById("spamInfo").classList.add("noshow");
                    ShowStatus[9] = 0;
                }
            }
            function researcherInfoT() {
                if (ShowStatus[10] == 0) {
                    document.getElementById("researcherInfo").classList.remove("noshow");
                    document.getElementById("researcherInfo").classList.add("yeshow");
                    ShowStatus[10] = 1;
                } else {
                    document.getElementById("researcherInfo").classList.remove("yeshow");
                    document.getElementById("researcherInfo").classList.add("noshow");
                    ShowStatus[10] = 0;
                }
            }
            function testInfoT() {
                if (ShowStatus[11] == 0) {
                    document.getElementById("testInfo").classList.remove("noshow");
                    document.getElementById("testInfo").classList.add("yeshow");
                    ShowStatus[11] = 1;
                } else {
                    document.getElementById("testInfo").classList.remove("yeshow");
                    document.getElementById("testInfo").classList.add("noshow");
                    ShowStatus[11] = 0;
                }
            }
            function clickWeightInfo3T() {
                if (ShowStatus[18] == 0) {
                    document.getElementById("clickWeight3Info").classList.remove("noshow");
                    document.getElementById("clickWeight3Info").classList.add("yeshow");
                    ShowStatus[18] = 1;
                } else {
                    document.getElementById("clickWeight3Info").classList.remove("yeshow");
                    document.getElementById("clickWeight3Info").classList.add("noshow");
                    ShowStatus[18] = 0;
                }
            }
            function roboInfoT() {
                if (ShowStatus[12] == 0) {
                    document.getElementById("roboInfo").classList.remove("noshow");
                    document.getElementById("roboInfo").classList.add("yeshow");
                    ShowStatus[12] = 1;
                } else {
                    document.getElementById("roboInfo").classList.remove("yeshow");
                    document.getElementById("roboInfo").classList.add("noshow");
                    ShowStatus[12] = 0;
                }
            }
            function zeppelinInfoT() {
                if (ShowStatus[13] == 0) {
                    document.getElementById("zeppelinInfo").classList.remove("noshow");
                    document.getElementById("zeppelinInfo").classList.add("yeshow");
                    ShowStatus[13] = 1;
                } else {
                    document.getElementById("zeppelinInfo").classList.remove("yeshow");
                    document.getElementById("zeppelinInfo").classList.add("noshow");
                    ShowStatus[13] = 0;
                }
            }
            function neuroInfoT() {
                if (ShowStatus[14] == 0) {
                    document.getElementById("neuroInfo").classList.remove("noshow");
                    document.getElementById("neuroInfo").classList.add("yeshow");
                    ShowStatus[14] = 1;
                } else {
                    document.getElementById("neuroInfo").classList.remove("yeshow");
                    document.getElementById("neuroInfo").classList.add("noshow");
                    ShowStatus[14] = 0;
                }
            }
            function SPACEHYPNOLASERInfoT() {
                if (ShowStatus[15] == 0) {
                    document.getElementById("SPACEHYPNOLASERInfo").classList.remove("noshow");
                    document.getElementById("SPACEHYPNOLASERInfo").classList.add("yeshow");
                    ShowStatus[15] = 1;
                } else {
                    document.getElementById("SPACEHYPNOLASERInfo").classList.remove("yeshow");
                    document.getElementById("SPACEHYPNOLASERInfo").classList.add("noshow");
                    ShowStatus[15] = 0;
                }
            }

            //ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА

            //сохраняем то, что хотим сохранить
            function saveGame() {
                timeThen = Date.now();
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
                    clickWeight2Cost: clickWeight2Cost,
                    clickWeights2: clickWeights2,
                    migrantCost: migrantCost,
                    migrants: migrants,
                    tvCost: tvCost,
                    tvs: tvs,
                    scienseCost: scienseCost,
                    scienses: scienses,
                    overseerCost: overseerCost,
                    overseers: overseers,
                    clickWeight3Cost: clickWeight3Cost,
                    clickWeights3: clickWeights3,
                    childCost: childCost,
                    childs: childs,
                    spamCost: spamCost,
                    spams: spams,
                    researcherCost: researcherCost,
                    researchers: researchers,
                    testCost: testCost,
                    tests: tests,
                    clickWeight4Cost: clickWeight4Cost,
                    clickWeights4: clickWeights4,
                    roboCost: roboCost,
                    robos: robos,
                    zeppelinCost: zeppelinCost,
                    zeppelins: zeppelins,
                    neuroCost: neuroCost,
                    neuros: neuros,
                    SPACEHYPNOLASERCost: SPACEHYPNOLASERCost,
                    SPACEHYPNOLASERs: SPACEHYPNOLASERs,
                    s: s,
                    timeThen: timeThen,
                };
                localStorage.setItem("gameSave", JSON.stringify(gameSave));

            }

            //ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА
            //МАТЕРЬ БОЖЬЯ, КАК ЖЕ ИХ МНОГО

            //очень нудная проверка всего, что хочет загрузиться
            function loadGame() {
                let savedGame = JSON.parse(localStorage.getItem("gameSave"));
                if (typeof savedGame.moni !== "undefined") moni = savedGame.moni;
                if (typeof savedGame.moniPS !== "undefined") moniPS = savedGame.moniPS;
                if (typeof savedGame.clickWeight !== "undefined") clickWeight = savedGame.clickWeight;
                if (typeof savedGame.clickWeightCost !== "undefined") clickWeightCost = savedGame.clickWeightCost;
                if (typeof savedGame.clickWeights !== "undefined") clickWeights = savedGame.clickWeights;
                if (typeof savedGame.workerCost !== "undefined") workerCost = savedGame.workerCost;
                if (typeof savedGame.workers !== "undefined") workers = savedGame.workers;
                if (typeof savedGame.newsCost !== "undefined") newsCost = savedGame.newsCost;
                if (typeof savedGame.newss !== "undefined") newss = savedGame.newss;
                if (typeof savedGame.studentCost !== "undefined") studentCost = savedGame.studentCost;
                if (typeof savedGame.students !== "undefined") students = savedGame.students;
                if (typeof savedGame.clickWeight2Cost !== "undefined") clickWeight2Cost = savedGame.clickWeight2Cost;
                if (typeof savedGame.clickWeights2 !== "undefined") clickWeights2 = savedGame.clickWeights2;
                if (typeof savedGame.migrantCost !== "undefined") migrantCost = savedGame.migrantCost;
                if (typeof savedGame.migrants !== "undefined") migrants = savedGame.migrants;
                if (typeof savedGame.tvCost !== "undefined") tvCost = savedGame.tvCost;
                if (typeof savedGame.tvs !== "undefined") tvs = savedGame.tvs;
                if (typeof savedGame.scienseCost !== "undefined") scienseCost = savedGame.scienseCost;
                if (typeof savedGame.scienses !== "undefined") scienses = savedGame.scienses;
                if (typeof savedGame.overseerCost !== "undefined") overseerCost = savedGame.overseerCost;
                if (typeof savedGame.overseers !== "undefined") overseers = savedGame.overseers;
                if (typeof savedGame.clickWeight3Cost !== "undefined") clickWeight3Cost = savedGame.clickWeight3Cost;
                if (typeof savedGame.clickWeights3 !== "undefined") clickWeights3 = savedGame.clickWeights3;
                if (typeof savedGame.childCost !== "undefined") childCost = savedGame.childCost;
                if (typeof savedGame.childs !== "undefined") childs = savedGame.childs;
                if (typeof savedGame.spamCost !== "undefined") spamCost = savedGame.spamCost;
                if (typeof savedGame.spams !== "undefined") spams = savedGame.spams;
                if (typeof savedGame.researcherCost !== "undefined") researcherCost = savedGame.researcherCost;
                if (typeof savedGame.researchers !== "undefined") researchers = savedGame.researchers;
                if (typeof savedGame.testCost !== "undefined") testCost = savedGame.testCost;
                if (typeof savedGame.tests !== "undefined") tests = savedGame.tests;
                if (typeof savedGame.clickWeight4Cost !== "undefined") clickWeight4Cost = savedGame.clickWeight4Cost;
                if (typeof savedGame.clickWeights4 !== "undefined") clickWeights4 = savedGame.clickWeights4;
                if (typeof savedGame.roboCost !== "undefined") roboCost = savedGame.roboCost;
                if (typeof savedGame.robos !== "undefined") robos = savedGame.robos;
                if (typeof savedGame.zeppelinCost !== "undefined") zeppelinCost = savedGame.zeppelinCost;
                if (typeof savedGame.zeppelins !== "undefined") zeppelins = savedGame.zeppelins;
                if (typeof savedGame.neuroCost !== "undefined") neuroCost = savedGame.neuroCost;
                if (typeof savedGame.neuros !== "undefined") neuros = savedGame.neuros;
                if (typeof savedGame.SPACEHYPNOLASERCost !== "undefined") SPACEHYPNOLASERCost = savedGame.SPACEHYPNOLASERCost;
                if (typeof savedGame.SPACEHYPNOLASERs !== "undefined") SPACEHYPNOLASERs = savedGame.SPACEHYPNOLASERs;
                if (typeof savedGame.s !== "undefined") s = savedGame.s;
                if (typeof savedGame.timeThen !== "undefined") timeThen = savedGame.timeThen;
            }

            let s = 0;

            //ДОБАВЛЯТЬ УЛУЧШЕНИЯ СЮДА
            //загрузка всего при запуске
            window.onload = function() {
                loadGame();
                if (s == 0) {
                    s++;
                    showSpravka();
                }
                timeNow = Date.now();
                addAFK();
                document.getElementById('clickWeightCost').innerHTML = abbreviateNumber(clickWeightCost);
                document.getElementById('clickWeights').innerHTML = clickWeights;
                document.getElementById('workerCost').innerHTML = abbreviateNumber(workerCost);
                document.getElementById('workers').innerHTML = workers;
                document.getElementById('newsCost').innerHTML = abbreviateNumber(newsCost);
                document.getElementById('newss').innerHTML = newss;
                document.getElementById('studentCost').innerHTML = abbreviateNumber(studentCost);
                document.getElementById('students').innerHTML = students;
                document.getElementById('clickWeight2Cost').innerHTML = abbreviateNumber(clickWeight2Cost);
                document.getElementById('clickWeights2').innerHTML = clickWeights2;
                document.getElementById('migrantCost').innerHTML = abbreviateNumber(migrantCost);
                document.getElementById('migrants').innerHTML = migrants;
                document.getElementById('tvCost').innerHTML = abbreviateNumber(tvCost);
                document.getElementById('tvs').innerHTML = tvs;
                document.getElementById('scienseCost').innerHTML = abbreviateNumber(scienseCost);
                document.getElementById('scienses').innerHTML = scienses;
                document.getElementById('overseerCost').innerHTML = abbreviateNumber(overseerCost);
                document.getElementById('overseers').innerHTML = overseers;
                document.getElementById('clickWeight3Cost').innerHTML = abbreviateNumber(clickWeight3Cost);
                document.getElementById('clickWeights3').innerHTML = clickWeights3;
                document.getElementById('childCost').innerHTML = abbreviateNumber(childCost);
                document.getElementById('childs').innerHTML = childs;
                document.getElementById('spamCost').innerHTML = abbreviateNumber(spamCost);
                document.getElementById('spams').innerHTML = spams;
                document.getElementById('researcherCost').innerHTML = abbreviateNumber(researcherCost);
                document.getElementById('researchers').innerHTML = researchers;
                document.getElementById('testCost').innerHTML = abbreviateNumber(testCost);
                document.getElementById('tests').innerHTML = tests;
                document.getElementById('clickWeight4Cost').innerHTML = abbreviateNumber(clickWeight4Cost);
                document.getElementById('clickWeights4').innerHTML = clickWeights4;
                document.getElementById('roboCost').innerHTML = abbreviateNumber(roboCost);
                document.getElementById('robos').innerHTML = robos;
                document.getElementById('zeppelinCost').innerHTML = abbreviateNumber(zeppelinCost);
                document.getElementById('zeppelins').innerHTML = zeppelins;
                document.getElementById('neuroCost').innerHTML = abbreviateNumber(neuroCost);
                document.getElementById('neuros').innerHTML = neuros;
                document.getElementById('SPACEHYPNOLASERCost').innerHTML = abbreviateNumber(SPACEHYPNOLASERCost);
                document.getElementById('SPACEHYPNOLASERs').innerHTML = SPACEHYPNOLASERs;
                document.getElementById('monni').innerHTML = abbreviateNumber(moni);
                document.getElementById('moniPS').innerHTML = abbreviateNumber(moniPS);
                randomMove();
                saveGame();
            };

            //рестарт
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

            //справка
            function showSpravka() {
                document.getElementById("allcov").classList.remove("noshow");
                document.getElementById("allcov").classList.add("yeshow");
                document.getElementById("sprav").classList.remove("noshow");
                document.getElementById("sprav").classList.add("yeshow");
            }

            function hideSpravka() {
                document.getElementById("allcov").classList.remove("yeshow");
                document.getElementById("allcov").classList.add("noshow");
                document.getElementById("sprav").classList.remove("yeshow");
                document.getElementById("sprav").classList.add("noshow");
            }


            /*
            Нашел это в интернете
            не знаю, как тут все работает, но пользовался ей, пока не сделал свою
            а еще она хреново сокращает
            function abbreviateNumber(value) {
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

            //волшебная штука, которую я сделал САМ
            //принимает число и возвращает его короткую версию
            let i = 0;
            let suffixes = ["р", "т.р", "м.р", "б.р", "тр.р", "кв.р", "но.р", "брух"];
            function abbreviateNumber(value) {
                let newValue = value;
                if (newValue < 1000) {
                    newValue = Math.floor(newValue*100)/100;
                    duck = newValue + suffixes[i];
                    i = 0;
                } else {
                    newValue /= 1000;
                    i++;
                    abbreviateNumber(newValue);
                }return duck;
            }

            //авто сохранение

            setInterval(function() {
                saveGame();
            }, 30000);



            //ДОБАВЛЯТЬ УЛУЧШЕНТЯ СЮДА
            //добавляет мони каждые 100мс.
            setInterval(function() {
                moni += (workers + newss * 5 + students * 10 + migrants * 69 + tvs * 590 + scienses * 3000 + overseers * 20000 + childs * 210000 + spams * 1900000 + researchers * 9110000 + tests * 75000000 + robos * 690000000 + zeppelins * 2200000000 + neuros * 13500000000 + SPACEHYPNOLASERs * 999999999999)/10 ?? bruh;
                document.getElementById('monni').innerHTML = abbreviateNumber(moni);
            }, 100)

            //ДОБАВЛЯТЬ СЮДА УЛУЧШЕНИЯ
            //вычисляет мони в секунду, да
            setInterval(function moniPerSecond() {
                moniPS = (workers + newss * 5 + students * 10 + migrants * 69 + tvs * 590 + scienses * 3000 + overseers * 20000 + childs * 210000 + spams * 1900000 + researchers * 9110000 + tests * 75000000 + robos * 690000000 + zeppelins * 2200000000 + neuros * 13500000000 + SPACEHYPNOLASERs * 999999999999)
                document.getElementById('moniPS').innerHTML = abbreviateNumber(moniPS);
            }, 100);


            /*случайное число от 0 до указанного*/
            function getRandomInt(max) {
                return Math.floor(Math.random() * max);
            }

            /*пикчи микрочеликов*/
            let pic = [
                "url(https://i.imgur.com/7S7XJ5v_d.webp?maxwidth=640&shape=thumb&fidelity=medium)",
                "url(https://i.imgur.com/cA1BW2M_d.webp?maxwidth=640&shape=thumb&fidelity=medium)",
                "url(https://i.imgur.com/S0CFWV2_d.webp?maxwidth=640&shape=thumb&fidelity=medium)",
                "url(https://i.imgur.com/sMwW0Kd_d.webp?maxwidth=640&shape=thumb&fidelity=medium)",
                "url(https://i.imgur.com/JjU50TC_d.webp?maxwidth=640&shape=thumb&fidelity=medium)",];

            let colors = ["red", "green", "blue", "white", "black"];

            /*создает 50 начальных микрочеликов*/
            function randomMove() {
                for (q = 0; q < 5; q++) {
                    for (i = 0; i < 10; i++) {
                        let doom = document.createElement('div');
                        doom.setAttribute("id", "dooom"+(q));
                        doom.style.height = '200px';
                        doom.style.width = '200px';

                        doom.style.backgroundImage = pic[0];
                        doom.style.backgroundSize = 'cover';
                        doom.style.position = 'absolute';
                        doom.style.bottom = '0';
                        doom.style.left = getRandomArbitrary(-5000, -150)+'px';
                        doom.style.animation = 'movenime '+getRandomArbitrary(25, 40)+'s linear infinite, stepnime '+getRandomArbitrary(0.4, 1.2)+'s'+' linear infinite alternate';
                        div.appendChild(doom);
                    }
                }
            }

            /*создает 10 микрочеликов*/
            function oneDoom(p, q) {
                for (i = 0; i < 10; i++) {
                    let doom = document.createElement('div');
                    doom.setAttribute("id", "dooom"+p);
                    doom.style.height = '200px';
                    doom.style.width = '200px';

                    doom.style.backgroundImage = pic[q];
                    doom.style.backgroundSize = 'cover';
                    doom.style.position = 'absolute';
                    doom.style.bottom = '0';
                    doom.style.left = getRandomArbitrary(-5000, -150)+'px';
                    doom.style.animation = 'movenime '+getRandomArbitrary(25, 40)+'s linear infinite, stepnime '+getRandomArbitrary(0.5, 1.1)+'s'+' linear infinite alternate';
                    div.appendChild(doom);
                }
            }
            /*ЗАПОЛНИТЬ ОСТАТКИ*/
            let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

            /*очень длинная штука, которую я не знаю, как сократить*/
            /*постепенно заменяет микрочеликов на более депрессивных*/
            setInterval(
                function depression() {
                    let trigger = [
                        "666", "1500", "6666", "20000", "345678", "987654", "99999999", "999999999", "9999999999", "99999999999", "999999999999", "9999999999999", "99999999999999", "999999999999999"];

                    switch (true) {
                        case moni > trigger[0] && d[0] == 0:
                            deletedoom(4);
                            oneDoom(4, 1);
                            d[0]++;
                            break;
                        case moni > trigger[1] && d[1] == 0:
                            deletedoom(3);
                            oneDoom(3, 1);
                            d[1]++;
                            break;
                        case moni > trigger[2] && d[2] == 0:
                            deletedoom(4);
                            oneDoom(4, 2);
                            d[2]++;
                            break;
                        case moni > trigger[3] && d[3] == 0:
                            deletedoom(3);
                            oneDoom(3, 2);
                            deletedoom(2);
                            oneDoom(2, 1);
                            d[3]++;
                            break;
                        case moni > trigger[4] && d[0] == 0:
                            deletedoom(1);
                            oneDoom(1, 1);
                            d[4]++;
                            break;
                        case moni > trigger[5] && d[5] == 0:
                            deletedoom(4);
                            oneDoom(4, 3);
                            deletedoom(2);
                            oneDoom(2, 2);
                            d[5]++;
                            break;
                        case moni > trigger[6] && d[6] == 0:
                            deletedoom(3);
                            oneDoom(3, 3);
                            d[6]++;
                            break;
                        case moni > trigger[7] && d[7] == 0:
                            deletedoom(4);
                            oneDoom(4, 4);
                            d[7]++;
                            break;
                        case moni > trigger[8] && d[8] == 0:
                            deletedoom(1);
                            oneDoom(1, 2);
                            deletedoom(0);
                            oneDoom(0, 1);
                            d[8]++;
                            break;
                        case moni > trigger[9] && d[9] == 0:
                            deletedoom(2);
                            oneDoom(2, 3);
                            d[9]++;
                            break;
                        case moni > trigger[10] && d[10] == 0:
                            deletedoom(3);
                            oneDoom(3, 4);
                            deletedoom(1);
                            oneDoom(1, 3);
                            d[10]++;
                            break;
                        case moni > trigger[11] && d[11] == 0:
                            deletedoom(2);
                            oneDoom(2, 4);
                            deletedoom(0);
                            oneDoom(0, 2);
                            d[11]++;
                            break;
                        case moni > trigger[12] && d[12] == 0:
                            deletedoom(0);
                            oneDoom(0, 3);
                            deletedoom(1);
                            oneDoom(1, 4);
                            d[12]++;
                            break;
                        case moni > trigger[13] && d[13] == 0:
                            deletedoom(0);
                            oneDoom(0, 4);
                            d[13]++;
                            break;
                    };
                }, 10);

            /*удаляет 10 микрочеликов*/
            function deletedoom(p) {
                for (i = 0; i < 10; i++) {
                    let deleteme = document.getElementById('dooom'+p);
                    deleteme.parentNode.removeChild(deleteme);
                }
            }

            /*рандомное число в диапазоне*/
            function getRandomArbitrary(min, max) {
                return Math.random() * (max - min) + min;
            }



            /*
            просто референс
            height: 100px;
                width: 100px;
                background-color: white;
                position: absolute;
                bottom: 0;
                animation: movenime 20s linear infinite, stepnime 0.35s linear infinite alternate;
            */

            /*ШТУКА, КОТОРАЯ ИСПРАВИЛА КОШКУ КАРТОШКУ*/
            let sas = document.getElementById('tbltk');
            sas.addEventListener('mousedown', addMoni, false);
            //я пытался сделать это циклом.. честно
            let sos1 = document.getElementById('btncst1');
            let sos2 = document.getElementById('btncst2');
            let sos3 = document.getElementById('btncst3');
            let sos4 = document.getElementById('btncst4');
            let sos5 = document.getElementById('btncst5');
            let sos6 = document.getElementById('btncst6');
            let sos7 = document.getElementById('btncst7');
            let sos8 = document.getElementById('btncst8');
            let sos9 = document.getElementById('btncst9');
            let sos10 = document.getElementById('btncst10');
            let sos11 = document.getElementById('btncst11');
            let sos12 = document.getElementById('btncst12');
            let sos13 = document.getElementById('btncst13');
            let sos14 = document.getElementById('btncst14');
            let sos15 = document.getElementById('btncst15');
            let sos16 = document.getElementById('btncst16');

            sos1.addEventListener('mousedown', function() {
                dotheshadow(1)}, false);
            sos2.addEventListener('mousedown', function() {
                dotheshadow(2)}, false);
            sos3.addEventListener('mousedown', function() {
                dotheshadow(3)}, false);
            sos4.addEventListener('mousedown', function() {
                dotheshadow(4)}, false);
            sos5.addEventListener('mousedown', function() {
                dotheshadow(5)}, false);
            sos6.addEventListener('mousedown', function() {
                dotheshadow(6)}, false);
            sos7.addEventListener('mousedown', function() {
                dotheshadow(7)}, false);
            sos8.addEventListener('mousedown', function() {
                dotheshadow(8)}, false);
            sos9.addEventListener('mousedown', function() {
                dotheshadow(9)}, false);
            sos10.addEventListener('mousedown', function() {
                dotheshadow(10)}, false);
            sos11.addEventListener('mousedown', function() {
                dotheshadow(11)}, false);
            sos12.addEventListener('mousedown', function() {
                dotheshadow(12)}, false);
            sos13.addEventListener('mousedown', function() {
                dotheshadow(13)}, false);
            sos14.addEventListener('mousedown', function() {
                dotheshadow(14)}, false);
            sos15.addEventListener('mousedown', function() {
                dotheshadow(15)}, false);
            sos16.addEventListener('mousedown', function() {
                dotheshadow(16)}, false);


            function dotheshadow(y) {
                document.getElementById("btncst"+y).classList.remove("btnrls");
                document.getElementById("btncst"+y).classList.add("btnprs");
                setTimeout(
                    function() {
                        undotheshadow(y)}, 200);
            }
            function undotheshadow(y) {
                document.getElementById("btncst"+y).classList.remove("btnrprs");
                document.getElementById("btncst"+y).classList.add("btnrls");
            }
            function showAlert() {
                document.getElementById("buyalertt").classList.remove("noshow");
                document.getElementById("buyalertt").classList.add("yeshow");
                document.getElementById("allcov").classList.remove("noshow");
                document.getElementById("allcov").classList.add("yeshow");
            }
            function hideAlert() {
                document.getElementById("buyalertt").classList.remove("yeshow");
                document.getElementById("buyalertt").classList.add("noshow");
                document.getElementById("allcov").classList.remove("yeshow");
                document.getElementById("allcov").classList.add("noshow");
            }
            let k = 0;
            function doSaveAlert() {
                if (k == 0) {
                    document.getElementById("saveAlertt").classList.remove("noshow");
                    document.getElementById("saveAlertt").classList.add("yeshow");
                    setTimeout(function() {
                        undoSaveAlert()}, 5000);
                k = 1;
            }
        }
        function undoSaveAlert() {
            document.getElementById("saveAlertt").classList.remove("yeshow");
            document.getElementById("saveAlertt").classList.add("noshow");
            k = 0;
        }
        let timeAFK = 0;
        function addAFK() {
            timeAFK = timeNow - timeThen;
            moni += moniPS * (timeAFK/1000);
        }
