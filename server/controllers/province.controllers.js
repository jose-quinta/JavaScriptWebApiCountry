import { pool } from "../data/db.js";

export const getProvinces = async (req, res) => {
    try {
        const [result] = await pool.query(
          "SELECT  p.id AS id, p.name AS province, c.name AS country, c.id AS id_country  \
            FROM province AS p \
                INNER JOIN country AS c \
            ON p.id_country = c.id \
            ORDER BY id DESC"
        );
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProvince = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT p.id AS id, p.name AS province, c.name AS country, c.id AS id_country  \
            FROM province AS p \
                INNER JOIN country AS c \
            ON p.id_country = c.id \
            WHERE p.id = ?", [req.params.id]
        );

        if (result.length === 0)
          return res.status(404).json({ message: "Province not found" });

        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProvincesFromCountry = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT p.id AS id, p.name AS province, c.name AS country, c.id AS id_country  \
            FROM province AS p \
                INNER JOIN country AS c \
            ON p.id_country = c.id \
            WHERE c.id = ?", [req.params.id]
        );

        if (result.length === 0)
          return res.status(404).json({ message: "Province not found" });

        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createProvince = async (req, res) => {
    try {
        const { name, id_country } = req.body;
        const [ result ] = await pool.query('INSERT INTO province(name, id_country, created_at, updated_at) VALUES (?, ?, ?, ?)', [ name, id_country, null, null ]);

        return res.json({ id: result.insertId })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateProvince = async (req, res) => {
    try {
        const [ result ] = await pool.query('UPDATE province SET ? WHERE id = ? ', [ req.body, req.params.id ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProvince = async (req, res) => {
    try {
        const [ result ] = await pool.query('DELETE FROM province WHERE id = ?', [ req.params.id ]);
        if (result.length === 0)
            return res.status(404).json({ message: 'Province not found' });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};