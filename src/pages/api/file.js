import fs from "fs";
import * as path from "path";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  res.setHeader(
    "Content-Disposition",
    "attachment; filename=DeepThakkarResume.pdf"
  );
  res.setHeader("Content-Type", "application/pdf");

  const filePath = path.join(
    process.cwd(),
    "/src/pdf",
    "/DeepThakkarResume.pdf"
  );
  const fileStream = fs.createReadStream(filePath);

  fileStream.pipe(res);

  res.on("finish", () => {
    fileStream.close();
  });
}
