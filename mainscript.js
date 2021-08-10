            let moni=0;
            let ClickWeight = 1;
            let workercost = 15;
            let workers = 0;
            let migrantcost = 100;
            let migrants = 0;
            let childcost = 1000;
            let childs = 0;
            let robocost = 10000;
            let robos = 0;
            
            function AddMoni(){
                moni = moni + ClickWeight;
                document.getElementById('monni').innerHTML = moni;
            }
            
            function BuyWorker(){
                if(moni >= workercost){
                moni = moni - workercost;
                workercost = workercost * 2;
                workers = workers + 1;
                document.getElementById('workercostam').innerHTML = workercost;
                document.getElementById('workerboughtam').innerHTML = workers;
                document.getElementById('monni').innerHTML = moni;
                }
            }
            function BuyMigrant(){
                if(moni >= migrantcost){
                    moni = moni - migrantcost;
                    migrantcost = migrantcost * 2;
                    migrants = migrants + 1;
                    document.getElementById('migrantcostam').innerHTML = migrantcost;
                    document.getElementById('migrantboughtam').innerHTML = migrants;
                    document.getElementById('monni').innerHTML = moni;
                }
            }
            
            setInterval(function(){
                moni = moni + workers + migrants*5;
                document.getElementById('monni').innerHTML = moni;
            }, 1000)