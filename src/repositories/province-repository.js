import DBConfig from '../configs/db-config.js';
import pkg from 'pg';
import LogHelper from '../helpers/validaciones-helper.js';

const {Pool} = pkg;

export default class ProvinceRepository{
    constructor() {
        console.log('Estoy en: ProvinceRepository.constructor()');
        this.DBPool = null;
    }

    getDBPool = () => {
        if (this.DBPool == null){
            this.DBPool = new Pool(DBConfig);
        }
        return this.DBPool;
    }

    getAllAsync = async () => {
        console.log(`ProvinceRepository.getAllAsync()`);
        let returnArray = null;
        try{
            const sql = `SELECT * FROM provinces`;
            const result = await this.getDBPool().query(sql);
            returnArray = result.rows;
        } catch (error) {
            LogHelper.logError(error);
        }
        return returnArray;
    }

    getByIdAsync = async (id) => {
        console.log(`ProvinceRepository.getByIdAsync(${id})`);
        let returnEntity = null;
        try {
            const sql = `SELECT * FROM provinces WHERE id=$1`;
            const values = [id];
            const result = await this.getDBPool().query(sql, values);
            if (result.rows.length > 0){
                returnEntity = result.rows[0];
            }
        } catch (error) {
            LogHelper.logError(error);
        } 
        return returnEntity;
    }

    createAsync = async (entity) => {
        console.log(`ProvinceRepository.createAsync(${JSON.stringify(entity)})`);
        let newId = 0;
        try {
            const sql = ` INSERT INTO provinces (
                                name              ,
                                full_name            ,
                                latitude            ,
                                longitude    ,
                                display_order
                            ) VALUES (
                                $1,
                                $2,
                                $3,
                                $4,
                                $5
                            ) RETURNING id`;
            const values = [
                entity?.name ?? '',
                entity?.full_name ?? '',
                entity?.latitude ?? 0,
                entity?.longitude ?? 0,
                entity?.display_order ?? null
            ];
            const result = await this.getDBPool().query(sql, values);
                newId = result.rows[0].id;
        
        }catch(error) {
            LogHelper.logError(error);
        }
        return newId;
    }

    updateAsync = async (entity) => {
        console.log(`ProvinceRepository.updateAsync(${JSON.stringify(entity)})`);
        let rowsAffected = 0;
        let id = entity.id;
        
        try {
            const previousEntity = await this.getByIdAsync(id);
            if (previousEntity== null) return 0;
            const sql = `UPDATE provinces SET 
                            name = $2, 
                            full_name = $3, 
                            latitude = $4, 
                            longitude = $5, 
                            display_order = $6
                        WHERE id = $1`;
                            
            const values =  [   id,     // $1
                                entity?.name ?? previousEntity?.name, 
                                entity?.full_name ?? previousEntity?.full_name, 
                                entity?.latitude ?? previousEntity?.latitude, 
                                entity?.longitude ?? previousEntity?.longitude, 
                                entity?.display_order ?? previousEntity?.display_order
                            ];
            const result = await this.getDBPool().query(sql, values);

            rowsAffected = result.rowCount;
        } catch (error) {
            LogHelper.logError(error);
        }
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
        console.log(`ProvinceRepository.deleteByIdAsync(${id})`);
        let rowsAffected = 0;
        
        try {
            const sql = `DELETE from provinces WHERE id=$1`;
            const values = [id];
            const result = await this.getDBPool().query(sql, values);
            rowsAffected = result.rowCount;
        } catch (error) {
            LogHelper.logError(error);
        }
        return rowsAffected;        
    }
}