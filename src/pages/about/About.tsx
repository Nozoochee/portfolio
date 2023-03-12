import SiteTitle from "../../components/general/siteTitle";

type Props = {};

function About({}: Props) {
  return (
    <>
      <SiteTitle title="About" />
      <section className="my-4">
        <p>This website has been built using React + Typescript + TailwindCSS, running on my cloud server using NGINX, Cloudflare and Let's Encrypt</p>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-bold py-2">Me</h2>
        <p>Hi, I'm a computer science + chinese studies student from Germany. I love learning all kinds of new skills and technologies.</p>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-bold py-2">Skills</h2>
        <ul className="list-disc mx-4">
          <li>Javascript + Typescript</li>
          <li>Node, Express</li>
          <li>React</li>
          <li>C and C++ (from Unreal Engine)</li>
          <li>Java + a bit of Assembly (University)</li>
          <li>Cloud hosting</li>
          <li>日本語 (6年独学)</li>
          <li>简体中文 (在大学学了两年)</li>
        </ul>
      </section>

      <section className="my-4">
        <h2 className="text-xl font-bold py-2">Things I want to learn in the future</h2>
        <ul className="list-disc mx-4">
          <li>Next.js</li>
          <li>SolidJS</li>
          <li>Sveltekit</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Korean</li>
        </ul>
      </section>
    </>
  );
}

export default About;
