import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-12">
        <section className="section columns">
          <div className="has-text-centered is-6">
            <div
              style={{
                width: "300px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="has-text-centered is-6 feature-info">
            <h4 className="mb-1">{item.heading}</h4>
            <p>{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
