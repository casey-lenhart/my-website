import Content from "../components/Content";
import useGoogleSheets from "use-google-sheets";
import { useMemo } from "react";
import _ from "lodash";

const VideoCard = ({ title, date, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-16x9">
          <img src="https://bulma.io/images/placeholders/640x360.png" />
        </figure>
      </div>
      <div
        className="card-content"
        style={{ backgroundColor: "rgb(232, 250, 235)" }}
      >
        <div className="content">
          <div className="has-text-centered">
            <b className="is-size-5">
              {title} {date}
            </b>
            <p>{description}</p>
            <p>{link}</p>
          </div>
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
  return _.chunk(sheet.data, 2).map((chunk) => {
    return (
      <div className="columns">
        <div className="column">
          <VideoCard {...sheetPointToCard(chunk[0])} />
        </div>
        {chunk.length > 1 ? (
          <div className="column">
            <VideoCard {...sheetPointToCard(chunk[1])} />
          </div>
        ) : null}
      </div>
    );
  });
};

const Works = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: "AIzaSyDnZ4bFfMlvV4VBL9RKsQJ2LdVXht4vLKY",
    sheetId: "1_wiygUp4ZTrDy5VBjSO3tYVSlTQXBMWd-G1alnulptQ",
  });

  const worksData = useMemo(() => data, [data, loading]);

  return (
    <Content title="Works">
      <br />
      <VideoWorks sheetsData={worksData} />
      <pre>
        {JSON.stringify(data, null, 2)}
        <br />
        {JSON.stringify(loading, null, 2)}
        <br />
        {JSON.stringify(error, null, 2)}
        <br />
      </pre>
    </Content>
  );
};

export default Works;
