export default function Home() {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=2')" }}
    >
      <h1 className="text-5xl font-bold text-white bg-black/50 px-6 py-3 rounded-lg shadow-lg">
        Welcome to My Website 🚀
      </h1>
    </div>
  );
}
