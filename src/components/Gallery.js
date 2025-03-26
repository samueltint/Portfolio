import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallery({ items }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative mx-auto">
      <div className="md:px-24 max-w-[800px] p-5 rounded-lg bg-slate-400">
        <ReactImageGallery
          items={items}
          showNav={true}
          autoPlay={true}
          slideDuration={800}
          slideInterval={8000}
          onScreenChange={(isFull) => setIsFullscreen(isFull)}
          renderLeftNav={(onClick) => (
            <div
              className={`hidden md:flex h-full absolute ${
                isFullscreen ? "left-0" : "-left-24"
              }  items-center`}
            >
              <ChevronLeft
                className=" z-20 w-24 h-24 stroke-slate-100 hover:stroke-slate-200 transition-all"
                onClick={onClick}
              />
            </div>
          )}
          renderRightNav={(onClick) => (
            <div
              className={`hidden md:flex h-full absolute ${
                isFullscreen ? "right-0" : "-right-24"
              } items-center`}
            >
              <ChevronRight
                className=" z-20 w-24 h-24 stroke-slate-100 hover:stroke-slate-200 transition-all"
                onClick={onClick}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
}
