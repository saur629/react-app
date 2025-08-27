export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10 mt-auto sticky bottom-0">
      © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
    </footer>
  );
}