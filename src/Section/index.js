import "./style.css";

const Section = ({title, body, extraSectionContent}) => (
    <section className="section">
        <div className="section__container">
          <h2 className="section__header">{title}</h2>
        {extraSectionContent}
        </div>
        {body}
      </section>
);

export default Section;