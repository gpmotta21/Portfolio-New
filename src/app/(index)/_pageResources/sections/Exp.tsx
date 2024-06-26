import Badge from "@/shared/components/Badge";
import ContentWrapper from "@/shared/components/ContentWrapper";
import { Link } from "@/shared/components/Icons";

export default function Exp() {
  return (
    <ContentWrapper element="section" className="relative pt-48">
      <h2 className="font-bebas-neue text-7xl md:text-8xl lg:text-9xl">Experience</h2>
      <ul className="mt-6 flex flex-col lg:flex-row">
        <Card
          date="06/2022 - PRESENT"
          title="Mid Full Stack Developer"
          description="Currently, I work at Varos as the lead developer responsible for our website. From shaping its infrastructure to writing its code and overseeing its journey to production."
          label={{ text: "VAROS", type: "anchor", href: "https://varos.com.br" }}
          tags={["Next js", "Typescript", "TailwindCSS", "AWS", "SQL"]}
        />
        <li className="flex flex-1 justify-center lg:items-center">
          <hr className="h-9 w-[1px] border border-neutral-700 lg:h-[1px] lg:w-9" />
        </li>
        <Card
          date="03/2020 - 06/2022"
          title="Front End Developer"
          description="Worked as a freelance Front End Developer, focusing on designing and implementing responsive user interfaces."
          label={{ text: "Free Lance", type: "text" }}
          tags={["React js", "Typescript", "Styled Components", "Mongo DB"]}
        />
      </ul>
      <div className="absolute -bottom-28 right-0 h-[500px] w-[650px] bg-[radial-gradient(circle,_rgba(255,219,88,.1)_0%,_rgba(10,10,10,0.1)_65%)]" />
    </ContentWrapper>
  );
}

type TCard = { title: string; date: string; description: string; tags: string[]; label: { text: string } & ({ type: "anchor"; href: string } | { type: "text" }) };
const Card = (props: TCard) => {
  return (
    <li className="relative z-10 w-full border border-neutral-700 p-6 lg:max-w-[600px]">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-neutral-900/80 z-[-1] blur-xl" />
      <p className="text-sm text-neutral-500">{props.date}</p>
      <div className="mt-3 flex w-full max-w-[300px] items-center font-medium">
        {props.title} -
        <span className="ml-1 text-mostard-300">
          {props.label.type === "anchor" ? (
            <a href={props.label.href} className="flex">
              {props.label.text} <Link className="ml-2 h-5 w-5" />
            </a>
          ) : (
            props.label.text
          )}
        </span>
      </div>
      <p className="mt-2 max-w-[418px] text-sm text-neutral-400">{props.description}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <Badge text={tag} />
        ))}
      </div>
    </li>
  );
};
