// Challenge 3: Net Salary Calculator (Toy Problem)

// grossSalary = basicSalary+benefits

let basicSalary= 60000;
    let benefits=20000;

// calculating gross salary 
let grossSalary = basicSalary+ benefits;

// netsalary= gross salary-total deductions
// total deductions=nhif+nssf+paye

// calculating nhif deductions according to the gross salary
        function calculatingNHIF(grossSalary){
            let nhif = 0;

            if(grossSalary <= 5999){
                nhif = 150;
            }else if(grossSalary<=7999){
                    nhif= 300;
                }else if(grossSalary<=11999){
                    nhif=400;
                }else if(grossSalary<=14999){
                    nhif=500;
                }else if(grossSalary<= 19999){
                    nhif = 600;
                }else if(grossSalary<=24999){
                    nhif=750;
                }else if(grossSalary<=29999){
                    nhif=850;
                }else if(grossSalary<=34999){
                    nhif=900;
                }else if(grossSalary<=39999){
                    nhif=950;
                }else if(grossSalary<=44999){
                    nhif=1000;
                }else if(grossSalary<=49999){
                    nhif=1100;
                }else if(grossSalary<= 59999){
                    nhif=1200;
                }else if(grossSalary<=69999){
                    nhif=1300;
                }else if(grossSalary<=79999){
                    nhif=1400;
                }else if(grossSalary<=89999){
                    nhif=1500;
                }else if(grossSalary<=99999){
                    nhif=1600;
                }else{
                    nhif=1700
                }
                return nhif
            }
            let nhif=calculatingNHIF(grossSalary)

                // calculating NSSF deducions determined by the grossprofit
                function calculatingNSSF(grossSalary){
                let nssfpayment= 0;
                let tier1=7000;
                let tier2=36000;

              if(grossSalary<= tier1){
                nssfpayment=grossSalary*0.06;

              }else if(grossSalary> tier1 && grossSalary <= tier2){
                nssfpayment=grossSalary*0.06;
              }else {
                nssfpayment=tier2*0.06;
              }
              return nssfpayment;
            }
            let nssfpayment=calculatingNSSF(grossSalary)


            // calculating paye determined by the gross salary

            function calculatePAYE(grossSalary){
                let paye =0
                if (grossSalary <= 24000){
                    paye = grossSalary * 0.1;
                }else if (grossSalary <= 32333){
                    paye=(24000*0.1)+((grossSalary- 24000)*0.25)
                }else if(grossSalary <= 500000){
                    paye=(24000*0.1)+((32333-24000)*0.25)+((grossSalary-32333)*0.3)
                }else if(grossSalary<=800000){
                    paye=(24000*0.1)+((32333-24000)*0.25)+((50000-32333)*0.3)+((grossSalary-500000)*0.325)
                }else{
                    paye=(24000*0.1)+((32333-24000)*0.25)+((500000-32333)*0.3)+((800000-5000000)*325)+((grossSalary-800000)*0.35)
                }
                    return paye;
            }
            let paye = calculatePAYE(grossSalary) 
        
            // calculatin net salary . 
            let netsalary= grossSalary-paye-nhif-nssfpayment

            console.log("gross salary:",grossSalary);
            console.log("PAYE:",paye);
            console.log("NHIF:",nhif);
            console.log("NSSF:",nssfpayment);
            console.log("net salary:",netsalary);
                // prints out the net salary having subtracted all deductions 
        
