import useWindowWidth from "../hooks/useWindowWidth";

const Home = ({ data }) => {
  const width = useWindowWidth();
  const sheet = data.find((sheet) => sheet.id === "content");
  if (!sheet) return null;
  return (
    <section className="hero is-fullheight-with-navbar">
      {width >= 1023 ? (
        <div className="hero-body">
          <div style={{ fontSize: width < 1280 ? "2rem" : "3rem" }}>
            <div className="columns is-flex is-align-items-center">
              <div className="column is-2"></div>
              <div className="column is-4 is-flex is-align-items-center">
                <img src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/Screen Shot 2022-08-20 at 11.49.40 AM.png" />
              </div>
              <div className="column is-4 pl-5">
                <b>Casey Lenhart</b>
                <div className="is-size-4">{sheet.data[0]['Home']}</div>
              </div>
              <div className="column is-2"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container px-5 mt-2 mb-5 has-text-centered">
          <img
            src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/Screen Shot 2022-08-20 at 11.49.40 AM.png"
            style={{ maxHeight: 300 }}
          />
          <div className="my-3" style={{ fontSize: "1rem" }}>
            <b>Casey Lenhart</b>
            {sheet.data[0]['Home']}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
