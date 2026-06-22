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
    return respuesta;
});

router.get('/:id', async(req, res) => {

});

router.post('', async(req, res) => {

});

router.put('', async(req, res) => {

});

router.delete('/:id', async(req, res) => {

});

export default router;