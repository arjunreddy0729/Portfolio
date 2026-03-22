export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Amber orb - top left */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
          animation: 'float-orb-1 25s ease-in-out infinite',
        }}
      />
      {/* Blue orb - bottom right */}
      <div
        className="absolute bottom-[10%] -right-[5%] w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
          animation: 'float-orb-2 30s ease-in-out infinite',
        }}
      />
      {/* Purple orb - center */}
      <div
        className="absolute top-[50%] left-[40%] w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)',
          animation: 'float-orb-3 35s ease-in-out infinite',
        }}
      />
    </div>
  );
}
