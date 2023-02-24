import { pool } from "../data/db.js";

export const getCountries = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM country ORDER BY id DESC');
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getCountryList = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT id, name FROM country ORDER BY id DESC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCountry = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM country WHERE id = ?', [req.params.id]);
        if (result.length === 0)
            return res.status(404).json({ message: 'country not found' });

        return res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createCountry = async (req, res) => {
    try {
        const { name } = req.body;
        const [ result ] = await pool.query('INSERT INTO country(name, created_at, updated_at) VALUES (?, ?, ?)', [ name, null, null ]);

        return res.json({ id: result.insertId })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateCountry = async (req, res) => {
    try {
        const [ result ] = await pool.query('UPDATE country SET ? WHERE id = ? ', [ req.body, req.params.id ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteCountry = async (req, res) => {
    try {
        const [ result ] = await pool.query('DELETE FROM country WHERE id = ?', [ req.params.id ]);
        if (result.length === 0)
            return res.status(404).json({ message: 'Country not found' });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};