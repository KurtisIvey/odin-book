import React from "react";
import Navbar from "../components/Navbar";
import { HiDotsHorizontal } from "react-icons/hi";
import Friend from "../components/Friend";
//redux
import { useSelector } from "react-redux";
import type { RootState } from "../reduxStore/store";

interface Friends {
  _id: string;
  username: string;
  profilePicUrl: string;
}

type Props = {};
function Friends(props: Props) {
  const id = useSelector((state: RootState) => state.user.id);

  const friendList = [
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
    {
      name: "Kurtis Ivey",
      imgSrc:
        "https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg",
    },
  ];
  return (
    <div>
      <Navbar />
      <main className="container flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10 max-w-4xl">
        <div className="mx-4 lg:mx-0 shadow-lg p-2 rounded-lg bg-white space-y-2">
          <h2 className="text-center font-semibold text-lg sm:text-2xl">
            Friends <span className="">({friendList.length})</span>
          </h2>
          <section className="grid sm:grid-cols-2 gap-[10px]">
            {friendList.map((friend, index) => {
              return (
                <div
                  key={index}
                  className=" rounded-md border border-grey-400 flex flex-row justify-between items-center p-1 "
                >
                  {/* encase img and a tag in same Link */}
                  <Friend name={friend.name} imgSrc={friend.imgSrc} />
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

{
  /* <main className="container border border-red-300 flex flex-col space-y-4 md:space-y-10 mx-auto mt-4 md:mt-10">
        {friendList.map((friend, index) => {
          return <div key={index}>{friend.name}</div>;
        })}
      </main> */
}

export default Friends;
