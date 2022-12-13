
const CalculateEmi=async(req,res)=>{
    const {amount,interest,months}=req.body;
    console.log(amount,interest,months)
    const R=(interest/12/100);
    const a=amount*R;
    const b=1+R*months;
    const EMI=Math.floor(a*b/(b-1));
    const allamount=Math.floor(EMI*months);
    const InterestPayable=Math.floor(allamount-amount);
    res.send({"EMI":EMI,"InterestPayable":InterestPayable,"TotalPayment":allamount})
}
module.exports={
    CalculateEmi
}