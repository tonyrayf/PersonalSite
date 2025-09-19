const logo_width = 100;

export default function Contacts() {
  return (
    <div>
      <div style={{fontWeight: "bold", fontSize: "25px", paddingBottom: "30px"}}>свэг.</div>

      <img src="github-mark-white.svg" width={logo_width} alt="GitHub" />
      <img src="telegram-mark.png" width={logo_width} alt="Telegram" />
    </div>
  );
}