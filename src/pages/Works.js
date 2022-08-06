import Content from "../components/Content"

const VideoCard = ({ title, date, description }) => {
    return <div className="card">
    <div className="card-image">
      <figure className="image is-16x9">
        <img src="https://bulma.io/images/placeholders/640x360.png" />
      </figure>
    </div>
    <div className="card-content" style={{ backgroundColor: "rgb(232, 250, 235)" }}>
      <div className="content">
        <div className='has-text-centered'><b className='is-size-5'>{title}</b></div>
      </div>
    </div>
  </div>
}

const Works = () => {
    return <Content title="Works">
        <br/>
        <div className="columns">
            <div className="column">
                <VideoCard title="Certified Fresh"/>
            </div>
            <div className="column">
                <VideoCard title="Spare Jingles?"/>
            </div>
        </div>


    </Content>
}

export default Works