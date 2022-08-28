import Content from "../components/Content";
import useGoogleSheets from "use-google-sheets";
import { useMemo } from "react";
import _ from "lodash";

const YoutubeEmbed = ({ src }) => {
  const embedString = src.replace('/watch?v=', '/embed/')
  return (
    <figure class="image is-16by9">
    <iframe
      className='has-ratio'
      src={embedString}
      style={{ width: '100%', height: '100%' }}
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
    </figure>
  );
};

const VideoCard = ({ title, date, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <YoutubeEmbed src={link} />
      </div>
      <div
        className="card-content py-4"
        style={{ backgroundColor: "rgb(232, 250, 235)" }}
      >
        <div className="content">
          <div className="has-text-centered">
            <b className="is-size-4 mb-5">{title}</b>
            <br />
          </div>
            <p className="is-size-5">{description}</p>
        </div>
      </div>
    </div>
  );
};

const VideoWorks = ({ sheetsData }) => {
  const sheetPointToCard = (sheetPoint) => {
    return {
      title: sheetPoint["Title"],
      date: sheetPoint["Date"],
      description: sheetPoint["Description"],
      link: sheetPoint["Youtube link"],
    };
  };

  if (!sheetsData) return null;
  const sheet = sheetsData.find((sheet) => sheet.id === "video");
  if (!sheet) return null;
  return _.chunk(sheet.data, 2).map((chunk, i) => {
    return (
      <div className="columns" key={i}>
        <div className="column">
          <VideoCard {...sheetPointToCard(chunk[0])} />
        </div>

        <div className="column">
          {chunk.length > 1 ? (
            <VideoCard {...sheetPointToCard(chunk[1])} />
          ) : null}
        </div>
      </div>
    );
  });
};

const Works = ({ data }) => {

  return (
    <Content title="Works">
      <br />
      <VideoWorks sheetsData={data} />
      {/* <pre>
        {JSON.stringify(data, null, 2)}
        <br />
        {JSON.stringify(loading, null, 2)}
        <br />
        {JSON.stringify(error, null, 2)}
        <br />
      </pre> */}
    </Content>
  );
};

export default Works;
