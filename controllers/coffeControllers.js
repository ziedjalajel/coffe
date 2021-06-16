let coffe = require("../data");

exports.coffeCreate = (req,res)=> {
    req.body.id= coffe[coffe.length-1].id+1
    coffe.push(req.body);
    res.status(201).json(req.body);
}
exports.coffeDelete = (req,res)=> {
    const {coffeId} = req.params
    const coffeFound = coffe.find((coff)=> coff.id === +coffeId
    );
    if(coffeFound){
        coffe = coffe.filter((coff)=>coff !== coffeFound)
        res.status(204).end()
    } else {
        res.status(404).json({message : " coffe id does not exist"})
    }
}
exports.coffeDetail = (req,res)=>{
    const foundCoffe = coffe.find(
        (coffe)=> coffe.id === +req.params.coffeId
    );
    if(foundCoffe){
        res.json(foundCoffe)
    } else {
        res.status(404).json({ message : "Page Not Found"}).end();
        
    }
}
exports.coffeList = (req,res)=> {
    res.json(coffe);
}