import "../styles/ReadingCard.css";

function ReadingCard({
  image,
  title,
  author,
  progress
}) {

  return (

    <div className="reading-card">

      <img
        src={image}
        alt={title}
        className="book-cover"
      />

      <div className="reading-info">

        <h3>{title}</h3>

        <p>{author}</p>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>

        </div>

        <span>{progress}% Completed</span>

      </div>

      <button className="continue-btn">
        Continue →
      </button>

    </div>

  );

}

export default ReadingCard;