import SpotifyCard from "../components/SpotifyCard";

export default function Footer() {
  return (
    <section className="pl-[34.5rem] pr-20 pt-16 flex flex-col w-full items-end">
      <div className="flex flex-col items-center">
        <img src={ require("../assets/imgs/memoji.png") } alt="memoji" className="w-28 h-28" />
        <SpotifyCard />
        <div className="mt-2 text-xs text-zinc-400">2024 Annie Guo © Waterloo, ON</div>
      </div>
    </section>
  )
}
