import { AtSignIcon, ViewIcon } from "@chakra-ui/icons";
import { Code } from "@chakra-ui/react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const Card = ({ title, body, views, id, user, createdAt }) => {
  const index = title.indexOf("^*^");
  return (
    <div className="w-full rounded-lg p-4 border-1 border my-7 hover:border-black duration-150">
      {index > 0 && (
        <div className="w-full rounded-lg bg-slate-600 h-[200px] mb-5">
          <img
            className="w-full h-full object-contain"
            src={`https://nest-blog.up.railway.app/api/image/${title.slice(
              0,
              index
            )}`}
            alt="poster"
          />
        </div>
      )}
      <div>
        <Link to={`/details/${id}`}>
          <h2 className="card-title text-[27px] font-bold mb-4">
            {title.slice(index + 3, title.length)}
          </h2>
        </Link>
        <div className="max-h-[100px] overflow-hidden rounded-md">
          {parse(body)}
        </div>
        <div className="flex items-center justify-between rounded-lg bg-slate-200 py-2 px-3 mt-4">
          <p className="font-bold">{user.username}</p>
          <div className="flex items-end flex-col gap ">
            <Code>{new Date(createdAt).toDateString()}</Code>
            <div className="flex items-center gap-[2px]">
              <ViewIcon className="tex-[20px]" />
              <Code>{views}</Code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
