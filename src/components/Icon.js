import { Link } from "react-router-dom";

export default function Icon({ className, href, link, children }) {
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="fill-slate-600 hover:fill-slate-500"
        >
          <div className={className}>{children}</div>
        </a>
      ) : (
        <Link to={link}>
          <div className={className}>{children}</div>
        </Link>
      )}
    </>
  );
}
