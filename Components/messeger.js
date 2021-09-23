import React from "react";
import Link from "next/link";

const Messeger = () => {
  return (
    <div className="mt-2">
      <div className="border_ mt-4"></div>
      <div className="d-flex justify-content-center align-items-center  my-4">
        <Link href="https://www.instagram.com/?hl=ru">
          <a>
            <img
              className="icon me-5 my-4 fs-3"
              src="instagram.png"
              alt="instagram"
            />
          </a>
        </Link>
        <Link href="https://web.telegram.org">
          <a>
            <img
              className="icon me-5 my-4 fs-3"
              src="telegram.png"
              alt="telegram"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com">
          <a>
            <img className="icon my-4 fs-3" src="facebook.png" alt="facebook" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Messeger;
