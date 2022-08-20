import useWindowWidth from "../hooks/useWindowWidth"

const description = `

is a former film student at the College of William & Mary. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

`

const Home = () => {

    const width = useWindowWidth()

    return <section className="hero is-fullheight-with-navbar">

      {width >= 1023 ?     <div className="hero-body"><div style={{ fontSize: width < 1280 ? '2rem' : '3rem' }}>
        <div className="columns is-flex is-align-items-center">
            <div className="column is-2"></div>
            <div className="column is-2 is-flex is-align-items-center">
                <img src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/Screen Shot 2022-08-20 at 11.49.40 AM.png" />
            </div>
            <div className="column is-6 pl-5">
                <b>Casey Lenhart</b>
                <div className='is-size-4'>
                {description}
                </div>
            </div>
            <div className="column is-2"></div>
        </div>
      </div></div> : <div className='container px-5 mt-2 mb-5 has-text-centered'>
            <img src="https://raw.githubusercontent.com/casey-lenhart/casey-lenhart.github.io/main/public/Screen Shot 2022-08-20 at 11.49.40 AM.png" style={{ maxHeight: 300 }}/>
            <div className='my-3' style={{ fontSize: '1rem' }}>
            <b>Casey Lenhart</b>{description}
            </div>
    </div>}
  </section>
}

export default Home
