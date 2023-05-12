import Wrapper from "../../assets/wrappers/contact_us";
import "./offer.css";

const Offer = () => {
  const services = [
    {
      title: "Fast Delivery",
      iconLink: "https://img.icons8.com/ios-filled/100/fast-forward.png",
      content:
        "Get your orders faster than ever with our lightning-fast delivery. Experience quick and hassle-free shipping today!",
      alt: "local-delivery-time--v1",
    },
    {
      title: "Original Products",
      iconLink:
        "https://img.icons8.com/glyph-neue/64/tiktok-verified-account.png",
      content:
        "Shop with confidence knowing that we only sell 100% original products. Trust us to provide you with the genuine devices you deserve.",
      alt: "tiktok-verified-account",
    },
    {
      title: "1 Year Waranty",
      iconLink: "https://img.icons8.com/sf-black-filled/64/lock-2.png",
      content:
        "Protect your purchase with our comprehensive 1-year warranty. Shop now and enjoy peace of mind with every phone.",
      alt: "lock-2",
    },
    {
      title: "Customer Service",
      iconLink: "https://img.icons8.com/glyph-neue/64/alarm-clock.png",
      content:
        "Need help? Contact our friendly customer service team and get fast, reliable assistance with any questions you have",
      alt: "alarm-clock",
    },
  ];
  return (
    <div className="container mar-top">
      <div className="col-sm-12">
        <h2 className="text-center">
          <strong>We Offer</strong>
          <hr className="w-50" />
        </h2>
        <div className="services">
          {services.map((service) => {
            return (
              <div className="service">
                <img
                  className="service-img"
                  src={service.iconLink}
                  alt={service.alt}
                />
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Offer;
