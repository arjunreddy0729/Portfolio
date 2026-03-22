export default function Footer() {
  return (
    <footer className="relative z-[1] py-8 text-center border-t border-white/[0.04]">
      <p className="text-white/20 text-sm font-body">
        © {new Date().getFullYear()} Kadari Arjun Reddy. Designed & built with care.
      </p>
    </footer>
  );
}
