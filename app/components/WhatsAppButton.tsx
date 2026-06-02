const WHATSAPP_NUMBER = "60162258458";
const WHATSAPP_MESSAGE = "Hi, I'd like to enquire about wall panel accessories.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.003 3C9.374 3 4 8.373 4 15c0 2.388.7 4.617 1.91 6.495L4 29l7.71-1.873A11.95 11.95 0 0 0 16 27.001c6.628 0 12-5.373 12-12s-5.372-12-11.997-12Zm0 21.999a9.995 9.995 0 0 1-5.099-1.398l-.365-.217-4.578 1.112 1.143-4.46-.237-.376A9.995 9.995 0 1 1 26 14.999c0 5.522-4.477 10-9.997 10Zm5.486-7.484c-.301-.151-1.78-.879-2.057-.979-.276-.101-.476-.151-.677.151-.201.302-.776.978-.951 1.179-.175.201-.351.226-.652.075-.301-.151-1.27-.468-2.42-1.494-.894-.797-1.498-1.781-1.673-2.082-.175-.302-.019-.466.132-.617.135-.135.301-.351.452-.527.151-.176.201-.302.301-.502.101-.201.05-.377-.025-.527-.075-.151-.677-1.632-.928-2.236-.244-.585-.494-.505-.677-.515l-.577-.01c-.201 0-.527.075-.803.376-.276.302-1.053 1.029-1.053 2.509s1.078 2.911 1.228 3.112c.151.201 2.122 3.243 5.142 4.547.719.31 1.279.495 1.717.633.722.229 1.379.197 1.898.12.579-.086 1.78-.728 2.031-1.431.251-.703.251-1.305.176-1.431-.075-.126-.276-.201-.577-.351Z" />
      </svg>
    </a>
  );
}
