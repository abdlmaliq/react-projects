import { useEffect, useState } from "react";
import "./style.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchimages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchimages(url);
    }
  }, [url]);

  console.log(image);

  if (loading) {
    return <div>Data Loading! Please wait....</div>;
  }

  if (errMsg !== null) {
    return <div>Error Occured! {errMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <svg
        className=" arrow arrow-left"
        onClick={handlePrevious}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
      {image && image.length
        ? image.map((imageitem,index) => (
            <img
              key={imageitem.id}
              alt={imageitem.download_url}
              src={imageitem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-image"
              }
            />
          ))
        : null}

      <svg
        className="arrow arrow-right"
        onClick={handleNext}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
          clip-rule="evenodd"
        ></path>
        <path
          fill-rule="evenodd"
          d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="circle-indicator">
        {image && image.length
          ? image.map((_, index) => (
              <button 
              key={index} 
              className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
              onClick={()=> setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
