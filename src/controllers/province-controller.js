import { Router } from "express";
import ProvinceService from "./../services/province-service.js"

const router = Router();
const service = new ProvinceService();

router.get('', async(req, res) => {
    let respuesta;
    const returnArray = await service.GetAllAsync();
    if(returnArray != null){
        respuesta = res.status(200).json(returnArray);
    }else{
        respuesta = res.status(500).send("error interno");
    }
})