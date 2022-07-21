import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCode = () => {
  const [url, setUrl] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      // bgColor={"#00ff00"}
      level={"H"}
    />
  );
  return (
    <>
      <h1>Username: </h1>
      <div className="qrcode__container mt-5">
        <div>{qrcode}</div>
        <div className="input__group">
          <form onSubmit={downloadQRCode}>
            <label>Enter URL</label>
            <input
              type="text"
              value={url}
              onChange={qrCodeEncoder}
              placeholder="https://hackernoon.com"
            />
            <button type="submit" disabled={!url}>
              Download QR code
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default QrCode;
