/* img et children sont les props de banner. les props sont déclarer entre accolade*/
const Banner = ({ img, children }) => {
  return (
    <section className="hero-header">
      <img src={img} alt="" />
      {children}
    </section>
  );
};

export default Banner;
