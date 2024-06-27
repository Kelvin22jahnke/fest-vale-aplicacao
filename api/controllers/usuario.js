import { db } from "../db.js";

export const getUsuarios = (_, res) => {

    const sql = "SELECT * FROM usuarios";

    db.query(sql, (err, result) => {
        //Verifica se existe erro 
        if (err) return res.json(err);
        //Retorna os Usuarios cadastrados caso não exista erro
        return res.status(200).json(result);
    });

};