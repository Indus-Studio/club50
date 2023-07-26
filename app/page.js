const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Providing meaningful engagement
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">
        {" "}
        for elderly, by elderly
      </span>
    </h1>
    <p className="desc text-center">
      Discover a World of New Possibilities with Club50: The Ultimate Platform
      Connecting Senior Citizens with a Wide Array of Exciting Job and
      Engagement Opportunities!
    </p>
    <p className="text-3xl font-bold my-10 text-center">Current Openings</p>
    <iframe
      className="airtable-embed mb-10"
      src="https://airtable.com/embed/appYZaXXDHFgbQmDN/shrQngyVd1Vp7myUc?backgroundColor=gray&layout=card&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
      style={{ background: "transparent", border: "1px solid #ccc" }}
    ></iframe>
  </section>
);

export default Home;
