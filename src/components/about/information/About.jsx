import Card from "../Card";

export default function About() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=2')" }}
    >
        <Card content={
            <>
            <h2 className="text-4xl font-bold mb-6 text-red-400">About My Website</h2>
            <p className="text-lg leading-relaxed text-gray-200">
            Welcome to <span className="font-semibold text-white">MyWebsite</span> — 
            a modern and creative platform designed to showcase beautiful content 
            with smooth navigation.  
            <br /><br />
            Our goal is to provide an interactive and visually appealing experience, 
            where every section feels like its own unique page. Whether you want to 
            explore information, connect with us, or simply enjoy the design — this 
            site has been built with simplicity and style in mind.
            <br /><br />
            Built using <span className="font-semibold text-red-300">React</span> and 
            styled with <span className="font-semibold text-red-300">Tailwind CSS</span>, 
            the project demonstrates how powerful and flexible modern web development 
            can be.
            </p>
            </>
        }></Card>
      {/* <div className="bg-black/70 p-10 rounded-2xl max-w-3xl text-center shadow-lg">
        
      </div> */}
    </div>
  );
}