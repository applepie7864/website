import Warning from "./icons/warning";

export default function NotFound() {
  return (
    <div className="w-screen h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center">
      <img
        src={process.env.REACT_APP_PUBLIC_URL + "/assets/imgs/memoji.png"}
        className="h-32 desktop:h-56"
      />
      <div className="desktop:w-80 px-4 py-3 desktop:py-4 text-gray-800 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center gap-2">
        <div className="warning-icon scale-[0.8] desktop:scale-105"><Warning /></div>
        <div className="text-base desktop:text-xl bold">404</div>
        <a href="/" className="text-sm desktop:text-lg regular text-gray-500 underline hover:no-underline">My website's here!</a>
      </div>
    </div>
  );
};