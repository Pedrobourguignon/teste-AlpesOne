import Image from "next/image";
import "../styles/components/footer.sass";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
          elementum orci, vitae commodo nibh. In vitae convallis nisl. Morbi
          rhoncus mattis purus sed commodo. Integer rhoncus ex risus. Proin
          efficitur elit nunc, ut pulvinar massa egestas in. Fusce quis quam
          viverra, pretium quam ac, consectetur lectus.
        </p>
      </div>
      <div className="divider" />
      <p>© Copyright © 2021 Lorem ipsum dolor sit amet.</p>
      <div className="made-by">
        <p>Feito por:</p>
        <Image
          src="/images/logo-alpes.png"
          alt="logo alpes"
          width={124}
          height={24}
        />
      </div>
    </div>
  );
};
