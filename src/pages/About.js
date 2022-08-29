import Content from "../components/Content";

const about = `

Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 

`;

const About = ({ data }) => {
  const sheet = data.find((sheet) => sheet.id === "content");
  if (!sheet) return null;
  return (
    <Content title="About">
      <div className="is-size-4">{sheet.data[0]['About']}</div>
      <div className="has-text-centered my-5">
        <img src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/Screen Shot 2022-08-20 at 11.49.40 AM.png"></img>
      </div>
    </Content>
  );
};

export default About;
