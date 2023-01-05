import Content from "../components/Content";

const About = ({ data }) => {
  const sheet = data.find((sheet) => sheet.id === "content");
  if (!sheet) return null;
  const about = sheet.data[0]['About'].split("\n")
  return (
    <Content title="About">
      <div className="is-size-5">{about.map((paragraph, i) => {
        return <p key={i} className='mb-2'>{paragraph}</p>
      })}</div>
      <div className="has-text-centered my-4">
        <img src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/unnamed-5.jpg"></img>
      </div>
    </Content>
  );
};

export default About;
