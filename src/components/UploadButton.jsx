import { parse } from "papaparse";
import { useNavigate } from "react-router-dom";

export default function UploadButton() {
  const navigate = useNavigate();

  async function handleUploadFile(event) {
    const file = event.target.files[0];

    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const csvData = event.target.result;
          const imdbDataJson = await convertCsvToJson(csvData);

          // onFileUpload(imdbDataJson);
          // console.log("JSON data stored:", imdbDataJson);

          navigate("/table", { state: { imdbData: imdbDataJson } });
        };

        reader.readAsText(file);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  }

  function convertCsvToJson(csvData) {
    return new Promise((resolve, reject) => {
      parse(csvData, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          resolve(results.data);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  return (
    <>
      <input
        type="file"
        className="upload-file"
        id="file"
        accept=".csv"
        onChange={handleUploadFile}
      />
      <label htmlFor="file" className="upload-btn">
        UPLOAD NOW
      </label>
    </>
  );
}
