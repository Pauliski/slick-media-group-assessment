import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async (req, res) => {
  let { searchString } = req.query;
  const searchStringModify = searchString.replace(" ", "+");
  if (searchString) {
    const key = process.env.OMDB_API_KEY;
    try {
      const resq = await axios.get(
        `http://www.omdbapi.com/?s=${searchStringModify}&apikey=${key}`
      );
      if (resq.status === 200) {
        res.status(200).json({ result: resq.data.Search, success: true });
        
      } else {
        res.status(400).json({
          result: "Could not proccess request at this time",
          success: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
