import { db } from "../db.js";

export const postLogin = (req, res) => {


    const sql = "SELECT * FROM usuarios WHERE NOME = ? AND SENHA = ?";
    //Atribui os valores digitados da página de Login.
    const nome = req.body.nome;
    const senha = req.body.senha;

    //Executa o comando slq
    db.query(sql, [nome, senha], (err, result) => {
        //Case retornar algum erro apresemta a mensagem de falha na login
        if(err) return res.json("Falha na Login.");

        if (result.length > 0) {
            return res.json(result);
        }else {
            return res.json("Conta não encontrada.");
        }

    });

};
