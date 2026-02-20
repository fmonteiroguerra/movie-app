import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const ModalMovieDetail = ({
  title,
  id,
  vote_average,
  poster_path,
  original_language,
  release_date,
  overview,
  popularity,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen} className="detail-button">
        More
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="movie-modal">
          <button onClick={handleClose} className="x-modal">
            &times;
          </button>

          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : "/no-movie.png"
            }
            alt=""
          />

          <div className="mt-4">
            <h2>{title}</h2>

            <div className="content">
              <div className="rating">
                <img src="/star.svg" alt="" />
                <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
              </div>
              <span>•</span>
              <p className="lang">{original_language}</p>
              <span>•</span>
              <p className="year">
                {release_date ? release_date.split("-")[0] : "N/A"}
              </p>
            </div>

            <div>
              <h3>Overview:</h3>
              <p className="text-white"> {overview ? overview : "N/A"}</p>
            </div>

            <div>
              <h3>Popularity Rate:</h3>
              <p className="text-white"> {popularity ? popularity : "N/A"}</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalMovieDetail;
